function courses(elements) {
    this.elements = elements;
    elements = ["Read", "Java"];
    return elements;
}

console.log("These are the elements: "+ courses());
courses(elements);