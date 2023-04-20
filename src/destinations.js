class Destinations {
    constructor(arrayOfDestinations) {
        this.listOfDestinations = arrayOfDestinations
    } 

    getDestinationsByID(destinationId) {
        return this.listOfDestinations.filter((destination) => destination.id === destinationId);
    }

    calculateEstimatedCost(destinationId) {
        const desiredDest = this.listOfDestinations.filter((destination => destination.id === destinationId));
        
    }
}

export default Destinations;