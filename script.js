//* ЗАДАЕМ ПЕРЕМЕННЫЕ 


let numA = '';
let numB = '';
let symbol = '';
let infoSymbols = '';
let finish = false;

// константы всех знаков
const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.',];
const SYMBOLS = ['-', '+', 'x', '/',];

// константа инпута
const INPUT = document.querySelector('.form__input');

// константа информации
const INFO = document.querySelector('.form__info');


//! ФУНКЦИОНАЛ
// функция очистки
function clearInput() {
    numA = '';
    numB = '';
    symbol = '';
    infoSymbols = '';
    INPUT.textContent = '0';
    INFO.textContent = '0';
}

document.querySelector('.keyboard').onclick = (event) => {
    // если нажата не кнопка - пропускаем
    if (!event.target.classList.contains('keyborad__button')) console.log('net');
    // если нажата кнопка очистки
    if (event.target.classList.contains('clear')) {
        clearInput();
    };

    // получаем нажатую кнопку
    const key = event.target.textContent;

    // если нажата циферка или точка
    if (NUMBERS.includes(key)) {
        if (numB == '' && symbol == '') {
            // проверка на длинну строки (должно быть не больше 21, а то выглядит не красиво xD)
            if (numA.length < 21) {
                numA += key;
                infoSymbols += key;
                INFO.textContent = infoSymbols;
                INPUT.textContent = numA;
            } else {
                INFO.textContent = 'МАКСИМУМ ЧИСЕЛ!';
                INPUT.textContent = numA;
            };
        } else if (numA !== '' && numB !== '' && finish) {
            numB = key;
            infoSymbols += key;
            INFO.textContent = infoSymbols;
            finish = false;
            INPUT.textContent = numB;
        } else {
            if (numB.length < 21) {
                numB += key;
                infoSymbols += key;
                INFO.textContent = infoSymbols;
                INPUT.textContent = numB;
            } else {
                INFO.textContent = 'МАКСИМУМ ЧИСЕЛ!';
                INPUT.textContent = numB;
            };
        };
    };

    // если нажат знак (+ - * /)
    if (SYMBOLS.includes(key) && numA !== '') {
        //! не смог пофиксить баг (можно было в инпут с инфой накидать кучу знаков -> 8-+-/xx*7)?
        //! значит делаем из этого фичу, теперь знак нельзя поменять!!!
        if (symbol === '') {
            symbol = key;
            infoSymbols += symbol;
            INFO.textContent = infoSymbols;
            INPUT.textContent = symbol;
        };
    };

    // если нажат знак (=)
    if (key === '=' && numA !== '') {
        switch (symbol) {
            case '+':
                numA = (+numA) + (+numB);
                break;
            case '-':
                numA = numA - numB;
                break;
            case 'x':
                numA = numA * numB;
                break;
            case '/':
                if (numB === '0') {
                    INPUT.textContent = 'На 0 не делится!';
                    INFO.textContent = 'Ошибка!';
                    numA = '';
                    numB = '';
                    symbol = '';
                    return;
                };
                numA = numA / numB;
                break;
        };
        finish = true;
        symbol = '';
        INPUT.textContent = numA;
    };
};




// -------------------------------------------------------------------------- //

//         ———————————Нет функционала у процента и скобочек?————
//            ⠀⣞⢽⢪⢣⢣⢣⢫⡺⡵⣝⡮⣗⢷⢽⢽⢽⣮⡷⡽⣜⣜⢮⢺⣜⢷⢽⢝⡽⣝
//            ⠸⡸⠜⠕⠕⠁⢁⢇⢏⢽⢺⣪⡳⡝⣎⣏⢯⢞⡿⣟⣷⣳⢯⡷⣽⢽⢯⣳⣫⠇
//            ⠀⠀⢀⢀⢄⢬⢪⡪⡎⣆⡈⠚⠜⠕⠇⠗⠝⢕⢯⢫⣞⣯⣿⣻⡽⣏⢗⣗⠏⠀
//            ⠀⠪⡪⡪⣪⢪⢺⢸⢢⢓⢆⢤⢀⠀⠀⠀⠀⠈⢊⢞⡾⣿⡯⣏⢮⠷⠁⠀⠀
//            ⠀⠀⠀⠈⠊⠆⡃⠕⢕⢇⢇⢇⢇⢇⢏⢎⢎⢆⢄⠀⢑⣽⣿⢝⠲⠉⠀⠀⠀⠀
//            ⠀⠀⠀⠀⠀⡿⠂⠠⠀⡇⢇⠕⢈⣀⠀⠁⠡⠣⡣⡫⣂⣿⠯⢪⠰⠂⠀⠀⠀⠀
//            ⠀⠀⠀⠀⡦⡙⡂⢀⢤⢣⠣⡈⣾⡃⠠⠄⠀⡄⢱⣌⣶⢏⢊⠂⠀⠀⠀⠀⠀⠀
//            ⠀⠀⠀⠀⢝⡲⣜⡮⡏⢎⢌⢂⠙⠢⠐⢀⢘⢵⣽⣿⡿⠁⠁⠀⠀⠀⠀⠀⠀⠀
//            ⠀⠀⠀⠀⠨⣺⡺⡕⡕⡱⡑⡆⡕⡅⡕⡜⡼⢽⡻⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//            ⠀⠀⠀⠀⣼⣳⣫⣾⣵⣗⡵⡱⡡⢣⢑⢕⢜⢕⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//           ⠀⠀⠀⣴⣿⣾⣿⣿⣿⡿⡽⡑⢌⠪⡢⡣⣣⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//          ⠀⠀⠀⡟⡾⣿⢿⢿⢵⣽⣾⣼⣘⢸⢸⣞⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//            ⠀⠀⠀⠀⠁⠇⠡⠩⡫⢿⣝⡻⡮⣒⢽⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//         ———————————————————————————————————————————————————


// -------------------------------------------------------------------------- //