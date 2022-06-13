function showTime(){
    let time = new Date(); 
    let h = time.getHours(); // current hour
    let m = time.getMinutes();  // current minutes
    let s = time.getSeconds();   // current seconds
    let session ="AM";
    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h; //digits of hours
    m = (m < 10) ? "0" + m : m; //digits of minutes
    s = (s < 10) ? "0" + s : s; //digits of seconds
    document.getElementById("MyClockDisplay").innerHTML =`${h} : ${m} : ${s} ${session}`;
    setTimeout(showTime, 1000); //interval of seconds
}
showTime();
function showDate(){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let day = new Date(); 
    let d = day.getDate(); // current date
    let m = monthNames[day.getMonth()];  // current month
    let y = day.getFullYear();   // current year
    document.getElementById("MyDateDisplay").innerHTML =`${d} , ${m} , ${y}`;
    document.getElementById("MyDayDisplay").innerHTML =`${days[day.getDay()]}` // current day
}
showDate();