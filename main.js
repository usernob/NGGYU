function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = 0;
            // timer = duration; // uncomment this line to reset timer automatically after reaching 0
        }
    }, 1000);
}

function Gretting(time){
    var gretting = document.getElementById('gretting')
    var data = {
        'MORNING': [3, 10],
        'AFTERNOON': [10, 15],
        'EVENING': [15, 19],
        'NIGHT': [19, '23']
    }
    var period = 'NIGHT'
    for(let key in data){
       if(time >= data[key][0] && time <= data[key][1]) {
          period = key
          break
       }
    }
    gretting.innerHTML = `GOOD ${period} SIR`
}

window.onload = function () {
    var time = 20, // your time in seconds here
    display = document.querySelector('#countdown');
    startTimer(time, display);
    var time = new Date().getHours()
    Gretting(time)
};