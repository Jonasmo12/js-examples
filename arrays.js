let courses = ["React", "Angular 2", "HTML", "Javascript"];

// console.log(courses);

let coursev2 = [...courses];
coursev2[2] = "TypeScript";
coursev2.length = 10;
coursev2[9] = "Java";

// console.log(coursev2)
// console.log(courses);

let setCoursesV2 = new Set(coursev2); // convert array to a Set

// console.log(JSON.stringify([...setCoursesV2]))

i = 0;
be = false;

// console.log(i + " & " + be);

let coursesV3 = "";

for (let i = 0; i < courses.length; ++i) {
    coursesV3 += courses[i] + " ";
    
}

console.log(coursesV3);