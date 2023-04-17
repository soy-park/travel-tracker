import Destinations from "../src/destinations";

class Trips {
    constructor(arrayOfTrips, arrayOfDestinations) {
        this.listOfTrips = arrayOfTrips,
        this.destinations = new Destinations(arrayOfDestinations)
    }

    getPastTrips(date) {
        const sortedTripsByDate = this.listOfTrips.sort((a, b) => {
            return a.date - b.date;
        })
        return sortedTripsByDate.filter((trip) => trip.date < date);
    }

    getUpcomingTrips() {
        return this.listOfTrips.filter((trip) => trip.status === "approved");
    }

    getPendingTrips() {
        return this.listOfTrips.filter((trip) => trip.status === "pending");
    }

    calculateTotalSpending() {
        
    }
}

export default Trips;