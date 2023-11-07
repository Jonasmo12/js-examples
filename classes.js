class Vehicle {

    constructor(make, name, engine) {
        this.make = make;
        this.name = name;
        this.engine = engine;
    }

    get getName() {
        return `The name of the vehicle is ${this.name}`;
    }


    
}