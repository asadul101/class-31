/*_________ First Dom part ____________*/
const playerOne = document.getElementById('playerOne')
const inputField = document.getElementById('inputField-1');
const plyerButtonOne = document.getElementById('btn_1');
/*______________ second Dom part  _______________*/
const playerTow = document.getElementById('playerTow');
const inputField2 = document.getElementById('inputField-2');
const playButtonTow = document.getElementById('btn_2')
const error = document.getElementById('error');
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
                
            }
        }

    })
})
