class FunctionSaver {
    constructor(){
        this.funcs = [];
    };
    save(func){
        this.funcs.push(func);
    }
    print(){
        this.funcs.forEach(function(func){
            func();
        });
    }
}

const box = new FunctionSaver();
const pepa = () => {console.log("pepa")};
const pepe = () => {console.log("pepe")};
const pepo = () => {console.log("pepo")};
box.save(pepa);
box.save(pepe);
box.save(pepo);
box.print();