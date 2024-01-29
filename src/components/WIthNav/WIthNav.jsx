import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const WIthNav = ({ children }) => {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
};

export default WIthNav;