//問題生成
var counter = 0

const answer_audiourl = 'answer_audio.mp3';

const Incorrect_answerurl = 'Incorrect_answer.mp3';

const answer_audio = new Audio(answer_audiourl);

const Incorrect_answer = new Audio(Incorrect_answerurl);

let a, b;

var user_input = ''

display_input = document.getElementById("input");

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//問題生成関数
function make_question() {
    counter += 1

    a = rand(13, 100);

    b = rand(13, 100);
    
    question = String(a) + ' * ' + String(b)
    
    answer = a * b;
    
    a_string = document.getElementById("a_write");
    
    a_string.innerHTML = question;
}

//各ボタンの関数
function buttonClick1() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '1'
    display_input.innerHTML = user_input;
}

function buttonClick2() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '2'
    display_input.innerHTML = user_input;
}

function buttonClick3() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '3'
    display_input.innerHTML = user_input;
}

function buttonClick4() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '4'
    display_input.innerHTML = user_input;
}

function buttonClick5() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '5'
    display_input.innerHTML = user_input;
}

function buttonClick6() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '6'
    display_input.innerHTML = user_input;
}

function buttonClick7() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '7'
    display_input.innerHTML = user_input;
}

function buttonClick8() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '8'
    display_input.innerHTML = user_input;
}

function buttonClick9() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '9'
    display_input.innerHTML = user_input;
}

function buttonClick0() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '0'
    display_input.innerHTML = user_input;
}

function buttonClickEnd() {
    user_input = user_input.slice(0, user_input.length -1)
    if (user_input.length === 0){
        user_input = '[入力]'
    }
    display_input.innerHTML = user_input;
}

function buttonClickDecision() {
    if (parseInt(user_input) === answer) {
        user_input = '[入力]'
        answer_audio.play();
        if (counter !== 10) {
            make_question()
        } else {
            user_input = '終了です。';
            display_input.innerHTML = user_input;
        }
    } else {
        Incorrect_answer.play()
        user_input = '違います'
    }
    display_input.innerHTML = user_input;
}

make_question()

let button1 = document.getElementById('1');

let button2 = document.getElementById('2');

let button3 = document.getElementById('3');

let button4 = document.getElementById('4');

let button5 = document.getElementById('5');

let button6 = document.getElementById('6');

let button7 = document.getElementById('7');

let button8 = document.getElementById('8');

let button9 = document.getElementById('9');

let button0 = document.getElementById('0');

let buttonEnd = document.getElementById('end');

let buttonDecision = document.getElementById('decision');

button1.onclick = buttonClick1;

button2.onclick = buttonClick2;

button3.onclick = buttonClick3;

button4.onclick = buttonClick4;

button5.onclick = buttonClick5;

button6.onclick = buttonClick6;

button7.onclick = buttonClick7;

button8.onclick = buttonClick8;

button9.onclick = buttonClick9;

button0.onclick = buttonClick0;

buttonEnd.onclick = buttonClickEnd;

buttonDecision.onclick = buttonClickDecision;



