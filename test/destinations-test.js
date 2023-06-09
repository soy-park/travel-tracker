import { expect } from 'chai';
import Destinations from "../src/destinations";

describe("Destinations Class", () => {
    let arrayOfDestinations, destinations

    beforeEach(() => {
        arrayOfDestinations = [{
            "id": 22,
            "destination": "Rome, Italy",
            "estimatedLodgingCostPerDay": 90,
            "estimatedFlightCostPerPerson": 650,
            "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "alt": "people standing inside a colosseum during the day"
        }, {
            "id": 25,
            "destination": "New York, New York",
            "estimatedLodgingCostPerDay": 175,
            "estimatedFlightCostPerPerson": 200,
            "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "alt": "people crossing the street during the day surrounded by tall buildings and advertisements"
        },{
            "id": 49,
            "destination": "Castries, St Lucia",
            "estimatedLodgingCostPerDay": 650,
            "estimatedFlightCostPerPerson": 90,
            "image": "https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
            "alt": "aerial photography of rocky mountain under cloudy sky"
        },{
            "id": 29,
            "destination": "Willemstad, Curaçao",
            "estimatedLodgingCostPerDay": 80,
            "estimatedFlightCostPerPerson": 1100,
            "image": "https://images.unsplash.com/photo-1541748603027-cbfefa3a6c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
            "alt": "brightly colored buildings near body of water"
        },{
            "id": 14,
            "destination": "Marrakesh, Morocco",
            "estimatedLodgingCostPerDay": 70,
            "estimatedFlightCostPerPerson": 830,
            "image": "https://images.unsplash.com/photo-1517821362941-f7f753200fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
            "alt": "people buying oranges and other fruit from a street vendor"
        }];

        destinations = new Destinations(arrayOfDestinations);
    })

    it('should be a function', function() {
        expect(Destinations).to.be.a('function');
    });
  
    it('should be instantiated', () => {
        expect(destinations).to.be.an.instanceOf(Destinations);
    });
  
    it('should have a property that contains an array of destinations', () => {
        expect(destinations.listOfDestinations).to.deep.equal([
            {
                "id": 22,
                "destination": "Rome, Italy",
                "estimatedLodgingCostPerDay": 90,
                "estimatedFlightCostPerPerson": 650,
                "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "alt": "people standing inside a colosseum during the day"
            }, {
                "id": 25,
                "destination": "New York, New York",
                "estimatedLodgingCostPerDay": 175,
                "estimatedFlightCostPerPerson": 200,
                "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "alt": "people crossing the street during the day surrounded by tall buildings and advertisements"
            },{
                "id": 49,
                "destination": "Castries, St Lucia",
                "estimatedLodgingCostPerDay": 650,
                "estimatedFlightCostPerPerson": 90,
                "image": "https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
                "alt": "aerial photography of rocky mountain under cloudy sky"
            },{
                "id": 29,
                "destination": "Willemstad, Curaçao",
                "estimatedLodgingCostPerDay": 80,
                "estimatedFlightCostPerPerson": 1100,
                "image": "https://images.unsplash.com/photo-1541748603027-cbfefa3a6c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
                "alt": "brightly colored buildings near body of water"
            },{
                "id": 14,
                "destination": "Marrakesh, Morocco",
                "estimatedLodgingCostPerDay": 70,
                "estimatedFlightCostPerPerson": 830,
                "image": "https://images.unsplash.com/photo-1517821362941-f7f753200fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
                "alt": "people buying oranges and other fruit from a street vendor"
            }
        ]);
    });

    it('should get a list of destinations given a destination id', () => {
        expect(destinations.getDestinationsByID(25)).to.deep.equal([{
            "id": 25,
            "destination": "New York, New York",
            "estimatedLodgingCostPerDay": 175,
            "estimatedFlightCostPerPerson": 200,
            "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "alt": "people crossing the street during the day surrounded by tall buildings and advertisements"
        }])
    });

    it('should find destination id given a destination', () => {
        expect(destinations.findIDByDestinationName("New York, New York")).to.equal(25)
    });

    it('should calculate estimated cost given a destination id, duration, and travelers', () => {
        expect(destinations.calculateEstimatedCost(22, 1, 1)).to.equal(814)
    });
})