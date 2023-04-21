// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import './css/styles.css';
import { fetchData, postNewTrip } from './apiCalls'
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
const form = document.querySelector('.form');
const inputFields = document.querySelector("input:not([class])");

let allTravelers, allTrips, allDestinations, randomId

window.addEventListener('load', loadHomePage);
inputFields.addEventListener('input', calculateEstimatedCost);
submitBtn.addEventListener('click', renderNewTrip);

function loadHomePage() {
    Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
    .then(data => {
        allTravelers = new Travelers(data[0].travelers);
        allTrips = new Trips(data[1].trips, data[2].destinations);
        allDestinations = new Destinations(data[2].destinations);
    })
    .then(() => {
        randomId = generateRandomId();
        allTrips.getTripsByUserID(randomId);
        displayPendingTrips();
        displayPastTrips();
        renderListOfDestinations();
        // displayEstimate();
        displayTotalSpending();
    })
    .catch(err => alert(err))
}

function calculateEstimatedCost() {
    
}

function renderNewTrip(event) {
    event.preventDefault();
    validateFormInput();
    if (validateFormInput() === false) {
        alert("Please check that all input fields are filled out in the correct format");
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
                fetchData('trips')
                .then(updatedTrips => {
                    allTrips = new Trips(updatedTrips.trips, allDestinations.listOfDestinations)
                    console.log(allTrips.listOfTrips)
                })
                .then(() => {
                    allTrips.getTripsByUserID(randomId);
                    displayPendingTrips();
                })
            })  
            
        form.reset();
    }
}

function validateFormInput() {
    if (!moment(dateInput.value).format("YYYY/MM/DD") || moment(dateInput.value).isBefore(allTrips.getTodaysDate()) || !dateInput.value || !durationInput.value || durationInput.value === NaN || !travelersInput.value || travelersInput.value === NaN) {
        return false;
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
    pendingTrips.innerHTML = ` `;
    allTrips.getPendingTrips().map((trip) => {
        const destinationById = allDestinations.getDestinationsByID(trip.destinationID);
        destinationById.map((destination) => {
            pendingTrips.innerHTML += `<h3 class='pending'>Pending</h3>
                <article class=pending-trip-box>
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