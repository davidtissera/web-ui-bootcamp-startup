class EventEmitter {
    constructor(){
        this.events = [];
    };
    on(eventName, callback){
        const event = {
            name: eventName,
            callback: callback
        }
        this.events.push(event);
    };
    emit(eventName){
        this.events.forEach(function(event){
            if (event.name == eventName){
                event.callback();
            }
        });
    };
    off(eventName, callback){
        const event = {
            name: eventName,
            callback: callback
        }
    };
}

const emisor = new EventEmitter();
emisor.on("Suena el timbre", () => {console.log("Te re kbio")});
emisor.on("Suena el timbre", () => {console.log("Te gorrearon")});
emisor.on("Suena el timbre", () => {console.log("Gano Macri")});
emisor.on("Se prende la luz", () => {console.log("Alguien grita PALALALU")});
emisor.on("Se prende la luz", () => {console.log("Macri te aumenta la tarifa")});

