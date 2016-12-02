//Displays time based on browser load:
// var i=0;
// var interval;
//
// var step = function(){
//   i+=1; //use 100 instead of 1 for faster animation
//   document.getElementById('second').style.transform="rotate("+(i/60*360)+"deg)";
//   document.getElementById('minute').style.transform="rotate("+(i/(60*60)*360)+"deg)";
//   document.getElementById('hour').style.transform="rotate("+(i/(60*60*12)*360)+"deg)";
// };
//
// interval = setInterval(step,1000);

//Displays realtime:
var now = new Date();
var interval;
var dateHour;
var dateMinute;
var dateSecond;

var step = function(){
  now = new Date();
  dateSecond = now.getSeconds();
  dateMinute = now.getMinutes()+(dateSecond/60);
  dateHour = now.getHours()+(dateMinute/60+dateSecond/60/60);
  document.getElementById('second').style.transform="rotate("+(dateSecond/60*360)+"deg)";
  document.getElementById('minute').style.transform="rotate("+(dateMinute/60*360)+"deg)";
  document.getElementById('hour').style.transform="rotate("+(dateHour/12*360)+"deg)";
};

interval = setInterval(step,1000);
