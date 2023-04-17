// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import { fetchData } from './apiCalls'
import Trips from './trips';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


window.addEventListener('load', loadHomePage);

function loadHomePage() {
    Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
    .then(data => {
        console.log(data)
        allTravelers= new Travelers(data[0].users);
    })
    .then(() => {
        
    })
    .catch(err => alert(err))
}




