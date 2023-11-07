const Student = {
    firstName: "Isaac",
    surname: "Makwa",
    age: "25",
    contact: "Isaac@email.com",

    // get getName() {
    //     return this.firstName
    // },
    get getName() {return this.firstName},

    /**
     * @param {string} newName
     */
    set changeName(newName) { this.firstName = newName},

    get toString() {
        return `${this.firstName} ${this.surname}, ${this.contact}`
    }
    
    
}

console.log(Student.getName)

console.log(Student.toString)