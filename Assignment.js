// Problem-1
// ==============================================

function feetToMile(feet) {
    if (feet < 0) {
        return "Distance cannot be negetive value";
    } else {
        var mile = feet * 0.000189394;
        return mile;
    }
}


// Problem-2
// ==============================================
function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return "Number of substance cannot be a negetive value";
    }
    return chair * 1 + table * 3 + bed * 5;
}


// Problem-3
// ==============================================
function brickCalculator(numberOfFloor) {
    if (numberOfFloor < 0) {
        return "Floor number cannot be a negetive number";
    } else if (numberOfFloor <= 10) {
        return numberOfFloor * 15 * 1000;
    } else if (11 <= numberOfFloor <= 20) {
        return numberOfFloor * 12 * 1000;
    } else {
        return numberOfFloor * 10 * 1000;
    }
}


// Problem-4
// ==============================================

function tinyFriend(arr) {
    var small = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (small.length > arr[i].length) {
            var small = arr[i];
        }
    }
    return small;
}