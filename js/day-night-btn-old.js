
var backgroundMode = 0;

document.getElementsByTagName('button')[0].onclick=function() {
    if (backgroundMode == 0) {
    document.getElementById('day-night').style.backgroundColor='#000000';
    backgroundMode = 1;
    document.getElementById('change-background').innerHTML='Day Mode';
    } else {
        document.getElementById('day-night').style.backgroundColor='#ffffff';
        backgroundMode = 0;
        document.getElementById('change-background').innerHTML='Night Mode';
    }
}