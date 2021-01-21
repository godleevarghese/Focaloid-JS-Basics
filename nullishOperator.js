const x = null ?? 'Hello world';
console.log(x);
// expected output: "default string"

const y = 0 ?? 42;
console.log(y);
// expected output: 0