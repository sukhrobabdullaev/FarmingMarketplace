import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default RootLayout;
