import Movie from './Movie'
import Actor from './Actor'
import Logger from './Logger'
import social from './Social'

const newLogger = new Logger();
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
Object.assign(Movie.prototype, social);
pulpFiction.share("David");
pulpFiction.like("David");
pulpFiction.on(Movie.prototype.play.name, Movie.prototype.play);
pulpFiction.on(Movie.prototype.pause.name, Movie.prototype.pause);
pulpFiction.on(Movie.prototype.resume.name, Movie.prototype.resume);
pulpFiction.emit(Movie.prototype.play.name);
pulpFiction.emit(Movie.prototype.pause.name);
pulpFiction.emit(Movie.prototype.resume.name);
pulpFiction.off(Movie.prototype.play.name, Movie.prototype.play);
pulpFiction.off(Movie.prototype.pause.name, Movie.prototype.pause);
pulpFiction.off(Movie.prototype.resume.name, Movie.prototype.resume);
pulpFiction.emit(Movie.prototype.play.name);
pulpFiction.emit(Movie.prototype.pause.name);
pulpFiction.emit(Movie.prototype.resume.name);


export {newLogger};
export {pulpFiction};