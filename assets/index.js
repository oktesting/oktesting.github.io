// run this before page load to avoid flashing between dark and light
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
// --------------------------------------------------------------------

window.onload = () => {
  const hireMe = document.getElementById('mode-text');
  // change the text hire me 	after page load
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
    hireMe.textContent = 'blind me';
  else hireMe.textContent = 'dim it';

  const please = document.getElementById('toggle-mode-btn');
  please.addEventListener('click', (e) => {
    e.preventDefault();
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      // => turn light
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      hireMe.textContent = 'dim it';
    } else {
      // => turn dark
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      hireMe.textContent = 'blind me';
    }
  });
};
