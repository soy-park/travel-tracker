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

function displayPastTrips() {
    allTrips.getPastTrips().map((trip) => {
        const destinationById = allDestinations.getDestinationsByID(trip.destinationID);
        destinationById.map((destination) => {
            pastTrips.innerHTML += `<article class=past-trip-box>
                <p>${destination.destination}</p>
                <ul>
                    <li>Travelers: ${trip.travelers}</li>
                    <li>Date: ${trip.date}</li>
                    <li>Duration: ${trip.duration} days</li>
                </ul>
            </article>`
        })
    })
}