const passMark = 50;
let learnerResult = 78;

if (learnerResult >= 50) {
    
    if (learnerResult >= 50 && learnerResult <= 74) {
        console.log("achieved!")
    } else if (learnerResult >= 75 && learnerResult <=84) {
        console.log("Examption");
    } else {
        console.log("Distiction!")
    }
} else {
    if (learnerResult < 49 && learnerResult != 0) {
        console.log("Not Achieved");
    } else if (learnerResult == 0) {
        console.log("Did Not Write!")
    }
}