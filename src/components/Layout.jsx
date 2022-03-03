import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow my-14">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
