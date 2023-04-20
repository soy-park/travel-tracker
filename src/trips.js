import Destinations from "../src/destinations";
import moment from "moment";

class Trips {
    constructor(userID, arrayOfTrips, arrayOfDestinations) {
        this.listOfTrips = arrayOfTrips,
        this.tripsByID = this.getTripsByUserID(userID),
        this.destinations = new Destinations(arrayOfDestinations)
    }

    getTripsByUserID(id) {
        return this.listOfTrips.filter((trip) => trip.userID === id);
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
        const tripsBeforeToday = this.tripsByID.filter((trip) => {
            const tripDate = moment(trip.date);
            if (tripDate.isBefore(this.getTodaysDate())) {
                return trip;
            }
        })
        return tripsBeforeToday;
    }

    getUpcomingTrips() {
        const upcomingTrips = this.tripsByID.filter((trip) => {
            const tripDate = moment(trip.date);
            if (tripDate.isAfter(this.getTodaysDate()))
                return trip;
        })
        return upcomingTrips;
    }

    getPendingTrips() {
        const pendingTrips = this.tripsByID.filter((trip) => {
            const tripDate = moment(trip.date);
            if (tripDate.isAfter(this.getTodaysDate()) && trip.status === "pending")
                return trip;
        })
        return pendingTrips;
    }

    getApprovedTrips() {
        const approvedTrips = this.tripsByID.filter((trip) => {
            const tripDate = moment(trip.date);
            if (tripDate.isAfter(this.getTodaysDate()) && trip.status === "approved")
                return trip;
        })
        return approvedTrips;
    }

    calculateTotalSpending() {
        const tripTotalCost = this.tripsByID.map((trip) => {
            const desiredDestination = this.destinations.listOfDestinations.find((destination) => destination.id === trip.destinationID);
            const totalLodgingCost = desiredDestination.estimatedLodgingCostPerDay * trip.duration;
            const totalFlightCost = desiredDestination.estimatedFlightCostPerPerson * trip.travelers;
            const fee = (totalLodgingCost + totalFlightCost) * 0.10;
            const totalCost = (totalLodgingCost + totalFlightCost) + fee;
            return totalCost;
        })

        const grandTotal = tripTotalCost.reduce((acc, tripCost) => {
            acc += tripCost;
            return acc;
        }, 0)
       
        return grandTotal;
    }

    calculateSpendingThisYear() {
        const tripsIn2023 = this.tripsByID.filter((trip) => {
            const tripDate = moment(trip.date);
            if (tripDate.isBetween("2023/01/01", "2023/12/31")) {
                return trip;
            }
        })
        const tripTotalCost = tripsIn2023.map((trip) => {
            const desiredDestination = this.destinations.listOfDestinations.find((destination) => destination.id === trip.destinationID);
            const totalLodgingCost = desiredDestination.estimatedLodgingCostPerDay * trip.duration;
            const totalFlightCost = desiredDestination.estimatedFlightCostPerPerson * trip.travelers;
            const fee = (totalLodgingCost + totalFlightCost) * 0.10;
            const totalCost = (totalLodgingCost + totalFlightCost) + fee;
            return totalCost;
        })

        const grandTotal = tripTotalCost.reduce((acc, tripCost) => {
            acc += tripCost;
            return acc;
        }, 0)
       
        return grandTotal;
    }
}

export default Trips;