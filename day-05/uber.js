class UberPriceCalculator {
  constructor(distance, surgeMultiplier=1) {
    this.baseFare = 2;
    this.ratePerMile = 1.5;
    this.surgeMultiplier = surgeMultiplier || 1;
    this.distance = distance;
  }
  
  calculatePrice() {
    return (this.baseFare + (this.ratePerMile * this.distance)) * this.surgeMultiplier;
  }

  getBaseFare() {
    return this.baseFare;
  }

  setBaseFare(baseFare) {
    this.baseFare = baseFare;
  }

  getRatePerMile() {
    return this.ratePerMile;
  }

  setRatePerMile(ratePerMile) {
    this.ratePerMile = ratePerMile;
  }

  getSurgeMultiplier() {
    return this.surgeMultiplier;
  }

  setSurgeMultiplier(surgeMultiplier) {
    this.surgeMultiplier = surgeMultiplier;
  }

  getDistance() {
    return this.distance;
  }

  setDistance(distance) {
    this.distance = distance;
  }

}
  
var uber1 = new UberPriceCalculator(15, 1.5);
console.log(uber1);
var totalPrice = uber1.calculatePrice();
console.log(`Surge multiplier is ${uber1.surgeMultiplier}`);
console.log(`The total price for the trip is ${totalPrice}`);
uber1.setBaseFare(2.5);
uber1.setRatePerMile(1.8);
uber1.setSurgeMultiplier(3);
console.log(uber1.getBaseFare());
console.log(uber1.getRatePerMile());
console.log(uber1.getSurgeMultiplier());