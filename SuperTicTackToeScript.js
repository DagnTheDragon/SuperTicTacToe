//Setup and run game
function PlayGame(){
    /*
    The array indexes are keyed to their position on the 3x3 board:
        0) Top Left       (TL)
        1) Top Center     (TC)
        2) Top Right      (TR)
        3) Center Left    (CL)
        4) True Center    (CC)
        5) Center Right   (CR)
        6) Bottom Left    (BL)
        7) Bottom Center  (BC)
        8) Bottom Right   (BR)
        9) Victor Status
    */

    let Out_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let TL_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let TC_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let TR_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let CL_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let CC_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let CR_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let BL_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let BC_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let BR_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    
    //Other needed variables
    let LastTurn = ['O', ''];
        //[0] Last Player, set to 'O' so first player is 'X'
        //[1] Code for space played in last Ex. TL for top left square


    while (!Out_Game[9]){
        turn(LastTurn, Out_Game, TL_Game, TC_Game, TR_Game, CL_Game, CC_Game, CR_Game, BL_Game, BC_Game, BR_Game)
    }
}

//Turn Play
function turn(LastTurn, Out_Game, TL_Game, TC_Game, TR_Game, CL_Game, CC_Game, CR_Game, BL_Game, BC_Game, BR_Game){
    //Sets current turn player
    TurnPlayer = 'X';
    if (LastTurn[0] == 'X'){
        TurnPlayer = 'O';
    }
    //First Turn of Game
    let Available = false;
    do {
        if (LastTurn[1] == ''){
            let ChosenSpace = prompt('Choose a space on the large board:\nRow then Column\nT: Top, C: Center, B: Bottom\nL:Left, C:Center, R:Right');
            ChosenSpace = ChosenSpace.toUpperCase();
        }
    } while (Available == false);

    //Check all uncleared games
    Out_Game = checks(Out_Game, TL_Game, TC_Game, TR_Game, CL_Game, CC_Game, CR_Game, BL_Game, BC_Game, BR_Game);
    TL_Game[9] = Out_Game[0];
    TC_Game[9] = Out_Game[1];
    TR_Game[9] = Out_Game[2];
    CL_Game[9] = Out_Game[3];
    CC_Game[9] = Out_Game[4];
    CR_Game[9] = Out_Game[5];
    BL_Game[9] = Out_Game[6];
    BC_Game[9] = Out_Game[7];
    BR_Game[9] = Out_Game[8];
}
//Runs all the checks
function checks(Out_Game, TL_Game, TC_Game, TR_Game, CL_Game, CC_Game, CR_Game, BL_Game, BC_Game, BR_Game){
    if (TL_Game[9] == NaN){
        Out_Game[0] = checker(TL_Game);
    }
    if (TC_Game[9] == NaN){
        Out_Game[1] = checker(TC_Game);
    }
    if (TR_Game[9] == NaN){
        Out_Game[2] = checker(TR_Game);
    }
    if (CL_Game[9] == NaN){
        Out_Game[3] = checker(CL_Game);
    }
    if (CC_Game[9] == NaN){
        Out_Game[4] = checker(CC_Game);
    }
    if (CR_Game[9] == NaN){
        Out_Game[5] = checker(CR_Game);
    }
    if (BL_Game[9] == NaN){
        Out_Game[6] = checker(BL_Game);
    }
    if (BC_Game[9] == NaN){
        Out_Game[7] = checker(BC_Game);
    }
    if (BR_Game[9] == NaN){
        Out_Game[8] = checker(BR_Game);
    }
    if (Out_Game[9] == NaN){
        Out_Game[9] = checker(Out_Game);
    }
    return Out_Game
}

//Checks if ther are any three in a rows in any of the 10 game boards
function checker(Arr){
    if (Arr[0] != NaN && Arr[0] == Arr [1] && Arr[0] == Arr[2]){
        //Top Row Check
        return Arr[0];
    } else if (Arr[3] != NaN && Arr[3] == Arr [4] && Arr[3] == Arr[5]){
        // Center Row Check
        return Arr[3];
    } else if (Arr[6] != NaN && Arr[6] == Arr [7] && Arr[6] == Arr[8]){
        //Bottom Row Check
        return Arr[6];
    } else if (Arr[0] != NaN && Arr[0] == Arr [3] && Arr[0] == Arr[6]){
        //Left Column Check
        return Arr[0];
    } else if (Arr[1] != NaN && Arr[1] == Arr [4] && Arr[1] == Arr[7]){
        //Center Column Check
        return Arr[1];
    } else if (Arr[2] != NaN && Arr[2] == Arr [5] && Arr[2] == Arr[8]){
        //Right Column Check
        return Arr[2]
    } else if (Arr[0] != NaN && Arr[0] == Arr [4] && Arr[0] == Arr[8]){
        //Top Left to Bottom Right Diagonal Check
        return Arr[0];
    } else if (Arr[6] != NaN && Arr[6] == Arr [4] && Arr[6] == Arr[2]){
        //Bottom Left to Top Right Diagonal Check
        return Arr[6];
    } else {
        //No three in a row yet
        return NaN
    }
}