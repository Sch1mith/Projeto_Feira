document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
  
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        button.querySelector('.toggle-icon').textContent = '+';
      } else {
        answer.style.display = 'block';
        button.querySelector('.toggle-icon').textContent = '−';
      }
    });
  });
  