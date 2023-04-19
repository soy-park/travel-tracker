import Destinations from "../src/destinations";

class Trips {
    constructor(arrayOfTrips, arrayOfDestinations) {
        this.listOfTrips = arrayOfTrips,
        this.destinations = new Destinations(arrayOfDestinations)
    }

    getPastTrips() {
        let currentDate = new Date()
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDateFormatted = `${year}/${month}/${day}`

        const sortedTripsByDate = this.listOfTrips.sort((a, b) => {
            return a.date - b.date;
        })
        return sortedTripsByDate.filter((trip) => trip.date < currentDate);
    }

    getUpcomingTrips() {
        return this.listOfTrips.filter((trip) => trip.status === "approved");
    }

    getPendingTrips() {
        return this.listOfTrips.filter((trip) => trip.status === "pending");
    }

    // calculateTotalSpending() {
    //     this.listOfTrips.map((trip) => {
    //         if (trip.destinationID === this.destinations.listOfDestinations)
    //     })
    // }
}

export default Trips;