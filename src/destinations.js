class Destinations {
    constructor(arrayOfDestinations) {
        this.listOfDestinations = arrayOfDestinations
    } 

    getDestinationsByID(destinationId) {
        return this.listOfDestinations.filter((destination) => destination.id === destinationId);
    }

    findIDByDestinationName(destinationName) {
        const destinationObj = this.listOfDestinations.find((destination) => destination.destination === destinationName);
        return destinationObj.id;
    }

    calculateEstimatedCost(destinationId, duration, travelers) {
        const desiredDest = this.listOfDestinations.filter((destination => destination.id === destinationId));
        const totalLodging = desiredDest.estimatedLodgingCostPerDay * duration;
        const totalFlight = desiredDest.estimatedFlightCostPerPerson * travelers;
        const total = totalLodging + totalFlight 
        const fee = total * .10;
        return total + fee;
    }
}

export default Destinations;