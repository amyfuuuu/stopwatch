/*Execute a JavaScript immediately after a page
has been loaded. */

window.onload = function() {
    // 声明变量
    // 
    seconds = 0;
    tens = 0;
    appendTens = document.getElementById("tens");
    appendSeconds = document.getElementById("seconds");
    buttonStart = document.getElementById("start-btn");
    buttonStop = document.getElementById("stop-btn");
    buttonReset = document.getElementById("reset-btn");
    let Interval;

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);

    }
    buttonStop.onclick = function() {
        clearInterval(Interval);

    }
    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;

    }

    function startTimer () {
        tens++;
        if(tens <= 9) {
            appendTens.innerHTML = "0" + tens;

        }
        if(tens >9) {
            appendTens.innerHTML = tens;
        }
        if(tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if(seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }


    }
}


















// function pad(val) {
//     valString = val + "";
//     if(valString.length < 2) {
//         return "0" + valString;
//     } else {
//         return valString;
//     }
// }

// totalSeconds = 0;
// function setTime(minutesLabel, secondsLabel) {
//     totalSeconds++;
//     secondsLabel.innerHTML = pad(totalSeconds%60);
//     minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
// }
// function set_timer() {
//     minutesLabel = document.getElementById("minutes");
//     secondsLabel = document.getElementById("seconds");
//     my_int = setInterval(() => {setTime(minutesLabel, secondsLabel)}, 1000);
// }
// function stop_timer() {
//     stopInterval(my_int);
// }
// function reset_timer() {
//     clearInterval(my_int);
// }
// startButton.addEventListener("click", set_timer);
// stopButton.addEventListener("click", stop_timer);
// reset.addEventListener("click", reset_timer);