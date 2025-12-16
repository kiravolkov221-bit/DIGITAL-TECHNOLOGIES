function handleSubmit(event) {
  event.preventDefault();
  const statusEl = document.getElementById('form-status');
  statusEl.textContent = 'Thanks — your note is queued. We will respond soon.';
  event.target.reset();
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
