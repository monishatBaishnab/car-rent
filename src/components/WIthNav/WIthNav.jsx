import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const WIthNav = ({ children }) => {
    return (
        <main className="bg-[#F6F7F9]">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
};

export default WIthNav;