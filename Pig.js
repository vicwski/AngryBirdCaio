class Pig extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50)
    this.image = loadImage('sprites/enemy.png')
    this.visibility = 255
  }

  display() {
    if (this.body.speed < 3) {
      super.display()
    } else {
      push()
      World.remove(world, this.body)
      this.vibility -= 5
      tint(255, this.visibility)
      pop()
    }
  }

  score1() {
    if (this.visibility < 0 && this.visibility > -1005) {
      score++
    }
  }

  score2() {
    if (this.visibility < 0 && this.visibility > -1005) {
      score += 2
    }
  }
}
