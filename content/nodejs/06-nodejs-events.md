---
title: "Node.js Events"
order: 6
---

## Node.js Events

Much of the Node.js core API is built around an asynchronous, event-driven architecture. In this system, certain kinds of objects (called "emitters") emit named events that cause `Function` objects ("listeners") to be called.

For instance, a `net.Server` object emits an event each time a peer connects to it, a `fs.ReadStream` emits an event when the file is opened, and a `stream` emits an event whenever data is available to be read.

### The `EventEmitter` Class

All objects that emit events are instances of the `EventEmitter` class. You can access this class by requiring the `events` module.

```javascript
const EventEmitter = require('events');

// Create a new emitter instance
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
```

### Listening for Events

You can register a listener function to be called when a specific event is emitted using the `on()` method.

```javascript
// Register a listener for the 'myEvent' event
myEmitter.on('myEvent', (arg1, arg2) => {
  console.log('An event occurred!', arg1, arg2);
});
```

### Emitting Events

You can trigger an event using the `emit()` method. This will cause all registered listeners for that event to be called.

```javascript
// Emit 'myEvent' with some arguments
myEmitter.emit('myEvent', 'Hello', 'World');
```

When the `emit()` method is called, the listeners are invoked synchronously in the order they were registered.

### A Practical Example

Let's combine this to see it in action.

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Listener
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emitter
console.log("About to greet...");
myEmitter.emit('greet', 'Node.js Developer');
console.log("Greeting has been sent.");
```

Output:
```
About to greet...
Hello, Node.js Developer!
Greeting has been sent.
```

### Exercises

1.  **Create a simple event**: Create a script with an `EventEmitter`.
2.  **Register a listener**: Register a listener for an event named `shout`. The listener should log "I heard a shout!" to the console.
3.  **Emit the event**: Emit the `shout` event and see your message in the console.
4.  **Pass data with an event**: Create an event named `newMessage`. The listener should accept a message object (e.g., `{ from: 'user1', text: 'Hello!' }`) and log it. Emit the event with a sample message object.