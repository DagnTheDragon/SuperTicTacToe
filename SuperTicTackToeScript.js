//Setup for starter arrays
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
    
    //Check all sectors for 3 in a row
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
function checker(arr){
    if (arr[0] != NaN && arr[0] == arr [1] && arr[0] == arr[2]){
        //Top Row Check
        return arr[0];
    } else if (arr[3] != NaN && arr[3] == arr [4] && arr[3] == arr[5]){
        // Center Row Check
        return arr[3];
    } else if (arr[6] != NaN && arr[6] == arr [7] && arr[6] == arr[8]){
        //Bottom Row Check
        return arr[6];
    } else if (arr[0] != NaN && arr[0] == arr [3] && arr[0] == arr[6]){
        //Left Column Check
        return arr[0];
    } else if (arr[1] != NaN && arr[1] == arr [4] && arr[1] == arr[7]){
        //Center Column Check
        return arr[1];
    } else if (arr[2] != NaN && arr[2] == arr [5] && arr[2] == arr[8]){
        //Right Column Check
        return arr[2]
    } else if (arr[0] != NaN && arr[0] == arr [4] && arr[0] == arr[8]){
        //Top Left to Bottom Right Diagonal Check
        return arr[0];
    } else if (arr[6] != NaN && arr[6] == arr [4] && arr[6] == arr[2]){
        //Bottom Left to Top Right Diagonal Check
        return arr[6];
    } else {
        //No three in a row yet
        return NaN
    }
}