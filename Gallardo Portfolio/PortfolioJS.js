document.addEventListener('DOMContentLoaded', () => {
  const sections = ['about', 'skills', 'resume', 'contact'];

  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      const container = section.querySelector('.container');
      if (container) {
        const returnDiv = document.createElement('div');
        returnDiv.className = 'return-home';

        const returnLink = document.createElement('a');
        returnLink.href = '#menu';
        returnLink.className = 'return';
        returnLink.textContent = 'Return to Home Page';

        returnDiv.appendChild(returnLink);
        container.appendChild(returnDiv);
      }
    }
  });
});
function typeEffect(element, speed) {
  const text = element.textContent;   
  element.textContent = "";           
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

const heading = document.getElementById("intro");
typeEffect(heading, 65);

