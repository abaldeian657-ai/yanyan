const form = document.querySelector('.message-field');
    function show(id, el) {
      event.preventDefault();
      document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      el.classList.add('active');
    }
  