import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const About =() => {
    return(
        <>
        <Navbar />
        <Announcement/>
        <div>
            <h1>About Us</h1>
            <p>Trang nay de them thong tin 4 thanh vien nha</p>
        </div>
        <Newsletter/>
        <Footer />
        </>
    )
}
export default About;