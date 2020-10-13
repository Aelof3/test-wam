export default class MoleObject {
    constructor( i ){
        this.i = i;
        this.burrowed = true;
        this.bonked = false;
    }
    popUp(){
        this.burrowed = false;
        console.log(this.i + " popping up!");
        setTimeout( ()=>{
            this.burrowed = true;
            console.log(this.i + " burrowing.");
        }, 4000 )
    }
}