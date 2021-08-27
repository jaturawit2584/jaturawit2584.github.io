let input
let cond
let list = []
let average = 0;
let total = 0;
let max, min, count = 0;

while (true) {
    input = prompt("Enter an integer (a negative integer to quit):");
    if (isNaN(input)) {
        alert("Please enter only NUMBER.");
    } else {
        cond = (input >= 0) ? readInput() : displayStats(list);
    }
    if (count == 1) {
        break;
    }
}

function readInput() {
    if (input >= 0) {
        list.push(input)
    }
}

function displayStats(list) {
    if (list.length > 0) {
        list.sort(function(a, b) { return a - b });
        for (i = 0; i < list.length; i++) {
            total += Number(list[i]);
        }
        average = total / list.length;
        max = Math.max(...list);
        min = Math.min(...list);
    }
    alert("For the list " + list + " ,the average is " + average + ", the minimum is " + min + ", and the maximum is " + max);
    count++
}