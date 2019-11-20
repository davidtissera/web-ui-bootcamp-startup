class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(eventName, callback){
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
        return this;
    };
    emit(eventName) {
        const event = this.events[eventName];
        event.forEach(callback => {
            callback.call();
        });
    }
    off(eventName, callback){
        
    }
}

const box = new EventEmitter();
box.on("Guardar", () => {console.log("Se guarda")});
box.on("Guardar", () => {console.log("Hace ruido")});
box.on("Guardar", () => {console.log("Choca contra la caja")});
box.on("Asd", () => {console.log("asd")});
box.on("Ads", () => {console.log("ads")});