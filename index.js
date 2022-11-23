let buttons = document.querySelectorAll("button");
let Result = document.getElementById("result");
let Userinp = document.getElementById("userInp");
let Cpuinp = document.getElementById("cpuInp");
let user = document.getElementById("User");
let Computer = document.getElementById("CPU");
let Score = document.getElementById("value");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let userInp = e.target.value;
        let Value = Score.textContent;
        let cpuInp = Math.floor((Math.random() * 3) + 1);
        if (userInp == cpuInp) {
            Result.innerText = "Draw";
            if (userInp == 1) {
                user.innerText = "You";
                Computer.innerHTML = "Computer";
                Userinp.setAttribute('src', 'scissors.png');
                Cpuinp.setAttribute('src', 'scissors.png');
            } else if (userInp == 2) {
                user.innerText = "You";
                Computer.innerHTML = "Computer";
                Userinp.setAttribute('src', 'new-document.png');
                Cpuinp.setAttribute('src', 'new-document.png');
            } else if (userInp == 3) {
                user.innerText = "You";
                Computer.innerHTML = "Computer";
                Userinp.setAttribute('src', 'stone.png');
                Cpuinp.setAttribute('src', 'stone.png');
            }
        } else if (userInp == 1 && cpuInp == 3) {
            user.innerText = "You";
            Computer.innerHTML = "Computer";
            Result.innerText = "You Lose";
            Userinp.setAttribute('src', 'scissors.png');
            Cpuinp.setAttribute('src', 'stone.png');
        } else if (userInp == 1 && cpuInp == 2) {
            user.innerText = "You";
            Computer.innerHTML = "Computer";
            Result.innerText = "You Win";
            Value = Number(Value) + 1;
            Score.textContent = Value;
            Userinp.setAttribute('src', 'scissors.png');
            Cpuinp.setAttribute('src', 'new-document.png');
        } else if (userInp == 2 && cpuInp == 1) {
            user.innerText = "You";
            Computer.innerHTML = "Computer";
            Result.innerText = "You Lose";
            Userinp.setAttribute('src', 'new-document.png');
            Cpuinp.setAttribute('src', 'scissors.png');
        } else if (userInp == 2 && cpuInp == 3) {
            user.innerText = "You";
            Computer.innerHTML = "Computer";
            Result.innerText = "You Win";
            Value = Number(Value) + 1;
            Score.textContent = Value;
            Userinp.setAttribute('src', 'new-document.png');
            Cpuinp.setAttribute('src', 'stone.png');
        } else if (userInp == 3 && cpuInp == 1) {
            user.innerText = "You";
            Computer.innerHTML = "Computer";
            Result.innerText = "You Win";
            Value = Number(Value) + 1;
            Score.textContent = Value;
            Userinp.setAttribute('src', 'stone.png');
            Cpuinp.setAttribute('src', 'scissors.png');
        } else if (userInp == 3 && cpuInp == 2) {
            user.innerText = "You";
            Computer.innerHTML = "Computer";
            Result.innerText = "You Lose";
            Userinp.setAttribute('src', 'stone.png');
            Cpuinp.setAttribute('src', 'new-document.png');
        }
    })
})