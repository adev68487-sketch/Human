document.querySelectorAll(".selection").forEach((element) =>
  element.addEventListener("click", function () {
    if (!event.target.classList.contains("selected")) {
      const selection = document.querySelectorAll(".selection");
      selection.forEach((element) => {
        element.classList.remove("selected");
        event.currentTarget.classList.add("selected");
      });
    }
  })
);

document.querySelectorAll(".selection").forEach((element) =>
  element.addEventListener("click", function () {
    const skin = document.querySelector("#skin-layer");
    const organs = document.querySelector("#organs-layer");
    const muscles = document.querySelector("#muscles-layer");
    const veins = document.querySelector("#veins-layer");
    const bones = document.querySelector("#bones-layer");
    const magnifier = document.querySelector(".magnifier");
    if (event.currentTarget.id === "skin") {
      skin.style.opacity = "1";
      organs.style.opacity = "0";
      muscles.style.opacity = "0";
      veins.style.opacity = "0";
      bones.style.opacity = "0";
      magnifier.style.backgroundImage =
        "url('https://assets.codepen.io/9400490/Skin-magnified.png')";
    } else if (event.currentTarget.id === "muscle") {
      skin.style.opacity = "0";
      organs.style.opacity = "0";
      muscles.style.opacity = "1";
      veins.style.opacity = "0";
      bones.style.opacity = "0";
      magnifier.style.backgroundImage =
        "url('https://assets.codepen.io/9400490/Muscles-magnified.png')";
    } else if (event.currentTarget.id === "bone") {
      skin.style.opacity = "0";
      organs.style.opacity = "0";
      muscles.style.opacity = "0";
      veins.style.opacity = "0";
      bones.style.opacity = "1";
      magnifier.style.backgroundImage =
        "url('https://assets.codepen.io/9400490/Bones-magnified.png')";
    } else if (event.currentTarget.id === "vein") {
      skin.style.opacity = "0";
      organs.style.opacity = "0";
      muscles.style.opacity = "0";
      veins.style.opacity = "1";
      bones.style.opacity = "0";
      magnifier.style.backgroundImage =
        "url('https://assets.codepen.io/9400490/Veins-magnified.png')";
    } else if (event.currentTarget.id === "organ") {
      skin.style.opacity = "0";
      organs.style.opacity = "1";
      muscles.style.opacity = "0";
      veins.style.opacity = "0";
      bones.style.opacity = "0";
      magnifier.style.backgroundImage =
        "url('https://assets.codepen.io/9400490/Organs-magnified.png')";
    } else if (event.currentTarget.id === "skin-muscle") {
      skin.style.opacity = "0.6";
      organs.style.opacity = "0";
      muscles.style.opacity = "1";
      veins.style.opacity = "0";
      bones.style.opacity = "0";
      magnifier.style.backgroundImage =
        "url('https://assets.codepen.io/9400490/Skin-muscles-magnified.png')";
    } else if (event.currentTarget.id === "muscle-bone") {
      skin.style.opacity = "0";
      organs.style.opacity = "0";
      muscles.style.opacity = "0.6";
      veins.style.opacity = "0";
      bones.style.opacity = "1";
      magnifier.style.backgroundImage =
        "url('https://assets.codepen.io/9400490/Muscles-bones-magnified.png')";
    } else if (event.currentTarget.id === "skin-bone") {
      skin.style.opacity = "0.6";
      organs.style.opacity = "0";
      muscles.style.opacity = "0";
      veins.style.opacity = "0";
      bones.style.opacity = "0.8";
      magnifier.style.backgroundImage =
        "url('https://assets.codepen.io/9400490/Skin-bones-magnified.png')";
    } else if (event.currentTarget.id === "bone-vein") {
      skin.style.opacity = "0";
      organs.style.opacity = "0";
      muscles.style.opacity = "0";
      veins.style.opacity = "1";
      bones.style.opacity = "1";
      magnifier.style.backgroundImage =
        "url('https://assets.codepen.io/9400490/Bones-veins-magnified.png')";
    } else if (event.currentTarget.id === "skin-organ") {
      skin.style.opacity = "0.6";
      organs.style.opacity = "1";
      muscles.style.opacity = "0";
      veins.style.opacity = "0";
      bones.style.opacity = "0";
      magnifier.style.backgroundImage =
        "url('https://assets.codepen.io/9400490/Skin-organs-magnified.png')";
    }
  })
);

document.querySelector(".magnify-btn").addEventListener("click", function () {
  const btn = document.querySelector(".magnify-btn");
  const magnifier = document.querySelector(".magnifier");
  const magnifyArea = document.querySelector(".magnify");
  btn.classList.toggle("active");
  if (btn.classList.contains("active")) {
    magnifier.style.display = "block";
    magnifier.style.cursor = "zoom-in";
  } else {
    magnifier.style.display = "none";
  }
});

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;

  img = document.getElementById("skin-layer");
  glass = document.querySelector(".magnifier");
  glass.style.backgroundImage =
    "url('https://assets.codepen.io/9400490/Skin-magnified.png')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundPosition = "0% 0%";
  glass.style.backgroundSize =
    img.width * zoom + "px " + img.height * zoom + "px";
  bw = 4;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 1.8;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /* Support for touch screens */
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    e.preventDefault();

    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;

    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - w / zoom) {
      x = img.width - w / zoom;
    }
    if (x < w / zoom) {
      x = w / zoom;
    }
    if (y > img.height - h / zoom) {
      y = img.height - h / zoom;
    }
    if (y < h / zoom) {
      y = h / zoom;
    }

    /* Set the position of the magnifier glass: */
    glass.style.left = x - w + "px";
    glass.style.top = y - h + "px";

    /* Display what the magnifier glass magnifies */
    glass.style.backgroundPosition =
      "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;

    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();

    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;

    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}

/* Specify the id of the image, and the strength of the magnifier glass: */
magnify("myimage", 4);
