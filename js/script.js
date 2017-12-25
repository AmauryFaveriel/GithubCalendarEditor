var container=document.querySelector(".calendarContainer");
for(i=0;i<52;i++){
  container.innerHTML+='<div class="column"></div>';
}
var column=container.querySelectorAll(".column");
for(i=0;i<column.length;i++){
  for(a=0;a<7;a++){
    column[i].innerHTML+='<div class="day"></div>';
  }
}
var days=container.querySelectorAll(".day");
for(let i=0;i<days.length;i++){
  days[i].addEventListener("click", function(){
    days[i].classList.toggle("dayClicked");
  })
}
