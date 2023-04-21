// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import './css/styles.css';
import { fetchData } from './apiCalls'
import Trips from './trips';
import Destinations from './destinations';
import Travelers from './travelers';
import './images/turing-logo.png'
import moment from "moment";

const pastTrips = document.querySelector('.past-trips-list');
const pendingTrips = document.querySelector('.pending-trips');
const grandTotal = document.querySelector('.grand-total');
const totalThisYear = document.querySelector('.this-year-total');
const destinationList = document.getElementById('destination');
const estimate = document.querySelector('.estimate');
const dateInput = document.getElementById('date');
const durationInput = document.getElementById('duration');
const travelersInput = document.getElementById('travelers');
const destinationInput = document.getElementById('destination');
const submitBtn = document.querySelector('.submit-button');

let allTravelers, allTrips, allDestinations, randomId

window.addEventListener('load', loadHomePage);
submitBtn.addEventListener('click', renderNewTrip);

function loadHomePage() {
    Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
    .then(data => {
        allTravelers = new Travelers(data[0].travelers);
        randomId = generateRandomId();
        allTrips = new Trips(randomId, data[1].trips, data[2].destinations);
        allDestinations = new Destinations(data[2].destinations);
    })
    .then(() => {
        displayPendingTrips();
        displayPastTrips();
        renderListOfDestinations();
        // displayEstimate();
        displayTotalSpending();
    })
    .catch(err => alert(err))
}

function renderNewTrip(event) {
    event.preventDefault();
    if (validateFormInput() === "incorrect input") {
        alert("Please input all fields in the correct format");
        return;
    } else {
        const newTripObj = {
            id: allTrips.listOfTrips.length + 1,
            userID: randomId,
            destinationID: allDestinations.findIDByDestinationName(destinationInput.value),
            travelers: travelersInput.value,
            date: dateInput.value,
            duration: durationInput.value,
            status: "pending",
            suggestedActivities: []
        }

        Promise.all([postNewTrip(newTripObj)])
            .then(() => {
                fetchData('hydration')
                .then(updatedHydra => {
                    allHydration = new UserHydration(updatedHydra.hydrationData)
                })
                .then(() => {
                    hydrationChart.destroy();
                    sortByDate(allHydration.hydrationData);
                    updateHydraDom(newHydraData.numOunces);
                    renderHydration();
                })
            })  
    }
}

function validateFormInput() {
    if (!moment(dateInput) || moment(dateInput).isBefore(allTrips.getTodaysDate()) || !dateInput || durationInput === NaN || travelersInput === NaN) {
        return "incorrect input"
    }
}

function generateRandomId() {
    return Math.floor(Math.random() * allTravelers.listOfTravelers.length);
}

function displayPastTrips() {
    allTrips.getPastTrips().map((trip) => {
        const destinationById = allDestinations.getDestinationsByID(trip.destinationID);
        destinationById.map((destination) => {
            pastTrips.innerHTML += `<article class=past-trip-box>
                <p class="past-destination"><strong>${destination.destination}</strong></p>
                <ul>
                    <li>Travelers: ${trip.travelers}</li>
                    <li>Date: ${trip.date}</li>
                    <li>Duration: ${trip.duration} days</li>
                </ul>
            </article>`
        })
    })
}

function displayPendingTrips() {
    allTrips.getPendingTrips().map((trip) => {
        const destinationById = allDestinations.getDestinationsByID(trip.destinationID);
        destinationById.map((destination) => {
            pendingTrips.innerHTML += `<article class=pending-trip-box>
                <p class="pending-destination"><strong>${destination.destination}</strong></p>
                <ul>
                    <li>Travelers: ${trip.travelers}</li>
                    <li>Date: ${trip.date}</li>
                    <li>Duration: ${trip.duration} days</li>
                </ul>
            </article>`
        })
    })
}

function renderListOfDestinations() {
    allDestinations.listOfDestinations.map((destination) => {
        destinationList.innerHTML += `<option value="${destination.destination}">${destination.destination}</option>`;
    })
}

function displayTotalSpending() {
    grandTotal.innerText = `$${allTrips.calculateTotalSpending()}`
    totalThisYear.innerText = `$${allTrips.calculateSpendingThisYear()}`
}