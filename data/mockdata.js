export const technologies = [
  {
    id: "react",
    name: "React",
    icon: "⚛️",
    color: "#61DAFB",
    questionCount: 42,
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "𝐉𝐒",
    color: "#F7DF1E",
    questionCount: 65,
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "𝐓𝐒",
    color: "#3178C6",
    questionCount: 38,
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "🟢",
    color: "#339933",
    questionCount: 31,
  },
  {
    id: "python",
    name: "Python",
    icon: "🐍",
    color: "#3776AB",
    questionCount: 48,
  },
  {
    id: "java",
    name: "Java",
    icon: "☕",
    color: "#007396",
    questionCount: 52,
  },
  {
    id: "csharp",
    name: "C#",
    icon: "𝐂#",
    color: "#239120",
    questionCount: 36,
  },
  {
    id: "sql",
    name: "SQL",
    icon: "SQL",
    color: "#CC2927",
    questionCount: 40,
  },
];

export const questions = [
  // React questions
  {
    id: "react-1",
    technologyId: "react",
    title: "Explain the difference between state and props in React",
    difficulty: "easy",
    frequency: 10,
    description:
      "This question tests your understanding of fundamental React concepts.",
    answer:
      "Props (short for properties) are passed to components as function parameters, they are immutable and cannot be changed within a component. State is managed within a component, it can be updated using setState() or useState(), and when it changes, the component re-renders.",
    type: "theoretical",
  },
  {
    id: "react-2",
    technologyId: "react",
    title: "What are React hooks? Explain useState and useEffect",
    difficulty: "medium",
    frequency: 9,
    description:
      "This question evaluates your familiarity with React's hooks API.",
    answer:
      'Hooks are functions that let you "hook into" React state and lifecycle features from function components. useState allows you to add state to function components, while useEffect allows you to perform side effects in function components, similar to componentDidMount, componentDidUpdate, and componentWillUnmount in class components.',
    type: "theoretical",
  },
  {
    id: "react-3",
    technologyId: "react",
    title: "Explain the concept of Virtual DOM in React",
    difficulty: "medium",
    frequency: 8,
    description:
      "This question tests your understanding of how React works under the hood.",
    answer:
      'The Virtual DOM is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM. This process is called reconciliation. React creates a tree of custom objects representing the current UI. When the state of your app changes, it creates a new tree. React then compares this new tree with the previous one to figure out what needs to change, and makes the minimum number of changes to the DOM.',
    type: "theoretical",
  },
  {
    id: "react-4",
    technologyId: "react",
    title: "What is the significance of keys in React lists?",
    difficulty: "easy",
    frequency: 7,
    description:
      "This question tests your knowledge of efficient list rendering in React.",
    answer:
      "Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. The best way to pick a key is to use a string that uniquely identifies a list item among its siblings, most often using IDs from your data. Using indexes for keys is not recommended if the order of items may change.",
    type: "theoretical",
  },
  {
    id: "react-5",
    technologyId: "react",
    title: "Explain React's Context API and when to use it",
    difficulty: "hard",
    frequency: 8,
    description:
      "This question evaluates your understanding of global state management in React.",
    answer:
      'Context provides a way to pass data through the component tree without having to pass props down manually at every level. It\'s designed to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language. Context is primarily used when some data needs to be accessible by many components at different nesting levels.',
    type: "theoretical",
  },

  // JavaScript questions
  {
    id: "js-1",
    technologyId: "javascript",
    title: "Explain closures in JavaScript",
    difficulty: "medium",
    frequency: 9,
    description:
      "This is a fundamental JavaScript concept that reveals your understanding of scope.",
    answer:
      "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.",
    type: "theoretical",
  },
  {
    id: "js-2",
    technologyId: "javascript",
    title: "What is event delegation in JavaScript?",
    difficulty: "medium",
    frequency: 7,
    description:
      "This question tests your knowledge of handling events efficiently.",
    answer:
      "Event delegation is a technique involving adding event listeners to a parent element instead of adding them to descendant elements. The listener will fire whenever the event is triggered on the descendant elements due to event bubbling. The benefits of this technique are memory footprint (fewer handlers) and less need to rebind handlers after DOM updates.",
    type: "practical",
  },
  {
    id: "js-3",
    technologyId: "javascript",
    title: "Explain prototypal inheritance in JavaScript",
    difficulty: "hard",
    frequency: 8,
    description:
      "This evaluates your understanding of JavaScript's inheritance model.",
    answer:
      "In JavaScript, objects inherit properties from other objects through prototypes. Each object has a private property that holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.",
    type: "theoretical",
  },
  {
    id: "js-4",
    technologyId: "javascript",
    title: "Explain the differences between var, let, and const",
    difficulty: "easy",
    frequency: 10,
    description:
      "This question tests your knowledge of variable declarations in JavaScript.",
    answer:
      "var declarations are globally scoped or function scoped while let and const are block scoped. var variables can be updated and re-declared; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared. They are all hoisted to the top of their scope but var variables are initialized with undefined, let and const variables are not initialized.",
    type: "theoretical",
  },
  {
    id: "js-5",
    technologyId: "javascript",
    title: "Explain the concept of promises in JavaScript",
    difficulty: "medium",
    frequency: 9,
    description:
      "This tests your understanding of asynchronous programming in JavaScript.",
    answer:
      'A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled (resolved), and rejected. Promises are used to handle asynchronous operations in a more elegant way, avoiding "callback hell" and making code more readable. They can be chained using .then() and .catch() methods, and modern JavaScript provides async/await as syntactic sugar on top of promises.',
    type: "practical",
  },

  // TypeScript questions
  {
    id: "ts-1",
    technologyId: "typescript",
    title: "What are the benefits of using TypeScript over JavaScript?",
    difficulty: "easy",
    frequency: 8,
    description:
      "This question evaluates your understanding of TypeScript's advantages.",
    answer:
      "TypeScript offers static type checking which helps catch errors early during development rather than at runtime, better IDE support with features like intelligent code completion and refactoring tools, readability and maintainability for large codebases through explicit type definitions, and enhanced tooling for documentation.",
    type: "theoretical",
  },
  {
    id: "ts-2",
    technologyId: "typescript",
    title: "Explain the difference between interface and type in TypeScript",
    difficulty: "medium",
    frequency: 9,
    description: "This tests your knowledge of TypeScript's type system.",
    answer:
      "Both interface and type are used to define types in TypeScript, but they have key differences. Interfaces are primarily used to define object shapes, can be extended or implemented using extends/implements keywords, and can be merged (declaration merging). Types can define unions, intersections, and other complex types, represent primitives, tuples, and function types more easily, and use computed properties. In general, interfaces are preferred for public API definitions while types offer more flexibility.",
    type: "theoretical",
  },
];
