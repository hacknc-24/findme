function Compare (list1: string[], list2: string[]): Boolean{
    let count = 0;

    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                count++;
                break; 
            }
        }
        if (count >= 4) {
            return true; 
        }
    }

    return false; 
}

const listA: string[] = ['apple', 'banana', 'kiwi', 'mango'];
const listB: string[] = ['banana', 'cherry', 'kiwi', 'date', 'apple'];

console.log(Compare(listA, listB));