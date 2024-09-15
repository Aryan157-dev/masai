document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button');

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          button.style.backgroundColor = 'lightblue';
      });

      button.addEventListener('mouseover', () => {
          const messageId = `message${button.id.replace('button', '')}`;
          document.getElementById(messageId).style.display = 'block';
      });

      button.addEventListener('mouseout', () => {
          const messageId = `message${button.id.replace('button', '')}`;
          document.getElementById(messageId).style.display = 'none';
      });

      button.addEventListener('dblclick', () => {
          button.style.display = 'none';
      });
  });
});
