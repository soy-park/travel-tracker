class Trips {
    constructor(arrayOfTrips) {
        this.listOfTrips = arrayOfTrips
    }

    getPastTrips(date) {
        const sortedTripsByDate = this.listOfTrips.sort((a, b) => {
            return a.date - b.date;
        })
        return sortedTripsByDate.filter((trip) => trip.date < date);
    }

    getUpcomingTrips() {
        
    }

    getPendingTrips() {

    }
}

export default Trips;