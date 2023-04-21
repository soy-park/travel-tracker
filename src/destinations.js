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
        console.log(desiredDest)
        const totalLodging = desiredDest[0].estimatedLodgingCostPerDay * duration;
        console.log(totalLodging)
        const totalFlight = desiredDest[0].estimatedFlightCostPerPerson * travelers;
        console.log(totalFlight)
        const total = totalLodging + totalFlight 
        const fee = total * .10;
        return total + fee;
    }
}

export default Destinations;