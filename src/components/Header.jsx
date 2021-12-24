import { useTheme } from 'next-themes';
import Link from 'next/link';

const Header = () => {
  const { resolvedTheme: theme, setTheme } = useTheme();
  const toggleMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="container mt-5">
      <div className="flex my-auto relative justify-between">
        <div>
          <div className="flex items-center">
            <Link href={'/'}>
              <div className="text-7xl font-light mr-2 dark:text-primary hover:cursor-pointer">
                <span className="font-semibold">Đức</span> Mạnh
              </div>
            </Link>
            <span className="w-64 text-center bg-primary round ml-2 text-primary rounded-md py-4 leading-none h-12 font-semibold text-lg dark:text-bg-primary dark:bg-text-primary">
              ༼つ◕_◕ ༽つ{' '}
              <span id="mode-text">{theme === 'dark' ? 'blind me' : 'dim it'}</span>,{' '}
              <span
                id="toggle-mode-btn"
                onClick={toggleMode}
                className="underline cursor-pointer"
              >
                please!
              </span>
            </span>
            <img
              src="https://www.svgrepo.com/show/206787/star-christmas-tree.svg"
              alt=""
              className="w-11 ml-2 opacity-80 dark:opacity-100 hover:opacity-100"
            />
          </div>
          <span className="text-2xl text-custom-gray font-light ">
            full-time programmer - sometimes writer - all-time clueless
          </span>
        </div>
        <div className="flex items-start">
          <a href="https://github.com/oktesting" target="_blank" rel="noreferrer">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
              alt="gh"
              className="w-12 h-12 opacity-70 px-2 hover:opacity-100 dark:invert"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/duc-manh/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
              alt="li"
              className="w-12 h-12 opacity-70 px-2 hover:opacity-100 dark:invert"
            />
          </a>
          <a
            href="https://www.instagram.com/spring.dieu/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg"
              alt="ig"
              className="w-12 h-12 opacity-70 px-2 hover:opacity-100 dark:invert"
            />
          </a>
          <a href="mailto:duczoz123@gmail.com">
            <img
              src="https://thesquareplanet.com/gfx/email.svg"
              alt="em"
              className="w-12 h-12 opacity-70 px-2 hover:opacity-100 dark:invert"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
