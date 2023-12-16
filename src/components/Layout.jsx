import Header from './Header';
import Footer from './Footer';
import { useTheme } from 'next-themes';
import useHolidaySeason from '../hooks/useHolidaySeason';

const Layout = ({ children }) => {
  const { resolvedTheme: theme } = useTheme();
  const isHolidaySeason = useHolidaySeason();
  return (
    <div
      className={`flex flex-col min-h-screen relative ${
        isHolidaySeason ? `cursor-snow bg-christmas bg-christmas-tree-${theme}` : ''
      }`}
    >
      <Header />
      <div className="flex-grow my-8">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
