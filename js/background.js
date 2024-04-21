const images=[
    "a.jpg",
    "spacee.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");

bgImage.src=`image/${chosenImage}`; 

document.body.appendChild(bgImage);
