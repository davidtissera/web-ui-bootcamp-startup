class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(eventName, callback) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(callback);
        return () => {
            this.events[eventName] = this.events[eventName].filter(eventFn => callback !== eventFn);
        }
    }
    emit(eventName) {
        const event = this.events[eventName];
        event.forEach(callback => {
            callback.call();
        });
    }
    off(eventName, callback){
        const listener = this.events[eventName];
        if (!listener) {
            return this;
        }
        for (let i = listener.lenght; i > 0; i--){
            if (listener[i] === callback){
                listener.splice(i, 1);
                break;
            }
        }
        return this;
    }
}

const emitter = new EventEmitter();
emitter.on("Do this", () => {console.log("Action 1")});
emitter.on("Do this", () => {console.log("Action 2")});
emitter.on("Do this", () => {console.log("Action 3")});
emitter.on("Do something", () => {console.log("Action 4")});
emitter.on("Do something", () => {console.log("Action 5")});
emitter.on("Do something", () => {console.log("Action 6")});
