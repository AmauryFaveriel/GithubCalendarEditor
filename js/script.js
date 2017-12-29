var strbtn = document.querySelector(".startButton");
var date = document.querySelector(".date input");
date.addEventListener("change", function() {
  strbtn.style.display = "block";
})
strbtn.addEventListener("click", function() {
  var containerAll = document.querySelector(".containerAll");
  containerAll.style.display = "block";
  var container = document.querySelector(".calendarContainer");
  container.innerHTML = "";
  for (i = 0; i < 53; i++) {
    container.innerHTML += '<div class="column"></div>';
  }
  var column = container.querySelectorAll(".column");
  for (i = 0; i < column.length; i++) {
    for (a = 0; a < 7; a++) {
      column[i].innerHTML += '<div class="dayEmpty"></div>';
    }
  }

  var start = moment(date.value).day() % 7;
  var end = 365 + start;

  var daysEmpty = container.querySelectorAll(".dayEmpty");
  for (let i = start; i < end; i++) {
    daysEmpty[i].className = "day NotClicked";
    daysEmpty[i].title = (moment(date.value).add((i - start), 'day').format("dddd Do MMMM YYYY"));
    daysEmpty[i].id = (moment(date.value).add((i - start), 'day').format("MM/DD/YYYY"));
  }

  var days = container.querySelectorAll(".day");
  for (let i = 0; i < days.length; i++) {
    days[i].addEventListener("click", function() {
      if (days[i].classList.contains("NotClicked") === true) {
        days[i].className = "day Clicked";
      } else {
        days[i].className = "day NotClicked";
      }
    })
  }

  var inputDate=document.querySelector(".inputDate input");
  inputDate.addEventListener("change", function(){
    for(let i=0;i<days.length;i++){
      if(days[i].id===moment(inputDate.value).format("MM/DD/YYYY")){
        days[i].className="day Clicked";
      }
    }
  })

  var endbtn = document.querySelector(".endButton");
  endbtn.addEventListener("click", function() {
    var textContainer = document.querySelector(".textContainer");
    var listIDContainer = document.querySelector(".listIDContainer");
    var daysClicked = container.querySelectorAll(".Clicked");
    textContainer.innerHTML = '<h1 class="textTitle">Dates auxquelles faire un commit :</h1>' +
      '<ul class="listDate"></ul>';
    listIDContainer.innerHTML = '<h1 class="listIDTitle">Format tableur :</h1>' +
      '<ul class="listID"></ul>';
    var list = textContainer.querySelector(".listDate");
    var listID = listIDContainer.querySelector(".listID");
    for (let i = 0; i < daysClicked.length; i++) {
      list.innerHTML += '<li class="listDateItem">' + daysClicked[i].title + '</li>';
      listID.innerHTML += '<li class="listIDItem">' + daysClicked[i].id + '</li>';
    }
  })

  var rstbtn = document.querySelector(".resetButton");
  rstbtn.addEventListener("click", function() {
    var textContainer = document.querySelector(".textContainer");
    var listID = document.querySelector(".listIDContainer");
    textContainer.innerHTML = "";
    listID.innerHTML = "";
    var daysClicked = container.querySelectorAll(".Clicked");
    for (let i = 0; i < daysClicked.length; i++) {
      daysClicked[i].className = "day NotClicked";
    }
  })
})
