// <!-- include.js -->
document.addEventListener("DOMContentLoaded", function() {
  const loadComponent = (selector, file) => {
    fetch(file)
      .then(res => res.text())
      .then(data => document.querySelector(selector).innerHTML = data);
  };

   loadComponent("/footer", "footer-placeholder");
  loadComponent("/navbar", "header-placeholder");
});
