function parseInput(input) {
    input = input.replace(/<\/?[^>]+(>|$)/g, "");
    input = input.toLowerCase();
    input = input.replace(/\s+/g, '');
    return input.split(',').map(function (item) { return item.trim(); });
}
var userInput = "Apple, Banana, Cherry +";
var parsedInput = parseInput(userInput);
console.log(parsedInput);
