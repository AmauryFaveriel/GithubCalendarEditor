var blink_speed = 200; var t = setInterval(function () {
  var ele = document.querySelector('.pageTitle');
  ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
 }, blink_speed);

 var blink_speed = 200; var t = setInterval(function () {
   var ele = document.querySelector('.endButton');
   ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
  }, blink_speed);

  var blink_speed = 200; var t = setInterval(function () {
    var ele = document.querySelector('.resetButton');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
   }, blink_speed);















var strbtn=document.querySelector(".startButton");
strbtn.addEventListener("click", function(){
  var date=document.querySelector(".date input");
  var container=document.querySelector(".calendarContainer");
  container.innerHTML="";
  for(i=0;i<53;i++){
    container.innerHTML+='<div class="column"></div>';
  }
  var column=container.querySelectorAll(".column");
  for(i=0;i<column.length;i++){
    for(a=0;a<7;a++){
      column[i].innerHTML+='<div class="dayEmpty" datadate="0"></div>';
    }
  }

  var start=moment(date.value).day()%7;
  var end=365+start;

  var daysEmpty=container.querySelectorAll(".dayEmpty");
  for(let i=start;i<end;i++){
    daysEmpty[i].className="day NotClicked";
    daysEmpty[i].title=(moment(date.value).add((i-start), 'day').format("dddd Do MMMM YYYY"));
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
    var textContainer=document.querySelector(".textContainer");
    var daysClicked=container.querySelectorAll(".Clicked");
    textContainer.style.display="block";
    textContainer.innerHTML='<h1 class="textTitle">Dates auxquelles faire un commit</h1>'+
    '<ul class="listDate"></ul>';
    var list=textContainer.querySelector(".listDate");
    for(let i=0;i<daysClicked.length;i++){
      list.innerHTML+='<li class="listDateItem">'+daysClicked[i].title+'</li>';
    }
  })

  var rstbtn=document.querySelector(".resetButton");
  rstbtn.addEventListener("click", function(){
    var daysClicked=container.querySelectorAll(".Clicked");
    for(let i=0;i<daysClicked.length;i++){
      daysClicked[i].className="day NotClicked";
    }
  })
})
