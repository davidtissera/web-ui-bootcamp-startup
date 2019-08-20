import {newLogger} from './index'
import EventEmitter from './EventEmitter'

class Movie extends EventEmitter {
    constructor(name, year, duration){
        super();
        this.title = name;
        this.year = year;
        this.duration = duration;
    }
    play(){
        newLogger.log("The " + Movie.prototype.play.name + " event has been emitted");
    };
    pause(){
        newLogger.log("The " + Movie.prototype.pause.name + " event has been emitted");
    };
    resume(){
        newLogger.log("The " + Movie.prototype.resume.name + " event has been emitted");
    };
}

export default Movie;