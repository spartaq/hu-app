import { Outlet } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./Components/SEO";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
   

    return (
        <HelmetProvider>
            
                
            <div className="app-container">
                <SEO
                    title='English Exam Exercises'
                    description='A collection of English exercises for exam practice'
                    name='English Exam Exercises'
                    keywords='English, Exercises, Practice, Exams, English Practice, English Prctice Online, English Exam Practice'
                    type='article' />
                
                <Navbar/>
         
            <div className="content">
                <ScrollToTop />
                <Outlet />
            </div>
          
                <Footer/>
            </div>
        </HelmetProvider>
    );
};

export default App;
