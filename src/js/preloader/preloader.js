window.onload = function () {
  document.body.classList.add('backdrop-open');
  document.getElementById('preloader').classList.remove('is-hidden');

  window.setTimeout(function () {
    document.body.classList.remove('backdrop-open');
    document.getElementById('preloader').classList.add('is-hidden');
  }, 2000);
};
