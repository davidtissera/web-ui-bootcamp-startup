class Movie {
    constructor(name, year, duration){
        this.title = name;
        this.year = year;
        this.duration = duration;
    }
    play(){
    }
    pause(){
    }
    resume(){
    }
}

class EventEmitter {
    constructor() {
        this.events = {};
    };
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
        for (let i = event.length; i >= 0; i--) {
            if (event[i] === callback) {
                event.splice(i, 1);
                break;
            }
        }
    };
}

class Actor {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}