### Diagonal Difference (Result should be positive)

Pseudo code

```js
Input = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

Result = 11 + 5 + -12 - (4 + 5 + 10);
```

Code :

```js
const processData = (arr) => {
  const row = arr.length;
  return Math.abs(
    arr.reduce((acc, item, index) => {
      return (acc += parseInt(item[index]) - parseInt(item[row - (index + 1)]));
    }, 0)
  );
};
const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
const result = processData(arr);
console.log(result);
```
