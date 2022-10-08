
 const time=()=>{
    let dateAvail=new Date();
    let hour=dateAvail.getHours();
    let minute=dateAvail.getMinutes();
    let sec=dateAvail.getSeconds();
    let meridian=document.querySelector(".meridian");
    //Setting the Date
    let dateSet=dateAvail.getDate();
    //Setting the year
    let myYear=dateAvail.getFullYear();
   //Setting the day
    let day=dateAvail.getDay()+1;
    let days=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    let daysindex=[1,2,3,4,5,6,7]
    for(var i=0;i<days.length;i++){
        if(daysindex[i]===day){
            days=days[i];
        }
    }
    document.querySelector(".day").innerHTML=days;

    //Setting the month
    let month=dateAvail.getMonth()+1;
    let months=["January","February","March","April","May","June","July", "August","September","October","November","December"];
    let monthIndex=[1,2,3,4,5,6,7,8,9,10,11,12];
    for(var j=0;j<months.length;j++){
        if(monthIndex[j]===month){
            months=months[j];
        }
    }
    document.querySelector(".month").innerHTML=months;
    
    

//Adding "0" infront of time less than 10
    hour = hour < 10 ? "0" + hour : hour;
minute = minute < 10 ? "0" + minute : minute;
    sec = sec < 10 ? "0" + sec : sec;
    dateSet = dateSet < 10 ? "0" + dateSet: dateSet;


    document.querySelector(".hour").innerHTML=hour;
    document.querySelector(".minute").innerHTML=minute;
    document.querySelector(".second").innerHTML=sec;
    document.querySelector(".myDate").innerHTML=dateSet;
    document.querySelector(".myYear").innerHTML=myYear;

    if (hour>=12){
        meridian.innerHTML="PM"
    }
    else{
        meridian.innerHTML="AM"
    }
    
}

setInterval(time,1000);




  
