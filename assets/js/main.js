// Apply saved theme immediately to avoid flash
(function () {
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
})();

document.addEventListener('DOMContentLoaded', function () {
  const html = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function updateIcon(theme) {
    btn.querySelector('.icon-sun').style.display = theme === 'dark' ? 'none' : '';
    btn.querySelector('.icon-moon').style.display = theme === 'dark' ? '' : 'none';
  }

  updateIcon(html.getAttribute('data-theme'));

  btn.addEventListener('click', function () {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon(next);
  });
});
