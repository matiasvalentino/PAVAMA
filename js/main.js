document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initTeamModals();
  initContactForm();
  initSmoothScroll();
});

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

function initMobileMenu() {
  const toggle = document.querySelector('.navbar-mobile-toggle');
  const links = document.querySelector('.navbar-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('active');
  });

  document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('active');
    });
  });
}

function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        
        const staggerDelay = entry.target.dataset.delay;
        if (staggerDelay) {
          entry.target.style.transitionDelay = staggerDelay;
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll, .animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right, .animate-scale-in').forEach(el => {
    observer.observe(el);
  });
}

function initTeamModals() {
  const modalOverlay = document.getElementById('teamModal');
  if (!modalOverlay) return;

  const teamMembers = [
    {
      initials: 'VF',
      name: 'Valentín Fibul',
      role: 'Full Stack Developer',
      description: 'Apasionado por el desarrollo backend y la arquitectura de sistemas. Siempre buscando optimizar el rendimiento y la escalabilidad de las aplicaciones.',
      email: 'valentin.fibul@estudiante.sedes.com',
      linkedin: 'https://linkedin.com/in/valentinfibul',
      github: 'https://github.com/valentinfibul',
      technologies: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'Docker', 'Git'],
      education: 'Técnico en Análisis de Sistemas y Desarrollo de Software - Instituto Sedes Sapientiae'
    },
    {
      initials: 'MM',
      name: 'Matías Morales',
      role: 'Frontend Developer',
      description: 'Entusiasta del diseño UI/UX y la experiencia de usuario. Me encanta crear interfaces modernas, accesibles y visualmente atractivas.',
      email: 'matias.morales@estudiante.sedes.com',
      linkedin: 'https://linkedin.com/in/matiasmorales',
      github: 'https://github.com/matiasmorales',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'React', 'Figma'],
      education: 'Técnico en Análisis de Sistemas y Desarrollo de Software - Instituto Sedes Sapientiae'
    },
    {
      initials: 'PU',
      name: 'Paula Unau',
      role: 'Backend Developer',
      description: 'Especializada en desarrollo de APIs y bases de datos. Me fascina resolver problemas complejos y garantizar la seguridad de las aplicaciones.',
      email: 'paula.unau@estudiante.sedes.com',
      linkedin: 'https://linkedin.com/in/paulaunau',
      github: 'https://github.com/paulaunau',
      technologies: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'PostgreSQL', 'AWS'],
      education: 'Técnico en Análisis de Sistemas y Desarrollo de Software - Instituto Sedes Sapientiae'
    }
  ];

  document.querySelectorAll('.team-card').forEach((card, index) => {
    card.addEventListener('click', () => {
      const member = teamMembers[index];
      if (!member) return;

      document.getElementById('modalAvatar').textContent = member.initials;
      document.getElementById('modalName').textContent = member.name;
      document.getElementById('modalRole').textContent = member.role;
      document.getElementById('modalDescription').textContent = member.description;
      document.getElementById('modalEmail').href = `mailto:${member.email}`;
      document.getElementById('modalEmail').textContent = member.email;
      document.getElementById('modalLinkedin').href = member.linkedin;
      document.getElementById('modalGithub').href = member.github;
      document.getElementById('modalEducation').textContent = member.education;

      const techsContainer = document.getElementById('modalTechs');
      techsContainer.innerHTML = member.technologies.map(tech => 
        `<span class="badge">${tech}</span>`
      ).join('');

      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeBtn = modalOverlay.querySelector('.modal-close');
  closeBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    console.log('Form submitted:', { name, email, message });

    const successMsg = form.querySelector('.form-success');
    successMsg.classList.add('show');

    form.reset();

    setTimeout(() => {
      successMsg.classList.remove('show');
    }, 5000);
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}