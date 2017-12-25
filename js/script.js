var container=document.querySelector(".calendarContainer");
for(i=0;i<53;i++){
  container.innerHTML+='<div class="column"></div>';
}
var column=container.querySelectorAll(".column");
for(i=0;i<column.length;i++){
  for(a=0;a<7;a++){
    column[i].innerHTML+='<div class="day Empty"></div>';
  }
}

var daysEmpty=container.querySelectorAll(".Empty");
for(let i=0;i<365;i++){
  daysEmpty[i].className="day NotClicked";
}

var days=container.querySelectorAll(".day");
for(let i=0;i<days.length;i++){
  days[i].addEventListener("click", function(){
    if(days[i].classList.contains("NotClicked")===true){
      days[i].className="day Clicked";
    }
    else{
      days[i].className="day NotClicked";
    }
  })
}

var endbtn=document.querySelector(".endButton");
endbtn.addEventListener("click", function(){
  var daysClicked=container.querySelectorAll(".Clicked");
  console.log(daysClicked.length);
})

var rstbtn=document.querySelector(".resetButton");
rstbtn.addEventListener("click", function(){
  var daysClicked=container.querySelectorAll(".Clicked");
  for(let i=0;i<daysClicked.length;i++){
    daysClicked[i].className="day NotClicked";
  }
})
