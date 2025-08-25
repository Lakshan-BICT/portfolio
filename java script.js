
const texts = ["Web Developer", "Cybersecurity Engineer"]; 
let count = 0;   
let index = 0;   
let isDeleting = false;

function typeEffect() {
  const element = document.getElementById("text");
  const currentText = texts[count];

  if (!isDeleting) {
    // typing
    element.textContent = currentText.substring(0, index + 1);
    index++;

    if (index === currentText.length) {
      // finished typing → wait 5s before deleting
      isDeleting = true;
      setTimeout(typeEffect, 5000); 
      return;
    }
  } else {
    // deleting (no delay after delete)
    element.textContent = currentText.substring(0, index - 1);
    index--;

    if (index === 0) {
      isDeleting = false;
      count = (count + 1) % texts.length; // switch to next text
    }
  }

  const speed = isDeleting ? 80 : 120; // speed of typing & deleting
  setTimeout(typeEffect, speed);
}

// start
typeEffect();



