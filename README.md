# React :
React is a library of Javascript which is used to make single page web application.
    
# npx : 
npx is a command-line tool that comes with Node.js, starting from version 5.2.0 of npm. It allows you to execute npm packages directly without installing them globally. This is particularly useful when you want to run a tool or package temporarily without polluting your global npm installs.

# jsx :
Javascript syntax execution
<br>

JSX (JavaScript XML) is a syntax extension for JavaScript that is primarily used with React to describe what the UI should look like. It allows you to write HTML-like syntax directly in JavaScript, which React transforms into JavaScript objects under the hood. JSX makes it easier to visualize the structure of your UI and is compiled by Babel or other tools into regular JavaScript.
<br>

In jsx , we can write javascript inside the html element using {}.
<br>
ex=>
const name = 'John';
const greeting = <h1>Hello, {name}!</h1>;

<br>
In jsx , every html code must be enclosed in some opening and closing tag . This opening and closing tag may be like <> some html code </>

<br>
while write html empty tag like img tag. It must be written like :

```bash
<img src='' alt ='' />

```

# In React (and JavaScript in general), there are two main types of imports:

1. Default Imports
A default import allows you to import the default export from a module. In a module, there can only be one default export.

```bash
// File: App.js
export default function App() {
  return <h1>Hello, World!</h1>;
}

// File: index.js
import App from './App'; // 'App' is the default export of the 'App.js' file
```

<br>

2. Named Imports
<br>
A named import allows you to import specific exports from a module. These exports must be explicitly named in the module.
A module can have multiple named exports, and you can import only the ones you need.
Named imports must be imported using the same name as the export.

```bash
// File: utilities.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// File: index.js
import { add, subtract } from './utilities'; // Importing named exports from the 'utilities.js' file

```
<br>

```bash
// File: math.js
export default function multiply(a, b) {
  return a * b;
}

export function add(a, b) {
  return a + b;
}

// File: index.js
import multiply, { add } from './math'; // Importing default and named exports

```


# React app components :
We can break the React App Components in two different ways :
1. Using function
<br>

2. Using class 


# useState hook :
The React useState Hook allows us to track state in a function component.
<br>
State generally refers to data or properties that need to be tracking in an application.
<br>
We initialize our state by calling useState in our function component.
<br>
useState accepts an initial state and returns two values:
<br>
1.The current state.
<br>
2.A function that updates the state.
<br>
Example :
const [color, setColor] = useState("");
<br>
The first value, color, is our current state.
<br>
The second value, setColor, is the function that is used to update our state.
<br>
The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

We could create multiple state Hooks to track individual values.

# useEffect hoook
In React, useEffect is a hook that lets you perform side effects in functional components. It's useful for things like fetching data, interacting with browser APIs, subscribing to services, or manipulating the DOM directly. It runs after the component renders and can be set to re-run based on changes to specific state or props.

