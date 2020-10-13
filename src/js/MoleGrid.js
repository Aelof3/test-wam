import MoleObject from './MoleObject';

export default class MoleGrid {
    constructor(){
        this.init()
    }
    init(){
        this.createMoles();
    }
    stepSequence( ){
        // create sequence to randomly pop moles up
        const burrowedMoles = this.moles.filter( mole => mole.burrowed ).map( mole => mole.i );
        const n = this.getRandomInt(0,burrowedMoles.length);
        const m = burrowedMoles[n];
        this.moles[m].popUp();
    }
    getRandomInt(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    createMoles( ){
        // create 54 mole objects, one for each block
        this.moles = Array.from( { length: 54 }, ( m, i ) => new MoleObject( i ) );
    }
}

/*

this.moleLayout = {
    front: {
        num: 1,
        moles: [
            0, 1, 2,
            3, 4, 5,
            6, 7, 8
        ]
    },
    right: {
        num: 2,
        moles: [
            9, 10, 11,
            12, 13, 14,
            15, 16, 17
        ]
    },
    left: {
        num: 3,
        moles: [
            18, 19, 20,
            21, 22, 23,
            24, 25, 26
        ]
    },
    top: {
        num: 4,
        moles: [
            27, 28, 29,
            30, 31, 32,
            33, 34, 35
        ]
    },
    bottom: {
        num: 5,
        moles: [
            36, 37, 38,
            39, 40, 41,
            42, 43, 44
        ]
    },
    back: {
        num: 6,
        moles: [
            45, 46, 47,
            48, 49, 50,
            51, 52, 53
        ]
    }
}

*/