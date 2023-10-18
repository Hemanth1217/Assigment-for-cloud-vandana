const arr = [1, 2, 23, 54, 14, 34, 55, 4, 5, 6,14, 7];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
}

console.log(arr);
