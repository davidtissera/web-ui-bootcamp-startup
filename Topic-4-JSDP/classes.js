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
        console.log("The 'play' event has been emitted");
    }
    pause(){
        console.log("The 'pause' event has been emitted");
    }
    resume(){
        console.log("The 'resume' event has been emitted");
    }
}

class Actor {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const pulpFiction = new Movie ("Pulp Fiction", 1994, 154);
const actors = [];
const johnTravolta = new Actor ("John Travolta", 40);
const samuelJackson = new Actor ("Samuel Jackson", 46);
const umaThurman = new Actor ("Uma Thurman", 24);
const extraCasting = [
    new Actor ("Extra 1", 22),
    new Actor ("Extra 2", 10),
    new Actor ("Extra 3", 69)
];

Movie.prototype.addCast = function(cast) {
    actors.push(cast);
}

pulpFiction.addCast(johnTravolta);
pulpFiction.addCast(samuelJackson);
pulpFiction.addCast(umaThurman);
pulpFiction.addCast(extraCasting);
