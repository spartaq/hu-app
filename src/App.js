import { Outlet } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./Components/SEO";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
    return (
        <HelmetProvider>
            <div className="app-frame">  {/* full-screen app layout */}

                <SEO
                    title='English Exam Exercises'
                    description='A collection of English exercises for exam practice'
                    name='English Exam Exercises'
                    keywords='English, Exercises, Practice, Exams, English Practice, English Prctice Online, English Exam Practice'
                    type='article'
                />

                {/* FIXED HEADER */}
                <header className="app-header">
                    <Header />
                </header>

                {/* SCROLLING CONTENT */}
                <main className="app-content">
                    <ScrollToTop />
                    <Outlet />
                </main>

                {/* FIXED FOOTER */}
                <footer className="app-footer">
                    <Footer />
                </footer>

            </div>
        </HelmetProvider>
    );
};

export default App;
