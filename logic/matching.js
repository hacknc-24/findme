function greet(name) {
    return "Hello, ".concat(name, "!");
}
function print_list(list1, list2) {
    var count = 0;
    for (var i = 0; i < list1.length; i++) {
        for (var j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                count++;
                break; // Exit inner loop to avoid counting duplicates
            }
        }
        if (count >= 1) {
            return true; // Early exit if 3 common elements found
        }
    }
    return false;
}
var i1 = ['python', 'cpp', 'hackathons'];
var i2 = ['python', 'java', 'unity'];
var temp_list = ["check this"];
var message = greet("World");
var msg = print_list(i1, i2);
console.log(message);
console.log(msg);
