import { expect } from 'chai';
import Trips from "../src/trips";

describe("Hydration Repository", () => {
    let arrayOfTrips, trips

    beforeEach(() => {
      arrayOfTrips = [{
        "id": 1,
        "userID": 44,
        "destinationID": 49,
        "travelers": 1,
        "date": "2022/09/16",
        "duration": 8,
        "status": "approved",
        "suggestedActivities": []
        },
        {
        "id": 2,
        "userID": 35,
        "destinationID": 25,
        "travelers": 5,
        "date": "2022/10/04",
        "duration": 18,
        "status": "approved",
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

        trips = new Trips(arrayOfTrips);
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
                "date": "2022/09/16",
                "duration": 8,
                "status": "approved",
                "suggestedActivities": []
            },
            {
                "id": 2,
                "userID": 35,
                "destinationID": 25,
                "travelers": 5,
                "date": "2022/10/04",
                "duration": 18,
                "status": "approved",
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
        expect(trips.getPastTrips("2022/04/30")).to.deep.equal([{
            "id": 4,
            "userID": 43,
            "destinationID": 14,
            "travelers": 2,
            "date": "2022/02/25",
            "duration": 10,
            "status": "approved",
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
            "date": "2022/09/16",
            "duration": 8,
            "status": "approved",
            "suggestedActivities": []
            },
            {
            "id": 2,
            "userID": 35,
            "destinationID": 25,
            "travelers": 5,
            "date": "2022/10/04",
            "duration": 18,
            "status": "approved",
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
            }
        ])
    });

    it('should get pending trips', () => {
        expect(trips.getPendingTrips()).to.deep.equal([{
            "id": 5,
            "userID": 42,
            "destinationID": 29,
            "travelers": 3,
            "date": "2022/04/30",
            "duration": 18,
            "status": "pending",
            "suggestedActivities": []
        }])
    });

    it('should calculate total spending on trips', () => {
        expect(trips.calculateTotalSpending().to.equal())
    });
})