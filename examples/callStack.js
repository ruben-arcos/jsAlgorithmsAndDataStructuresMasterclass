// Define a function to simulate taking a shower
function takeShower() {
    return "Showering!";
}

// Define a function to simulate eating breakfast
function eatBreakfast() {
    // Call the cookFood function to get a random meal
    let meal = cookFood();
    // Return a string indicating that the person is eating the selected meal
    return `Eating ${meal}`;
}

// Define a function to simulate cooking food
function cookFood() {
    // Array of food items
    let items = ["Oatmeal", "Eggs", "Protein Shake"];
    // Randomly select an item from the array and return it
    return items[Math.floor(Math.random() * items.length)];
}

// Define a function to simulate the morning routine
function wakeUp() {
    // Call the takeShower function (no effect on the result)
    takeShower();
    // Call the eatBreakfast function (no effect on the result)
    eatBreakfast();
    // Log a message indicating readiness to go to work
    console.log("Ok ready to go to work!");
}

// Call the wakeUp function to start the simulation
wakeUp();
