const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if(navToggle && navLinks){
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}


  // ---- CONFIGURACIÓN: reemplazar con los datos reales ----
  const WHATSAPP_NUMBER = "5493364388227"; 
  const WHATSAPP_MSG = "Hola, quisiera hacer una consulta.";

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  document.querySelectorAll('#whatsappTop, #whatsappHero, #whatsappInfo').forEach(el => el.href = waUrl);

  // form -> whatsapp
  document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const area = document.getElementById('area').value;
    const mensaje = document.getElementById('mensaje').value;
    const texto = `Hola, soy ${nombre} (${telefono}). Quisiera hacer una consulta sobre: ${area}.${mensaje ? ' ' + mensaje : ''}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`, '_blank');
  });

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('in'); });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));


