function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 
	
  if (time.length < 10) return false;

  let arrtime = time.split(':').map((x)=> parseInt(x)); 

  if (arrtime[0] > 23 || arrtime[1] > 59 || arrtime[2] > 59) return false;
/*
  let [hours, minutes, seconds] = time.split(":");
  let ampm = seconds[2]+seconds[3];
  seconds = seconds[0]+seconds[1];
  if (ampm === "AM") hours = (hours==="12") ? "00": hours;       
  hours = (hours === "12") ? hours: parseInt(hours)+12; 
  return `${hours}:${minutes}:${seconds}`;
*/  
  if (/PM/.test(time) && arrtime[0] !== 12) arrtime[0] += 12; 

  if (/AM/.test(time) && arrtime[0] == 12) arrtime[0] -= 12;

  if (arrtime[0] < 10)  arrtime[0] = '0'.concat(arrtime[0]);
  if (arrtime[1] < 10)  arrtime[1] = '0'.concat(arrtime[1]);
  if (arrtime[2] < 10)  arrtime[2] = '0'.concat(arrtime[2]);
 
  
  return arrtime.join(':')
};



//console.log(timeConversion("12:00:00AM")); //00:00:00
//console.log(timeConversion("12:00:00PM")); //12:00:00
//console.log(timeConversion("03:15:00PM")); //15:15:00
//console.log(timeConversion("01:12:31AM")); //01:12:31
//console.log(timeConversion("12:15:00PM")); //12:15:00
//console.log(timeConversion("12:12:31AM")); //00:12:31
//console.log(timeConversion("35:15:00PM")); //false
//console.log(timeConversion("12:78:31AM")); //false
//console.log(timeConversion("12:15:78AM")); //false
//console.log(timeConversion(""));           //false
//console.log(timeConversion("15:15AM"));    //false





module.exports = {
    timeConversion
}