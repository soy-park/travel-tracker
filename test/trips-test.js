import { expect } from 'chai';
import Trips from "../src/trips";
import Destinations from '../src/destinations';

describe("Trip Class", () => {
    let arrayOfTrips, trips, arrayOfDestinations, destinations

    beforeEach(() => {
        arrayOfTrips = [{
            "id": 1,
            "userID": 44,
            "destinationID": 49,
            "travelers": 1,
            "date": "2023/09/16",
            "duration": 8,
            "status": "pending",
            "suggestedActivities": []
        },
        {
            "id": 2,
            "userID": 35,
            "destinationID": 25,
            "travelers": 5,
            "date": "2023/10/04",
            "duration": 18,
            "status": "pending",
            "suggestedActivities": []
        },
        {
            "id": 3,
            "userID": 3,
            "destinationID": 22,
            "travelers": 4,
            "date": "2022/05/22",
            "duration": 17,
            "status": "approved",
            "suggestedActivities": []
        },
        {
            "id": 4,
            "userID": 43,
            "destinationID": 14,
            "travelers": 2,
            "date": "2022/02/25",
            "duration": 10,
            "status": "approved",
            "suggestedActivities": []
        },
        {
            "id": 5,
            "userID": 42,
            "destinationID": 29,
            "travelers": 3,
            "date": "2022/04/30",
            "duration": 18,
            "status": "pending",
            "suggestedActivities": []
        }];

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
        }]

        trips = new Trips(arrayOfTrips, arrayOfDestinations);
        destinations = new Destinations(arrayOfDestinations);
    });

    it('should be a function', function() {
        expect(Trips).to.be.a('function');
    });
  
    it('should be instantiated', () => {
        expect(trips).to.be.an.instanceOf(Trips);
    });
  
    it('should have a property that contains an array of trips', () => {
        expect(trips.listOfTrips).to.deep.equal([
            {
                "id": 1,
                "userID": 44,
                "destinationID": 49,
                "travelers": 1,
                "date": "2023/09/16",
                "duration": 8,
                "status": "pending",
                "suggestedActivities": []
            },
            {
                "id": 2,
                "userID": 35,
                "destinationID": 25,
                "travelers": 5,
                "date": "2023/10/04",
                "duration": 18,
                "status": "pending",
                "suggestedActivities": []
            },
            {
                "id": 3,
                "userID": 3,
                "destinationID": 22,
                "travelers": 4,
                "date": "2022/05/22",
                "duration": 17,
                "status": "approved",
                "suggestedActivities": []
            },
            {
                "id": 4,
                "userID": 43,
                "destinationID": 14,
                "travelers": 2,
                "date": "2022/02/25",
                "duration": 10,
                "status": "approved",
                "suggestedActivities": []
            },
            {
                "id": 5,
                "userID": 42,
                "destinationID": 29,
                "travelers": 3,
                "date": "2022/04/30",
                "duration": 18,
                "status": "pending",
                "suggestedActivities": []
            }
        ])
    });

    it('should get past trips', () => {
        expect(trips.getPastTrips()).to.deep.equal([
            {
                "id": 3,
                "userID": 3,
                "destinationID": 22,
                "travelers": 4,
                "date": "2022/05/22",
                "duration": 17,
                "status": "approved",
                "suggestedActivities": []
            },
            {
                "id": 4,
                "userID": 43,
                "destinationID": 14,
                "travelers": 2,
                "date": "2022/02/25",
                "duration": 10,
                "status": "approved",
                "suggestedActivities": []
            },
            {
                "id": 5,
                "userID": 42,
                "destinationID": 29,
                "travelers": 3,
                "date": "2022/04/30",
                "duration": 18,
                "status": "pending",
                "suggestedActivities": []
            }
        ])
    });

    it('should get upcoming trips', () => {
        expect(trips.getUpcomingTrips()).to.deep.equal([{
            "id": 1,
            "userID": 44,
            "destinationID": 49,
            "travelers": 1,
            "date": "2023/09/16",
            "duration": 8,
            "status": "pending",
            "suggestedActivities": []
            },
            {
            "id": 2,
            "userID": 35,
            "destinationID": 25,
            "travelers": 5,
            "date": "2023/10/04",
            "duration": 18,
            "status": "pending",
            "suggestedActivities": []
            }
        ])
    });

    it('should get pending trips', () => {
        expect(trips.getPendingTrips()).to.deep.equal([{
            "id": 1,
            "userID": 44,
            "destinationID": 49,
            "travelers": 1,
            "date": "2023/09/16",
            "duration": 8,
            "status": "pending",
            "suggestedActivities": []
            },
            {
            "id": 2,
            "userID": 35,
            "destinationID": 25,
            "travelers": 5,
            "date": "2023/10/04",
            "duration": 18,
            "status": "pending",
            "suggestedActivities": []
            }
        ])
    });

    it('should calculate total spending on trips', () => {
        expect(trips.calculateTotalSpending(44)).to.equal(5819)
    });

    it('should not calculate total spending if given invalid id', () => {
        expect(trips.calculateTotalSpending(100)).to.equal(0)
    });
})