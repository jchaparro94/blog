// TYPEWRITER ANIMATION /////////////
let text = "Hello, Welcome!";
let speed = 100;
let i = 0;

typewriter = () => {
   if (i < text.length) {
      document.getElementById("typewriter-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typewriter, speed);
   }
};