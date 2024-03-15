//----------CLASSES----------
class TTT {
    constructor(tl = '', tc = '', tr = '', cl = '', cc = '', cr = '', bl = '', bc = '', br = '', victor = '') {
        this.tl = tl;
        this.tc = tc;
        this.tr = tr;
        this.cl = cl;
        this.cc = cc;
        this.cr = cr;
        this.bl = bl;
        this.bc = bc;
        this.br = br;
        this.victor = victor;
    }

    //Checks for Victor
    check = function () {
        if (this.tl != '' && this.tl === this.tc && this.tl === this.tr) {  //check top row
            this.victor = this.tl;
            console.log(`Claimed by ${this.victor}!`);
        } else if (this.cl != '' && this.cl === this.cc && this.tl === this.cr) {  //check center row
            this.victor = this.cl;
            console.log(`Claimed by ${this.victor}!`);
        } else if (this.bl != '' && this.bl === this.bc && this.bl === this.br) {  //check bottom row
            this.victor = this.bl;
            console.log(`Claimed by ${this.victor}!`);
        } else if (this.tl != '' && this.tl === this.cl && this.tl === this.bl) {  //check left column
            this.victor = this.tl;
            console.log(`Claimed by ${this.victor}!`);
        } else if (this.tc != '' && this.tc === this.cc && this.tc === this.bc) {  //check center column
            this.victor = this.tc;
            console.log(`Claimed by ${this.victor}!`);
        } else if (this.tr != '' && this.tr === this.cr && this.tr === this.cr) {  //check right column
            this.victor = this.tr;
            console.log(`Claimed by ${this.victor}!`);
        } else if (this.tl != '' && this.tl === this.cc && this.tl === this.br) {  //check tl => br diagonal
            this.victor = this.tl;
            console.log(`Claimed by ${this.victor}!`);
        } else if (this.bl != '' && this.bl === this.cc && this.bl === this.tr) {  //check tr => bl diagonal
            this.victor = this.bl;
            console.log(`Claimed by ${this.victor}!`);
        } else {
            console.log(`Not claimed yet`);
        }
    }

}

class BTTT {
    constructor() {
        this.tl = new TTT();
        this.tc = new TTT();
        this.tr = new TTT();
        this.cl = new TTT();
        this.cc = new TTT();
        this.cr = new TTT();
        this.bl = new TTT();
        this.bc = new TTT();
        this.br = new TTT();
        this.victor = '';
    }

    //Checks game
    bigCheck = function () {
        if (this.tl.victor != '' && this.tl.victor === this.tc.victor && this.tl.victor === this.tr.victor) {  //check top row
            this.victor = this.tl.victor;
            console.log(`Claimed by ${this.victor}!`);
        } else if (this.cl.victor != '' && this.cl.victor === this.cc.victor && this.tl.victor === this.cr.victor) {  //check center row
            this.victor = this.cl.victor;
            console.log(`Claimed by ${this.victor}!`);
        } else if (this.bl.victor != '' && this.bl.victor === this.bc.victor && this.bl.victor === this.br.victor) {  //check bottom row
            this.victor = this.bl.victor;
            console.log(`Claimed by ${this.victor}!`);
        } else if (this.tl.victor != '' && this.tl.victor === this.cl.victor && this.tl.victor === this.bl.victor) {  //check left column
            this.victor = this.tl.victor;
            console.log(`Claimed by ${this.victor}!`);
        } else if (this.tc.victor != '' && this.tc.victor === this.cc.victor && this.tc.victor === this.bc.victor) {  //check center column
            this.victor = this.tc.victor;
            console.log(`Claimed by ${this.victor}!`);
        } else if (this.tr.victor != '' && this.tr.victor === this.cr.victor && this.tr.victor === this.cr.victor) {  //check right column
            this.victor = this.tr.victor;
            console.log(`Claimed by ${this.victor}!`);
        } else if (this.tl.victor != '' && this.tl.victor === this.cc.victor && this.tl.victor === this.br.victor) {  //check tl => br diagonal
            this.victor = this.tl.victor;
            console.log(`Claimed by ${this.victor}!`);
        } else if (this.bl.victor != '' && this.bl.victor === this.cc.victor && this.bl.victor === this.tr.victor) {  //check tr => bl diagonal
            this.victor = this.bl.victor;
            console.log(`Claimed by ${this.victor}!`);
        } else {
            console.log(`Not claimed yet`);
        }
    }
}

//----------FUNCTIONS----------
function PlayGame() {
    const BigTTT = new BTTT();
    let currentTurn = 'X';
    let lastMove = '';
    let lastGame = '';
    while (BigTTT.victor === '') {
        [currentTurn, lastGame, lastMove] = turn(currentTurn, lastMove, BigTTT);
        alert(`The ${currentTurn} player marked the ${lastMove} space of the ${lastGame} game.`)
        eval("BigTTT."+lastGame+"."+lastMove+" = currentTurn")
        console.log(eval("BigTTT."+lastGame))
        if (currentTurn === 'X'){
            currentTurn = 'O'
        } else {
            currentTurn = 'X'
        }
        eval('BigTTT.'+lastGame+'.check();')
        BigTTT.bigCheck();
        if (BigTTT.victor != ''){
            alert(`The winner is ${BigTTT.victor}!`);
        }
    }
}

function turn(currentTurn, lastMove, BigTTT) {
    let availableSpace = false;
    if (lastMove === '') {
        do {
            newMove = prompt('Which game would you like to play in?\nPlease use the below code:\n\n tl | tc | tr \n____________\n cl | cc | cr \n____________\n bl | bc | br ');
            if (eval("BigTTT." + newMove + ".victor === ''")) {
                nextMove = prompt('Which space would you like to mark?\nPlease use the below code:\n\n tl | tc | tr \n____________\n cl | cc | cr \n____________\n bl | bc | br ');
                if (eval("BigTTT." + newMove + "." + nextMove + " == ''")) {
                    availableSpace = true;
                } else {
                    alert('That space is unavailable pick a different space.')
                }
            } else {
                alert('That game is unavailable please pick a different game.')
            }
        } while (!availableSpace);
    } else {
        do {
            if (eval("BigTTT."+lastMove+".victor != ''")){
                newMove = prompt('Which game would you like to play in?\nPlease use the below code:\n\n tl | tc | tr \n____________\n cl | cc | cr \n____________\n bl | bc | br ');
                if (eval("BigTTT." + newMove + ".victor === ''")) {
                    nextMove = prompt('Which space would you like to mark?\nPlease use the below code:\n\n tl | tc | tr \n____________\n cl | cc | cr \n____________\n bl | bc | br ');
                    if (eval("BigTTT." + newMove + "." + nextMove + " == ''")) {
                        availableSpace = true;
                    } else {
                        alert('That space is unavailable pick a different space.')
                    }
                } else {
                    alert('That game is unavailable please pick a different game.')
                }
            } else if (eval("BigTTT."+lastMove+".victor === ''")){
                nextMove = prompt(`You are being forced to play in the ${lastMove} game.\nWhich space would you like to mark?\nPlease use the below code:\n\n tl | tc | tr \n____________\n cl | cc | cr \n____________\n bl | bc | br `)
                if (eval("BigTTT."+lastMove+"."+nextMove+ " === ''")){
                    availableSpace = true;
                } else {
                    alert('That space is unavailable pick a different space.')
                }
                newMove = lastMove;
            }
        } while (!availableSpace);
    }
    return [currentTurn, newMove, nextMove];
}
