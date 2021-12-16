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
  const spotify = document.getElementById('spotify');
  const BASE_PLAYLIST_URL =
    spotify.src?.split('?')[0] ||
    'https://open.spotify.com/embed/playlist/7dI5P0psZVQYmD9VHJIoSR';
  // change the text hire me and spotify theme after page load
  const lightrope = document.getElementById('lightrope');
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    spotify.src = BASE_PLAYLIST_URL + '?theme=0';
    hireMe.textContent = 'blind me';
    lightrope.classList.add('on');
  } else {
    hireMe.textContent = 'dim it';
  }

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
      spotify.src = BASE_PLAYLIST_URL;
      lightrope.classList.remove('on');
    } else {
      // => turn dark
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      hireMe.textContent = 'blind me';
      spotify.src = BASE_PLAYLIST_URL + '?theme=0';
      lightrope.classList.add('on');
    }
  });
};
