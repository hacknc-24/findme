function parseInput(input: string): string[] {
    input = input.replace(/<\/?[^>]+(>|$)/g, "");
    input = input.toLowerCase();
    input = input.replace(/\s+/g, '');
    return input.split(',').map(item => item.trim());
}

const userInput = "Apple, Banana, Cherry +";
const parsedInput = parseInput(userInput);
console.log(parsedInput); 