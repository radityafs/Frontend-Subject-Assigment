const CONSTANT = {
  image: {
    Cows: [
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cow_female_black_white.jpg/1280px-Cow_female_black_white.jpg",
      "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg"
    ],
    Giraffes: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Giraffe_Mikumi_National_Park.jpg/1200px-Giraffe_Mikumi_National_Park.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/1200px-Giraffe_standing.jpg",
      "https://i.natgeofe.com/n/3ac79952-e41e-4726-b41c-b0e56f1dd38a/giraffe_01_2x3.JPG"
    ],
    Pandas: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/1200px-Grosser_Panda.JPG",
      "https://asset.kompas.com/crops/p2XZbj2aPH78IJycib5WlELs6vw=/0x36:1117x781/780x390/data/photo/2021/10/05/615c5f08bd530.jpg",
      "https://files.worldwildlife.org/wwfcmsprod/images/Panda_in_Tree/hero_small/99i33zyc0l_Large_WW170579.jpg"
    ]
  }
};

function changeRandomImage(id, imageTag) {
  let randomImage =
    CONSTANT.image?.[imageTag][
      Math.floor(Math.random() * CONSTANT.image?.[imageTag].length)
    ];
  document.getElementById(id).src = randomImage;
}

function changeImageSize(id) {
  width = window.prompt("Ukuran width yang anda inginkan ?");

  document.getElementById(id).width = width;
}

function getSmaller(id) {
  width = document.getElementById(id).width;
  height = document.getElementById(id).height;

  if (width <= 20) {
    document.getElementById(id).width = 100;
    document.getElementById(id).height = 100;
  } else {
    document.getElementById(id).width = width - 10;
    document.getElementById(id).height = height - 10;
  }
}

function getLarger(id) {
  width = document.getElementById(id).width;
  height = document.getElementById(id).height;

  if (width >= 300) {
    document.getElementById(id).width = 100;
    document.getElementById(id).height = 100;
  } else {
    document.getElementById(id).width = width + 10;
    document.getElementById(id).height = height + 10;
  }
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

  document.getElementById(par).innerHTML = x + ": " + y;
  document.getElementById(par).onclick = () => {
    document.getElementById("mainid").innerHTML = x + ": " + y;
  };
}
