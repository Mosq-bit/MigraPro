document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.getElementById('burgerMenu');
  const mainNav = document.getElementById('mainNav');
  
  // Создаем оверлей (затемнение фона)
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);
  
  if (burgerMenu && mainNav) {
    // Открытие/закрытие меню при клике на бургер
    burgerMenu.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('active');
      mainNav.classList.toggle('active');
      overlay.classList.toggle('active');
      
      // Блокируем прокрутку body
      document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Закрытие при клике на оверлей
    overlay.addEventListener('click', function() {
      burgerMenu.classList.remove('active');
      mainNav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    // Закрытие при клике на ссылку в меню
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        burgerMenu.classList.remove('active');
        mainNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // Закрытие при нажатии Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        mainNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    // Предотвращаем закрытие при клике внутри меню
    mainNav.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
});



// acordeon
  document.addEventListener('DOMContentLoaded', function() {
  const servicesBtn = document.getElementById('servicesBtn');
  const servicesContent = document.getElementById('servicesContent');
  
  if (servicesBtn && servicesContent) {
    servicesBtn.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      
      this.setAttribute('aria-expanded', !expanded);
      servicesContent.classList.toggle('active');
      
      if (!expanded) {
        servicesContent.style.maxHeight = servicesContent.scrollHeight + 'px';
      } else {
        servicesContent.style.maxHeight = null;
      }
    });
  }
});