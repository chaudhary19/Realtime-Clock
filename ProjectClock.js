let mydate;
let date;
let time;

const options = { weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'}

setInterval(() => {
    
myDate = new Date();


time = myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds();
date = myDate.toLocaleDateString(undefined, options);
document.getElementById('time').innerHTML = time + " <br>on " + date;

}, 1000);
