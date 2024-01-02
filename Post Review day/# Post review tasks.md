# Post review tasks

Whilst I understand and appreciate the significance of taking these tasks seriously I am afraid as im writing them I am going to put a festive twist on them and I can only apologise for that.

All of the tasks should be written using TDD unless otherwise stated, we are explicitly looking for development in the ability to break down the problem into clear behaviours and we should be able to see clear progression from one test to the next.

## Task 1 `processPresentRequest()`

You awake to find yourself cold and surrounded by crisp white snow as far as the eye can see. As you gather yourself you hear the rustling of jingle bells in the distance and from the snowy distance you see a green hat. An elf is running towards you and has quite a frantic look on their face, They explain that something has gone terribly wrong with the plans for present delivery and are looking for a programmer to be able to help with some of their issues.

As you head into the workshop the elf explains to you that the first issue they have is with the present request processor, its not able to convert the messages received from the public into valid present requests for the parts ordering machine.

Create a function `processPresentRequest()` this function should take a string as its argument and return an object with some information about the request attached

```js
const request = `Dear Mrs Clause, I would like: train, bear, shoes, dress. From Julie`;

processPresentRequest(request); // {to: "Mrs Clause", from:"Julie" presents: ["train", "bear", "shoes", "dress"], presentTotal: 4}
```

unfortunately there is not enough stock of gift to be able to grant multiple request for the same gift so if there are multiple requests for the same item they should not be included in the presents array

```js
const request =
	"Dear Santa, for christmas I would like: gameboy, gameboy, gameboy. From Jim";

processPresentRequest(request); // {to: "Santa" from: "Jim", presents: ["gameboy"], presentTotal: 1}
```

Requests should always start with `Dear <name of recipient>,`
The presents requested should always follow a semi-colon `:` and the end of the list should end with a full stop `.` which will then sign off with `From <name of sender>`

## Task 2 `selectToysByType()`

With request processing back online you are ushered to the next set of machinery used to process requests, in order to work through the requests more efficiently the elves like to work on presents of a certain type at the same time, however the function that's used to organise this data has been removed from the code base. The elf explains to you that this function `selectToysByType()` should take a list of presents with associated types and a specific type, the function should return only the presents of the specified type.

```js
const presents = [
	{ name: "bike", type: "outdoors" },
	{ name: "shoes", type: "clothes" },
	{ name: "socks", type: "clothes" },
	{ name: "train", type: "toy" },
	{ name: "stacking cups", type: "toy" },
];

selectToysByType(presents, "outdoors"); // [{name:"bike", type:"outdoors"}]

selectToysByType(presents, "toy"); // [{name:"train", type:"toy"}, {name:"stacking cups", type:"toy"}]
```

## Task 3 manageList()

N.B this one will likely be quite tricky and test you understanding of closure in more depth than the review day itself as I will be expecting you to write you own tests for this (mock functions will not be required)

With the presents processed the elves can start getting stock from the inventory to fulfil the orders, each elf will be provided with their own list and will need a function that will be able to update that list as items are removed from it.

Create a function `manageList()`, manage list should take an array of presents for the elves to find and this function is a higher order function in that it should return a function. That function will be invoked with items to be removed from the list, and should return the items remaining on the list, once the list is empty it should return a string of `list is empty`

```js
const presentList = ["train", "bike", "shoes"];
const shorterList = ["socks", "doll"];
const listManager = manageList(presentList);
const listManager2 = manageList(shorterList);
listManager("train"); //returns ["bike", "shoes"]
listManager("bike"); // returns ["shoes"]
listManager("shoes"); // returns "list is empty"
listManager2("doll"); // returns ["socks"]
```

## Task 4 countPresent()

With the elves now working away a new elf you haven't seen before rushes out of a door across the room looking flushed, They explain to you that they are very concerned with the elves working so quickly now that the stock levels are running low, when you go to look at the data they are working with there is an added complication, the data used to store all the stock is nested inside a bunch of arrays. You will need to write a function that will need to count the remaining stock of a given present inside the stock array.

```js
const presents = ["train", "train", "socks"];
const trainCount = countPresents("train", presents);
trainCount; // 2

const tragicPresents = ["train", ["doll", "socks"], ["shoes", ["socks"]]];
const sockCount = countPresents("socks", tragicPresents);
sockCount; // 3
```

This problem should use recursion, remember to carefully consider your Base Case, Recursive Step and Recursive Call
