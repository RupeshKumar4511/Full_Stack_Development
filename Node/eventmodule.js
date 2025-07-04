// The events module provides the EventEmitter class — it allows you to create and manage custom events, and handle asynchronous event-driven programming.

// const EventEmitter = require('events');
import {EventEmitter} from 'events'

// console.log(EventEmitter)

// class MyEmitter extends EventEmitter{}
// we can also make custom class which extends the 
// properties of EventEmitter. 


const myEmitter = new EventEmitter();

// console.log(myEmitter);
/*
EventEmitter {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  [Symbol(shapeMode)]: false,
  [Symbol(kCapture)]: false
}

// Properties of EventEmitter

_events :
Stores all event listeners.

_eventsCount :
Number of different event names currently registered.

_maxListeners
Default: undefined, which means it uses the default (10).
we can set using .setMaxListeners().

*/


// myEmitter.on('sum',(a,b)=>{
//     console.log("event occurred");
//     console.log("sum of two no is :" , a+b)
// });
// Attach a persistent listener for an event.
// We can attach multiple eventlisteners for a single event. 

// myEmitter.emit('sum',3,5)
//Trigger an event, calling all listeners attached to that event.


// function listener(){ 
//   console.log('This will run only once!');
// }

// myEmitter.once('shout', listener);
// myEmitter.once('shout', ()=>{console.log('second shout')});
// Attach a listener that runs only once, then automatically removed.
// myEmitter.emit('shout') // run only once. 
// myEmitter.emit('shout') // This will not run



// myEmitter.removeListener('shout',listener);
// myEmitter.emit('shout') // won't run 
// Remove the particular eventlistener

// myEmitter.removeAllListeners('shout');
// It removes all the eventlistener for a particular event. 


// console.log(myEmitter.listeners('shout'))
// Get an array of listeners for an event.


// myEmitter.setMaxListeners(10)
// Set the maximum number of listeners to help avoid memory leaks.


// myEmitter.on('newListener',(event,listener)=>{
//     console.log("New event listener is addded for event : ",event)
    
// })
// The event 'newListener' is a special event in Node's EventEmitter.

// It is emitted automatically before a new listener is added.

// myEmitter.on('test',()=>{console.log("test event occured")})

// myEmitter.emit('test')


myEmitter.on('removeListener',(event,listener)=>{
    console.log("An event listener is removed for event : ",event)
    
})
// The event 'removeListener' is a special event in Node's EventEmitter.

// It is emitted automatically before a new listener is removed.

function test(){
    console.log("test event occured");
}
myEmitter.on('test',test)

myEmitter.removeListener('test',test)


