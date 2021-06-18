# Javascript Refresher

`let` --> Use for vars that will change.

`const` --> User for vars that will NOT change. Immutable.


## Arrow Functions

```javascript
function myFnc(args) {
  // Do something
}
```

Arrow function:
```javascript
const myFnc = (args) => {
  // Do something 
}
```

Example
```javascript
function printName(name) {
  console.log(name)
}

printName("Max")    //=> "Max"

const printName2 = (name) => {
  console.log(name)
}

printName2("Max")    //=> "Max


// The following two arrow functions are equal

const multiply = number => {
  return number * 2
}

const multiply = number => number * 2
```


## Exports and Imports

```javascript
// person.js
const person = {
  name: "Max"
}

export default person
```

```javascript
// utility.js
export const clean = () => {
  // do something
}

export const baseData = 10
```

```javascript
// app.js

// "Default Exports"
import person from './person.js'
import prs from './person.js'

// "Named Exports"
import { baseData } from './utility.js'
import { clean as alias } from './utility.js'
import * as bundled from './utility.js'
```


## Classes

```javascript
class Male {
  constructor() {
   this.gender = "Male"
  }
  printGender() { 
    console.log(this.gender);
  }
}

class MalePerson extends Human {
  constructor() {
    super();
    this.name = "Max" 
  }

  printName() { 
    console.log(this.name);
  }
}

const myPerson = new Person();
myPerson.printName()      //=> "Max"
myPerson.printGender()    //=> "Male"
```


## Classes, Properties, and Methods

Properties are like variables attached to classes/objects

Methods are like functions attached to classes/objects

```javascript
// ES6
constructor () {
  this.property = "value"
}

myMethod() {
  // Do something
}


// ES7
property = "value"
myMethod = () => { ... }
```

```javascript
class Male {
  gender = "Male"

  printGender () => { console.log(this.gender) }
}

class MalePerson extends Human {
  name = "Max" 

  printName = () => { console.log(this.name) }
}

const myPerson = new Person();
myPerson.printName()      //=> "Max"
myPerson.printGender()    //=> "Male"
```


## Spread and Rest Operators

```javascript
// Spread Operator
const newArray = [...oldArray, 1, 2]

const newObject = { ...oldObject, newProperty: "value" 

// Rest Operator
function sortArgs(...args) {
  return args.sort()
}

args.sort(1, 6, 3, 8, 2)      //=> [1, 2, 3, 6, 8]
```
