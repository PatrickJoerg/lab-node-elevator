class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
    this.waitingList = [];
    this.passangers = [];
    this.interval;
  }

  start() {
    this.intervalId = setInterval(() =>
    {this.update(); },1000)
  };
  stop() {
    clearInterval(this.intervalId);
  }
  update() {
    if (this.requests.length === 0){
      if (this.waitingList.length === 0) {
        this.stop();
        while (this.floor > 0) {
          this.floorDown();
        }
      } else {
        this.requests.push(this.waitingList[0].originFloor);
      }
    } else {
      if (this.requests[0] < this.floor) {
        this.floorDown();
      } else if
        (this.requests[0] > this.floor) {
          this.floorUp();
        } else if (this.requests[0] === this.floor) {
          this.requests.splice(0, 1);
        }
        }
    this.log();
   };

  _passengersEnter() {
    this.waitingList.forEach((person, i) => {
      if (person.originFloor === this.floor){
        this.passangers.push (person);
        this.waitingList.pop (person);
        this.requests.push (person.destinationFloor);
        console.log (person.name + " has entered the elevator")
      }
    })
  }
  _passengersLeave() {
    this.passangers.forEach((person, i) => {
      if (person.destinationFloor === this.floor){
        this.passangers.pop (person);
        console.log (person.name + "has left the elevator")
      }
    })
  }
  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.direction = "up";
      this.floor += 1;
      this._passengersEnter();
      this._passengersLeave();
    }else {
      this.direction = "static";
    }
  }
  floorDown() {
    if (this.floor > 0){
      this.direction = "down";
      this.floor -= 1;
      this._passengersEnter();
      this._passengersLeave();
    }else{
      this.direction = "static"
    }
  }
  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
  }
  log() {
    console.log(`Direction: ${this.direction} Floor: ${this.floor}`)
   }
}

module.exports = Elevator;
