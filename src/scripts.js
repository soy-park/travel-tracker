// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import './css/styles.css';
import { fetchData } from './apiCalls'
import Trips from './trips';
import Destinations from './destinations';
import Travelers from './travelers';
import './images/turing-logo.png'

const pendingTrips = document.querySelector('.pending-trips');

let allTravelers, allTrips, allDestinations, randomId

window.addEventListener('load', loadHomePage);

function loadHomePage() {
    Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
    .then(data => {
        randomId = generateRandomId();
        allTravelers = new Travelers(data[0].travelers);
        allTrips = new Trips(randomId, data[1].trips, data[2].destinations);
        allDestinations = new Destinations(data[2].destinations);
    })
    .then(() => {
        displayPastTrips();
        displayUpcomingTrips();
    })
    .catch(err => alert(err))
}

function generateRandomId() {
    return Math.floor(Math.random() * allTravelers.listOfTravelers.length);
}

function displayPastTrips() {
    allTrips.getPastTrips().map((trip) => {
        pendingTrips.innerHTML = `<p>Destination: ${}</p>
        <p>Travelers: ${}</p>
        <p>Date: ${}</p>
        <p>Duration: ${}</p>`
    })
    
}



