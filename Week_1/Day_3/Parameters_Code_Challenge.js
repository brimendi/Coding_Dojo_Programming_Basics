function greeting(name, timeOfDay) {

    if (name == "Count Dooku"){
        return "We're coming for you Dooku!"
    }
    if (timeOfDay <= 1200)
        return "Good morning, " + name + "!";
    else if (timeOfDay > 1200 && timeOfDay <= 1700)
        return "Good afternoon, " + name + "!";
    else if (timeOfDay > 1700)            
        return "Good evening, " + name + "!";
}

var dookuGreeting = greeting("Count Dooku", 1600);
console.log(dookuGreeting);
var anakinGreeting = greeting("Anakin", 2400);
console.log(anakinGreeting);
var darthGreeting = greeting("Darth Vader", 0800);
console.log(darthGreeting);