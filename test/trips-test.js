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
        "status": "approved",
        "suggestedActivities": []
        }];

        trips = new Trips(arrayOfTrips);
    })

    it('should be a function', function() {
        expect(Trips).to.be.a('function');
    });
  
    it('should be instantiated', () => {
        expect(trips).to.be.an.instanceOf(Trips);
    })
  


    
    it('should return user\'s hydration data when providing an ID number', () => {
        expect(hydrationRepo.getUserHydrationByID(32)).to.deep.equal([{
            "userID": 32,
            "date": "2023/03/30",
            "numOunces": 62
         }])
    });
  
    it('should return all of the user\'s hydration data', () => {
        expect(hydrationRepo.getUserHydrationByID(33).length).to.equal(9);
    });
  
    it('should return an empty array if the given ID number is not an exact match', () => {
        expect(hydrationRepo.getUserHydrationByID('32')).to.be.empty;
    });
  
    it('should return user\'s all time hydration average', () => {
        expect(hydrationRepo.userHydrationAllTime(33)).to.equal(62);
    });
})