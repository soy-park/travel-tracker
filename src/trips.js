import Destinations from "../src/destinations";

class Trips {
    constructor(arrayOfTrips, arrayOfDestinations) {
        this.listOfTrips = arrayOfTrips,
        this.destinations = new Destinations(arrayOfDestinations)
    }

    getTodaysDate() {
        let currentDate = new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let currentDateFormatted = `${year}/${month}/${day}`;
        return currentDateFormatted;
    }

    getPastTrips() {
        const tripsBeforeToday = this.listOfTrips.filter((trip) => trip.date < this.getTodaysDate);

        const sortedTripsByDate = tripsBeforeToday.sort((a, b) => {
            return a.date - b.date;
        })
    
        return sortedTripsByDate;
    }

    getUpcomingTrips() {
        const upcomingTrips = this.listOfTrips.filter((trip) => trip.date > this.getTodaysDate);

        const sortedTripsByDate = upcomingTrips.sort((a, b) => {
            return a.date - b.date;
        })
    
        return sortedTripsByDate;
    }

    getPendingTrips() {
        return this.listOfTrips.filter((trip) => trip.status === "pending" && trip.date > this.getTodaysDate);
    }

    calculateTotalSpending(id) {
        const tripsByUserID = this.listOfTrips.filter((trip) => trip.userID === id);
        return tripsByUserID.forEach((trip) => {
            const desiredDestination = Destinations.listOfDestinations.filter((destination) => destination.id === trip.destinationID);
            const totalLodgingCost = desiredDestination.estimatedLodgingCostPerDay * trip.duration;
            const totalFlightCost = desiredDestination.estimatedFlightCostPerPerson * trip.travelers;
            const fee = (totalLodgingCost + totalFlightCost) * 0.10 
            const totalCost = (totalLodgingCost + totalFlightCost) + fee;
            return totalCost;
        })
    }
}

export default Trips;