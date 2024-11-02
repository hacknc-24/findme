function greet(name : string) {
    return "Hello, ".concat(name, "!");
}
function print_list(list1 : string[], list2 : string[]) {
    let count = 0;

    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                count++;
                break; // Exit inner loop to avoid counting duplicates
            }
        }
        if (count >= 3) {
            return true; // Early exit if 3 common elements found
        }
    }

    return false;
}

const i1 :string[] = ['python', 'cpp', 'hackathons']
const i2 :string[] = ['python', 'java', 'unity']
var temp_list = ["check this"];
var message = greet("World");
var msg = print_list(i1, i2);
console.log(message);
console.log(msg);
