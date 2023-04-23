class Travelers {
    constructor(arrayOfTravelers) {
        this.listOfTravelers = arrayOfTravelers;
    }

    getTravelerNameByID(travelerId) {
        let travelerInfo = this.listOfTravelers.filter((traveler) => traveler.id === travelerId);
        return travelerInfo[0].name;
    }
}

export default Travelers;