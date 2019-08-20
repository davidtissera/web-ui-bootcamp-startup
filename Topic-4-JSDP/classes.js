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
        let event = this.events[eventName];
        event.forEach(callback => {
            callback.call();
        });
    };
    off (eventName, callback) {
        let event = this.events[eventName];
        if (!event) return this;
        for (let i = event.length; i >= 0; i--) {
            if (event[i] === callback) {
                event.splice(i, 1);
                break;
            }
        }
    };
}

class Movie extends EventEmitter {
    constructor(name, year, duration){
        super();
        this.title = name;
        this.year = year;
        this.duration = duration;
    }
    play(){
        newLogger.log("The '" + Movie.prototype.play.name + "' event has been emitted");
    }
    pause(){
        newLogger.log("The '" + Movie.prototype.pause.name + "' event has been emitted");
    }
    resume(){
        newLogger.log("The '" + Movie.prototype.resume.name + "' event has been emitted");
    }
}

class Actor {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Logger {
    log(info){
        console.log(info);
    }
}

const newLogger = new Logger();
const pulpFiction = new Movie ("Pulp Fiction", 1994, 154);