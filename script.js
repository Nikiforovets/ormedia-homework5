var timeString;
var timerState = false;
var time = [0,0,0,0]; //milisec, sec, min, hour
var zeroSumbols = ["0","0","0","0"];

var startStopBtn = document.getElementById("startStopBtn");
var resetBtn = document.getElementById("resetBtn");
var splitBtn = document.getElementById("splitBtn");

startStopBtn.addEventListener("click", startStopTimer);
resetBtn.addEventListener("click", resetTimer);
splitBtn.addEventListener("click", splitTime);

function startStopTimer(){
    var start = function(){
        time[0]++;
        convertTime();
        document.getElementById("timeField").innerHTML = timeString;
    }
    if(timerState == false){
        link = setInterval(start, 10);
        startStopBtn.innerHTML = "Stop";
        startStopBtn.className = "stop";
        timerState = true;
    }
    else{
        clearInterval(link);
        startStopBtn.innerHTML = "Start";
        startStopBtn.className = "start";
        timerState = false;
    }
}

function convertTime(){
    if(time[0] > 99){
        time[1]++;
        time[0] = 0;
        if(time[1] > 59){
            time[2]++;
            time[1] = 0;
            if(time[2] > 59){
                time[3]++;
                time[2] = 0;
            }
        }
    }
    for(var i = 0; i < time.length; i++){
        if(time[i]<10)
            zeroSumbols[i] = "0";
        else
            zeroSumbols[i] = "";
    }
    timeString = zeroSumbols[3] + time[3] + ":" +zeroSumbols[2] + time[2] + ":" +zeroSumbols[1] + time[1] + ":" + zeroSumbols[0] + time[0];
    console.log(timeString);
}

function splitTime(){
    if(document.getElementById("timeField").innerHTML != "00:00:00:00" && timerState == true){
        var intervals = document.getElementById("intervals");
        var interval = document.createElement("div");
        interval.className = "interv";
        interval.innerHTML = document.getElementById("timeField").innerHTML;
        intervals.appendChild(interval);
    }
}


function resetTimer(){
    var intervals = document.getElementById("intervals");
    intervals.innerHTML = "";
    timerState = true;
    startStopTimer();
    document.getElementById("timeField").innerHTML = "00:00:00:00";
    startStopBtn.innerHTML = "Start";
    time = [0,0,0,0];
}