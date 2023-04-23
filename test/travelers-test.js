import { expect } from 'chai';
import Travelers from "../src/travelers";

describe("Travelers Class", () => {
    let arrayOfTravelers, travelers

    beforeEach(() => {
        arrayOfTravelers = [
            {
            "id": 1,
            "name": "Ham Leadbeater",
            "travelerType": "relaxer"
            },
            {
            "id": 2,
            "name": "Rachael Vaughten",
            "travelerType": "thrill-seeker"
            },
            {
            "id": 3,
            "name": "Sibby Dawidowitsch",
            "travelerType": "shopper"
            },
            {
            "id": 4,
            "name": "Leila Thebeaud",
            "travelerType": "photographer"
            },
            {
            "id": 5,
            "name": "Tiffy Grout",
            "travelerType": "thrill-seeker"
            }]

        travelers = new Travelers(arrayOfTravelers);
    })

    it('should be a function', function() {
        expect(Travelers).to.be.a('function');
    });
  
    it('should be instantiated', () => {
        expect(travelers).to.be.an.instanceOf(Travelers);
    });
  
    it('should have a property that contains an array of travelers', () => {
        expect(travelers.listOfTravelers).to.deep.equal([
            {
            "id": 1,
            "name": "Ham Leadbeater",
            "travelerType": "relaxer"
            },
            {
            "id": 2,
            "name": "Rachael Vaughten",
            "travelerType": "thrill-seeker"
            },
            {
            "id": 3,
            "name": "Sibby Dawidowitsch",
            "travelerType": "shopper"
            },
            {
            "id": 4,
            "name": "Leila Thebeaud",
            "travelerType": "photographer"
            },
            {
            "id": 5,
            "name": "Tiffy Grout",
            "travelerType": "thrill-seeker"
        }])
    })

    it('should get name of traveler given an id', () => {
        expect(travelers.getTravelerNameByID(1)).to.equal("Ham Leadbeater");
    });
})