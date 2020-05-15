window.onload = function () {
  let firstbtn = document.getElementById("year1btn");
  let secondbtn = document.getElementById("year2btn");
  let thirdbtn = document.getElementById("year3btn");
  var year1link = document.getElementById("year1link");
  var year2link = document.getElementById("year2link");
  var yaer3link = document.getElementById("year3link");

  firstbtn.onclick = function () {
      var style = year1link.style.display;
      if (style == "none") {
        year1link.style.display = "block";
      } else {
        year1link.style.display = "none";
      }  
  };
  secondbtn.onclick = function () {
      var style = year2link.style.display;
      if (style == "block") {
        year2link.style.display = "none";
      } else {
        year2link.style.display = "block";
      }  
  };
  thirdbtn.onclick = function () {
      var style = year3link.style.display;
      if (style == "block") {
        year3link.style.display = "none";
      } else {
        year3link.style.display = "block";
      }  
  };
};
