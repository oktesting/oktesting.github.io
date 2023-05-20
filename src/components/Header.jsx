import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const { resolvedTheme: theme, setTheme } = useTheme();
  const toggleMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const router = useRouter();

  return (
    <div className="container mt-8">
      <div className="flex flex-col items-center xl:flex-row xl:justify-between gap-y-5">
        <div>
          <div className="flex items-center text-center justify-center xl:justify-start gap-3">
            <Link href={'/'}>
              <div className="text-7xl font-light dark:text-primary hover:cursor-pointer">
                <span className="font-semibold">Đức</span> Mạnh
              </div>
            </Link>
            <span className="w-64 text-center bg-primary round ml-2 text-primary rounded-md py-4 leading-none h-12 font-semibold text-lg dark:text-bg-primary dark:bg-text-primary hidden xl:block">
              ༼つ◕_◕ ༽つ{' '}
              <span suppressHydrationWarning id="mode-text">
                {theme === 'dark' ? 'go blind' : 'dim it'}
              </span>
              ,{' '}
              <span
                id="toggle-mode-btn"
                onClick={toggleMode}
                className="underline cursor-pointer"
              >
                please!
              </span>
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-6">
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
            href="https://www.instagram.com/duccm_/"
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
      {router.pathname.includes('posts') && (
        <div className="text-center xl:text-left text-2xl text-custom-gray font-light my-1">
          full-time programmer - sometimes writer - all-time clueless
        </div>
      )}
    </div>
  );
};

export default Header;
