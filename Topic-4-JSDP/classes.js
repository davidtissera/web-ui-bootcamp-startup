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
        newLogger.log(`The ${this.play.name} event has been emitted`);
    }
    pause(){
        newLogger.log(`The ${this.pause.name} event has been emitted`);
    }
    resume(){
        newLogger.log(`The ${this.resume.name} event has been emitted`);
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

const social = {
    share: function(friendName){
        console.log(`${friendName} shares ${pulpFiction.title}`);
    },
    like: function(friendName){
        console.log(`${friendName} likes ${pulpFiction.title}`);
    }
}
const pulpFiction = new Movie ("Pulp Fiction", 1994, 154);
const newLogger = new Logger();
Object.assign(Movie.prototype, social);
pulpFiction.share("Tom");
pulpFiction.like("Tom");
