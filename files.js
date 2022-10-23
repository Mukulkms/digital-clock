function displayTime(){
    let dateTime=new Date();
    let hrs= dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let ses =document.getElementById('session');
    let hr_dot=document.querySelector('.hr_dot');
    let mm_dot=document.querySelector('.mm_dot');
    let ss_dot=document.querySelector('.ss_dot');


   if(hrs>=12){
    session.innerHTML='PM';
   }
   else{
    session.innerHTML='AM';
   }

   if(hrs>12){
    hrs=hrs-12;
   }

 hrs=(hrs<10)?"0"+hrs:hrs;
 min=(min<10)?"0"+min:min;
 sec=(sec<10)?"0"+sec:sec;
 
    document.getElementById('hours').innerHTML=hrs+"<br><span>Hours</span></span>";
    document.getElementById('minutes').innerHTML=min+"<br><span>Minutes</span></span>";
    document.getElementById('seconds').innerHTML=sec+"<br><span>Seconds</span></span>";


    hh.style.strokeDashoffset=440 - (440 * hrs)/12;
    mm.style.strokeDashoffset=440 - (440 * min)/60;
    ss.style.strokeDashoffset=440 - (440 * sec)/60;

    hr_dot.style.transform= `rotate(${hrs*30}deg)`;
    mm_dot.style.transform= `rotate(${min*6}deg)`;
    ss_dot.style.transform= `rotate(${sec*6}deg)`;
   
  }

setInterval(displayTime);

