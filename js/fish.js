(function () {
    new Vue({
      el: ".main",
      data: {
        fishNum: 10,
        fishList: [],
        bubbleList: [],
        foodList: []
      },
      mounted() {
        this.init();
      },
      methods: {
        init() {
          this.width = window.innerWidth;
          this.height = window.innerHeight;
          for (let i = 0; i < this.fishNum; i++) {
            let fish = this.addFish(i);
            this.fishList.push(fish);
          }
          this.move();
          this.foodMove();
          this.throw();
          window.onresize = () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
          };
        },
        addFish(i) {
          return {
            index: `fish_${i}`,
            x: this.random(0, this.width - 60),
            y: this.random(15, this.height - 30),
            direction: this.random(0, 1) > 0.5 ? 1 : -1,
            type: "fish-type" + ~~this.random(1, 6),
            speed: this.random(1, 3),
            bTime: this.random(1, 3) * 100,
            bMax: this.random(3, 10) * 100,
            sy: Math.random(0, 10),
            level: ~~this.random(0, 2)
          };
        },
        addBubble(fish) {
          const { index, x, y } = fish;
          for (let i = 0; i < this.bubbleList.length; i++) {
            if (this.bubbleList[i].index == index) {
              this.bubbleList.splice(i, 1);
            }
          }
          this.bubbleList.push({
            x,
            y,
            index
          });
        },
        foodMove() {
          window.requestAnimationFrame(() => {
            this.foodList.forEach((food, index) => {
              food.y++;
              if (food.y > this.height) {
                this.foodList.splice(index, 1);
              }
            });
            this.foodMove();
          });
        },
        move() {
          window.requestAnimationFrame(() => {
            this.fishList.forEach((fish) => {
              if (++fish.bTime > fish.bMax) {
                fish.bTime = 0;
                this.addBubble(fish);
              }
  
              if (this.foodList.length > 0) {
                let foodIndex = 0;
  
                if (this.foodList.length > 1) {
                  for (let i = 0, sub = null; i < this.foodList.length; i++) {
                    let num = Math.abs(this.foodList[i].x - fish.x);
                    if (sub == null) sub = num;
                    if (num < sub) {
                      sub = num;
                      foodIndex = i;
                    }
                  }
                }
  
                let food = this.foodList[foodIndex];
  
                let dx = food.x - fish.x;
                let dy = food.y - fish.y;
                if (dx >= 0) {
                  fish.direction = 1;
                } else {
                  fish.direction = -1;
                }
  
                let angle = Math.atan2(dy, dx);
  
                if (dx < 10 && dx > -10 && dy < 10 && dy > -10) {
                  fish.level++;
                  this.foodList.splice(foodIndex, 1);
                  fish.direction = Math.random() > 0.5 ? 1 : -1;
                } else {
                  let vx = fish.speed * 1.2 * Math.cos(angle);
                  let vy = fish.speed * 1.2 * Math.sin(angle);
                  fish.x += vx;
                  fish.y += vy;
                }
              } else {
                fish.x += fish.speed * fish.direction;
                fish.sy += 0.01;
                fish.y += Math.cos(fish.sy) * 2;
              }
  
              if (fish.x < -60) {
                fish.x = -60;
                fish.direction *= -1;
                fish.speed = this.random(1, 3);
              }
              if (fish.x > this.width + 30) {
                fish.x = this.width + 30;
                fish.direction *= -1;
                fish.speed = this.random(1, 3);
              }
              if (fish.y < 0) {
                fish.y = 0;
              }
              if (fish.y > this.height - 30) {
                fish.y = this.height - 30;
              }
            });
  
            this.move();
          });
        },
        throw() {
          this.$refs.pool.addEventListener("click", (e) => {
            let food = {
              x: e.layerX,
              y: e.layerY
            };
            let index = this.foodList.push(food);
          });
        },
        random(min, max) {
          return min + Math.random() * max;
        }
      }
    });
  })();
  