/*_________ First Dom part ____________*/
const playerOne = document.getElementById('playerOne')
const inputField = document.getElementById('inputField-1');
const plyerButtonOne = document.getElementById('btn_1');
/*______________ second Dom part player 02   _______________*/
const playerTow = document.getElementById('playerTow');
const inputField2 = document.getElementById('inputField-2');
const playButtonTow = document.getElementById('btn_2')
const error = document.getElementById('error');
const winner=document.getElementById('winer');
const result= document.getElementById('result');
const counter=document.querySelector('.counter');
let chenge= 0;
/* _____________ palyer 03 ____________ */
const playerThriee=document.getElementById('playerThiree');
const inputField3=document.getElementById('inputField-3');
const playerButtonThriee=document.getElementById('btn_3');
const counterall=document.querySelector('.counterall');
let counters=0;
/*______________ Dom part End _______________*/

plyerButtonOne.addEventListener('click', () => {
    if (inputField.value === '') {
        error.innerText = 'Invalid Number'
         inputField.value=''
    }
    else {
        if (inputField.value > 10 || inputField.value < 0) {
            error.innerHTML = 'Number no valid'
        }
        else {
            error.innerText='';
            playerOne.style = 'display: none';
            playerTow.style = 'display: block'
        }
    }
    playButtonTow.addEventListener('click', () => {
        if (inputField2.value === '') {
            error.innerHTML = 'tome o Invalud Number'
        }
        else {
            if (inputField2.value > 10 || inputField2.value < 0) {
                error.innerHTML = ' Tome o Number no valid'
            }
            else {
                error.innerHTML='';
                if(inputField.value === inputField2.value){
                    winner.style="display: block";
                    result.innerText='Player 2 win';
                    playerTow.style='display:none';
                }
                else{
                    chenge++
                    counter.innerHTML=chenge;
                   if(chenge === 5){
                    playerTow.style='display:none';
                    playerThriee.style='display:block';
                   }
                }
            }
        }
        playerButtonThriee.addEventListener('click', ()=>{
            if(inputField3.value==='' ){
                error.innerHTML='Thriee tou o airokom'
            }
           else{
            if(inputField3.value>10 || inputField3.value<0){
                error.innerHTML='Tomar number ta thik koro vai'
            }
            else{
                if(inputField.value === inputField3.value){
                    winner.style="display: block";
                    result.innerText='Player 3 win';
                    playerThriee.style='display:none';
                    error.style='display:none'
                }
                else{
                    counters++
                    counterall.innerHTML=counters;
                    playerThriee.value='';
                   if(counters === 5){
                    playerThriee.style='display:none'
                    winner.style="display: block";
                    result.innerText='Player 1 win';
                   }
                }
            }
           }
        })
    })
})
/* 
 threeValue.style = "display:none";
              winer.style = "display:block";
                result.innerHTML = "Player 1 win";
                error.style= "display:none"
*/