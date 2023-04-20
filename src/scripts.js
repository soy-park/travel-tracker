// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import './css/styles.css';
import { fetchData } from './apiCalls'
import Trips from './trips';
import Destinations from './destinations';
import Travelers from './travelers';
import './images/turing-logo.png'

let allTravelers, allTrips, allDestinations

window.addEventListener('load', loadHomePage);

function loadHomePage() {
    Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
    .then(data => {
        allTravelers = new Travelers(data[0].travelers);
        allTrips = new Trips(data[1].trips);
        allDestinations = new Destinations(data[2].destinations);
    })
    .catch(err => alert(err))
}




