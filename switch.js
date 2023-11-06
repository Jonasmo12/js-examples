// const passMark = 50;
// let learnerResult = 78;

// if (learnerResult >= 50) {
    
//     if (learnerResult >= 50 && learnerResult <= 74) {
//         console.log("achieved!")
//     } else if (learnerResult >= 75 && learnerResult <=84) {
//         console.log("Examption");
//     } else {
//         console.log("Distiction!")
//     }
// } else {
//     if (learnerResult < 49 && learnerResult != 0) {
//         console.log("Not Achieved");
//     } else if (learnerResult == 0) {
//         console.log("Did Not Write!")
//     }
// }

let learnerResult = "B";
let passMark = "D";
let result;


switch (learnerResult) {
    case "A": 
        console.log("Distiction");
        //result = "Distiction";
        break;
    case "B":
        //result = "Examption";
        console.log("Examption");
        break;
    case "C":
        console.log("Achieved");
        //result = "Achieved";
        break;
    case "D":
        console.log("Not Achieved");
        //result = "Not Achieved";
        break;
    default:
        console.log("Did Not Write");
        //result = "Did Not Write";
}