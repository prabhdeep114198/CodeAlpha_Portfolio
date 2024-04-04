
  function scrollToSection(id) {
    var section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });

    // Remove active class from all buttons
    var buttons = document.querySelectorAll('.nav-button');
    buttons.forEach(function(button) {
      button.classList.remove('active');
    });

    // Add active class to the clicked button
    var clickedButton = document.querySelector('[onclick="scrollToSection(\'' + id + '\')"]');
    clickedButton.classList.add('active');
  }
// Get all elements with class 'typing-animation'
const elements = document.querySelectorAll('.typing-animation');

// For each element, loop through the words and trigger animation
elements.forEach(element => {
  const words = JSON.parse(element.getAttribute('data-words'));
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  // Function to execute typing animation
  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    element.textContent = currentWord.substring(0, charIndex);

    // Finish typing
    if ((!isDeleting && charIndex === currentWord.length) || (isDeleting && charIndex === 0)) {
      isDeleting = !isDeleting;
      
      // Delay between words
      if (!isDeleting) {
        wordIndex = (wordIndex + 1) % words.length;
      }
      
      // Delay before start typing next word
      setTimeout(() => {
        type();
      }, isDeleting ? 500 : 2000);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }

  // Start typing animation
  setTimeout(type, 2000); // Initial delay
});

window.addEventListener("load", function(event) {
  const links = document.querySelectorAll("a");
  const buttons = document.querySelectorAll("button");

  links.forEach(function(link) {
    link.addEventListener("click", function(ev) {
      ev.preventDefault();
    });
  });

  buttons.forEach(function(button) {
    button.addEventListener("click", function(ev) {
      ev.preventDefault();
    });
  });
});