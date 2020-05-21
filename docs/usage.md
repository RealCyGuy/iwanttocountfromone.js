# Usage

First let's make an array:

```js
var array = ["hi", "bye"];
```

How we would normaly get the first value (`hi`):

```js
console.log(array[0]); // Normal way (counting by zero (bad (like very (very) bad))).
>> "hi"
```

How we do it with iWantToCountFromOne.js:

```js
console.log(array[iwanttocountfromone(1)]);
>> "hi"
```

We can keep going:

```js
console.log(array[iwanttocountfromone(2)]);
>> "bye"
```

Some important [notes](notes.md).
