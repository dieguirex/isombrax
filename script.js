const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    const section = document.querySelector(target);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  alert(`Mensaje enviado:\nNombre: ${name}\nEmail: ${email}\nMensaje: ${message}`);
  form.reset();
});

<script>
const searchBox = document.getElementById('search-box');
const searchResults = document.getElementById('search-results');

searchBox.addEventListener('input', function() {
  const query = this.value.trim().toLowerCase();
  const sections = document.querySelectorAll('section');

  searchResults.innerHTML = '';

  if (query.length <= 0) {
    return;
  }

  sections.forEach(function(section) {
    const title = section.querySelector('h2').textContent.trim().toLowerCase();
    const content = section.textContent.trim().toLowerCase();

    if (title.includes(query) || content.includes(query)) {
      const link = document.createElement('a');
      link.textContent = title;
      link.href = '#' + section.id;

      const paragraph = document.createElement('p');
      paragraph.appendChild(link);

      searchResults.appendChild(paragraph);
    }
  });
});
</script>

