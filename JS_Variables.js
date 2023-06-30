// Const because the height and age requirements will not change.
// Rider must be at least 42 inches tall.
const minInches = 42
// Rider must be over the age of 10.
const minAge = 10

console.log("Rider's height must be at least " + minInches + " inches tall.")
console.log("Rider's age must be over " + minAge + " Years old.")
// I know below isn't apart of the assignment, but I wanted to practice conditional statements. 
// Rider name is Timmy, below is timmy's Height and age
name = "Timmy"
heightIn = 38
age = 9

// *Updated* conditional statement to check if Timmy is tall and old enough to ride the rollercoaster.
if (heightIn >= 42 && age >= 10){
    console.log("Get on that ride, kiddo!")
}
else if (heightIn < 42 && age < 10){
    console.log("Sorry kiddo. Maybe next year.")
}