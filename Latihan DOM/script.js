function enlarge(x) {
  document.getElementById(x).width = 300;
  document.getElementById(x).height = 300;
}

function shrink(x) {
  document.getElementById(x).width = 100;
  document.getElementById(x).height = 100;
}

function getInfo(x) {
  y = document.getElementById(x).width;
  z = y + 10;
  y = z;
  alert(y);
  document.getElementById(x).width = y;
}

function changeStyle(par) {
  document.getElementById(par).style.backgroundColor = "#662200";
  document.getElementById(par).style.color = "#FFFFCC";
  document.getElementById(par).style.border = "6px solid orange";
  document.getElementById(par).style.padding = "15px";
  document.getElementById(par).style.fontFamily = "arial";
}

function readinnerHTML(par) {
  x = document.getElementById(par).innerHTML;
  if (x === "Cows") {
    y = "You are more likely to be killed by a cow than a shark";
  } else if (x === "Giraffes") {
    y =
      "A giraffe's legs are longer than most humans are tall, and their necks are too short to reach the ground";
  } else if (x === "Pandas") {
    y =
      "A baby panda eats its mother's poop, and all pandas have 6 digitson their paws";
  }

  document.getElementById("mainid").innerHTML = x + ": " + y;
  document.getElementById(par).innerHTML = x + ": " + y;
}
