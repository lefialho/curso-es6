export default class Hours {
  constructor(operatingHours, activeClass) {
    this.operatingHours = document.querySelector(operatingHours);
    this.activeClass = activeClass;
  }

  operationData() {
    this.weekendDays = this.operatingHours.dataset.weekend.split(',').map(Number);
    this.weekendHours = this.operatingHours.dataset.hour.split(',').map(Number);
  }

  dataNow() {
    this.dataNow = new Date()
    this.dayNow = this.dataNow.getDay();
    this.hourNow = this.dataNow.getUTCHours() - 3; //getHours() também funciona, mas pega hora do PC
  }

  isOpen() {
    const openWeekend = this.weekendDays.indexOf(this.dayNow) !== -1
    const openHour = (this.hourNow >= this.weekendHours[0] && this.hourNow < this.weekendHours[1]);
    return openWeekend && openHour;
  }

  activeOpen() {
    if (this.isOpen()) {
      this.operatingHours.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.operatingHours) {
      this.operationData();
      this.dataNow()
      this.activeOpen();
    }
    return this
  }
}