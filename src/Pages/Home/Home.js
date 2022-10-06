import About from '../../component/About/About';
import Banner from '../../component/Banner/Banner';
import Blogs from '../../component/Blogs/Blogs';
import Certificate from '../../component/Certificate/Certificate';
import Contact from '../../component/Contact/Contact';
import Footer from '../../component/Footer/Footer';
import Podcast from '../../component/Podcast/Podcast';
import Projects from '../../component/Projects/Projects';
import Record from '../../component/Record/Record';
import './Home.css';
const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Record></Record>
            <About></About>
            <Certificate></Certificate>
            <Podcast></Podcast>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>

        </div>

    );
};

export default Home;