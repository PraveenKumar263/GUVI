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
  }
  
  // Example usage:
  var distance = 15;
  var surgeMultiplier = 1.5;
  var uberPriceCalculator = new UberPriceCalculator(distance, surgeMultiplier);
  var totalPrice = uberPriceCalculator.calculatePrice();
  console.log(`The total price for the trip is ${totalPrice}`);