const CONSTANT = [
  {
    className: "smallText",
    fontSize: "20px"
  },
  {
    className: "mediumText",
    fontSize: "30px"
  },
  {
    className: "largeText",
    fontSize: "40px"
  }
];

const IMAGE_DATA = {
  autumn:
    "https://addons-media.operacdn.com/media/CACHE/images/themes/85/40485/1.0-rev1/images/a36e03a2-b5cf-42d4-8724-4dd8f816ba6b/6784bd92735460f4353bb2b8db8bf889.jpg",
  winter:
    "https://www.almanac.com/sites/default/files/styles/landscape/public/image_nodes/winter_sunrise-2.jpg?itok=81VQoJGG",
  spring: "https://cdn.mos.cms.futurecdn.net/tXr5UjKDsDBrYBQM9znb2c.jpg",
  summer:
    "https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/Summer-beach-image.jpg"
};

function writeCustomText(text, fontSize, tag, customStyle) {
  let classElement = document.getElementsByClassName(tag);
  classElement[0].outerHTML = `<p class="${tag}" style="font-size:${fontSize}; ${customStyle}">${text}<p>`;
}

window.onload = function () {
  const inputForm = document.getElementsByTagName("input");
  const buttonCustom = document.getElementsByTagName("button");
  const imageTag = document.getElementsByTagName("img");

  for (let i = 0; i < inputForm.length; i++) {
    inputForm[i].addEventListener("change", function () {
      const valueForm = inputForm[i].value;

      if (IMAGE_DATA[valueForm]) {
        imageTag[
          i
        ].outerHTML = `<img src="${IMAGE_DATA[valueForm]}" width="100px" height="100px" style="margin-bottom:50px;" />"`;
      }
      writeCustomText(valueForm, CONSTANT[i].fontSize, CONSTANT[i].className);
    });

    buttonCustom[i].addEventListener("click", function () {
      const askCustom = prompt("do you prefer regular, or italic font?");
      if (askCustom === "regular") {
        writeCustomText(
          inputForm[i].value,
          CONSTANT[i].fontSize,
          CONSTANT[i].className,
          "font-style: normal"
        );
      } else if (askCustom === "italic") {
        writeCustomText(
          inputForm[i].value,
          CONSTANT[i].fontSize,
          CONSTANT[i].className,
          "font-style: italic"
        );
      }
    });
  }
};
