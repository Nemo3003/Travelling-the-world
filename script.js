const menuToggle = document.querySelector('.toggle');

      const showcase = document.querySelector('.showcase');

      menuToggle.addEventListener('mouseover', () => {

        menuToggle.classList.toggle('active');
        
        showcase.classList.toggle('active');
      })