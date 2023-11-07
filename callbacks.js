let school = {
    name: "Orchards Primary School",
    location: "Pretoria",
    established: 2002,
    rating: "3 Star",
    displayInfo: function () {
        console.log(
            `Welcome to ${school.name} located at ${school.location} 
            which was established in ${school.established} having a rating of ${school.rating}`
        )
    },

    toString: function (){
        return `${this.name}, in ${this.location} which was established in ${this.established} and has a rating of ${this.rating}`
    }
}


school.displayInfo()

console.log(school.toString())