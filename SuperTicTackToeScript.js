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
    */

    let Out_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let TL_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let TC_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let TR_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let CL_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let CC_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let CR_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let BL_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let BC_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    let BR_Game = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    
    //Check all sectors for 3 in a row
    Checker(TL_Game);
    Checker(TC_Game);
    Checker(TR_Game);
    Checker(CL_Game);
    Checker(CC_Game);
    Checker(CR_Game);
    Checker(BL_Game);
    Checker(BC_Game);
    Checker(BR_Game);
    Checker(Out_Game);

}

//Checks if ther are any three in a rows in any of the 10 game boards
function Checker(arr){
    if (arr[0] != NaN && arr[0] == arr [1] && arr[0] == arr[2]){
        //Top Row Check
    } else if (arr[3] != NaN && arr[3] == arr [4] && arr[3] == arr[5]){
        //Center Row Check
    } else if (arr[6] != NaN && arr[6] == arr [7] && arr[6] == arr[8]){
        //Bottom Row Check
    } else if (arr[0] != NaN && arr[0] == arr [3] && arr[0] == arr[6]){
        //Left Column Check
    } else if (arr[1] != NaN && arr[1] == arr [4] && arr[1] == arr[7]){
        //Center Column Check
    } else if (arr[2] != NaN && arr[2] == arr [5] && arr[2] == arr[8]){
        //Right Column Check
    } else if (arr[0] != NaN && arr[0] == arr [4] && arr[0] == arr[8]){
        //Top Left to Bottom Right Diagonal Check
    } else if (arr[6] != NaN && arr[6] == arr [4] && arr[6] == arr[2]){
        //Bottom Left to Top Right Diagonal Check
    } else {
        //No three in a row yet
        console.log('Nothing')
    }
}