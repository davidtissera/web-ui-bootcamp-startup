class EventEmitter {
    constructor() {
        this.events = {};
    }
    on (eventName, callback){
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    };
    emit (eventName) {
        const event = this.events[eventName];
        event.forEach(callback => {
            callback.call();
        });
    };
    off (eventName, callback) {
        const event = this.events[eventName];
        if (!event) return this;
        for (let i = event.length; i > 0; i--) {
            if (event[i] === callback) {
                event.splice(i, 1);
                break;
            }
        }
    };
}

const myEmitter = new EventEmitter();
const c1 = () => {console.log('an event occurred!')};
const c2 = () => {console.log('yet another event occurred!')};
myEmitter.on('eventOne', c1);
myEmitter.on('eventOne', c2);