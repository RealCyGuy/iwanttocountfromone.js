# iWantToCountFromOne.js

*A lightweight? (~20kb minfied), dependency-free, javascript library so you can count from 1.*

## Installation

Link into html:  

```html
<script src="https://raw.githubusercontent.com/RealCyGuy/iwanttocountfromone.js/master/dist/iwanttocountfromone.min.js"></script>
```

Now you're good to go!

## Usage

Just count by 1!

```js
// Start of code block.
var array = ["hi", "bye"];
console.log(array[0]); // Normal way (counting by zero (bad (like very (very) bad))).
>> "hi"
console.log(array[iwanttocountfromone(1)]); // Very good and cool way.
>> "hi"
console.log(array[iwanttocountfromone(2)]);
>> "bye"
```

Don't count from 0!

```js
console.log(array[iwanttocountfromone(0)]);
>> NO COUNTING BY ZERO!!!
```

## Features

- [x] Count from 1!
- [ ] Cat gifs. (In progress)

## Notes

- Index may not exceed 1000.
- Don't take this too seriously.

## License
Licensed under [MIT](https://github.com/RealCyGuy/iwanttocountfromone.js/blob/master/LICENSE)
