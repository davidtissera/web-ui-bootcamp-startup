class EventEmitter {
    constructor() {
        this.events = {};
    }
    on (eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }
    emit(eventName) {
        const event = this.events[eventName];
        event.forEach(callback => {
            callback.call();
        });
    }
    off (eventName, callback) {
        let lis = this.events[eventName];
        if (!lis) return this;
        for(let i = lis.length; i > 0; i--) {
        if (lis[i] === callback) {
            lis.splice(i,1);
            break;
        }
        }
        return this;
    }
}

const myEmitter = new EventEmitter();

function c1() {
   console.log('an event occurred!');
}

function c2() {
   console.log('yet another event occurred!');
}

myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventOne', c2); // Register for eventOne
myEmitter.emit('eventOne');
myEmitter.emit('eventOnce');
myEmitter.emit('eventOne');
myEmitter.emit('eventOne');






