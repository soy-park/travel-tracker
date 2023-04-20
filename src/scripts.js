// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import './css/styles.css';
import { fetchData } from './apiCalls'
import Trips from './trips';
import Destinations from './destinations';
import Travelers from './travelers';
import './images/turing-logo.png'

const pastTrips = document.querySelector('.past-trips-list');

let allTravelers, allTrips, allDestinations, randomId

window.addEventListener('load', loadHomePage);

function loadHomePage() {
    Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
    .then(data => {
        allTravelers = new Travelers(data[0].travelers);
        randomId = generateRandomId();
        allTrips = new Trips(randomId, data[1].trips, data[2].destinations);
        allDestinations = new Destinations(data[2].destinations);
    })
    .then(() => {
        displayPastTrips();
        // displayUpcomingTrips();
    })
    .catch(err => alert(err))
}

function generateRandomId() {
    return Math.floor(Math.random() * allTravelers.listOfTravelers.length);
}

function displayPastTrips(randomId) {
    console.log(allTrips.getPastTrips())
    allTrips.getPastTrips().map((trip) => {
        const destinationById = allDestinations.getDestinationsByID(trip.destinationID);
        destinationById.map((destination) => {
            pastTrips.innerHTML += `<p>Destination: ${destination.destination}</p>
            <p>Travelers: ${trip.travelers}</p>
            <p>Date: ${trip.date}</p>
            <p>Duration: ${trip.duration}</p><br>`
        })
    })
}



  // pendingTrips.innerHTML = `<h3 class="pending">Pending</h3>`
    // return allTrips.getPastTrips().map((trip) => {
    //     return allDestinations.getDestinationsByID(trip.destinationID).map(destination => {
    //         pendingTrips.innerHTML += `<p>Destination: ${destination.destination}</p>
    //         <p>Travelers: ${trip.travelers}</p>
    //         <p>Date: ${trip.date}</p>
    //         <p>Duration: ${trip.duration}</p>`
    //     })
    // })