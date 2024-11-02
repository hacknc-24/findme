function Compare(list1, list2) {
    var count = 0;
    for (var i = 0; i < list1.length; i++) {
        for (var j = 0; j < list2.length; j++) {
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
var listA = ['apple', 'banana', 'kiwi', 'mango'];
var listB = ['banana', 'cherry', 'kiwi', 'date', 'apple'];
console.log(Compare(listA, listB));
