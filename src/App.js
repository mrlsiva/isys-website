import React, {useState, useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';  
import Preloader from './Components/Preloader';
import ScrollTopBtn from './Components/ScrollTopBtn';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import HomeOne from './pages/HomeOne';
import HomeTwo from './pages/HomeTwo';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import TeamPage from './pages/TeamPage';
import FaqPage from './pages/FaqPage';
import PricingPage from './pages/PricingPage';
import ServiceDetails from './pages/ServiceDetails';
import HomeThree from './pages/HomeThree';
import HomeFour from './pages/HomeFour';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Preloader/>
  } else {
    return (
    <>
      <ScrollTopBtn/>
      <Routes>
        <Route path="/" element={<HomeOne />} />
        <Route path="/homeTwo" element={<HomeTwo />} />
        <Route path="/homeThree" element={<HomeThree />} />
        <Route path="/homeFour" element={<HomeFour />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/newsDetails" element={<NewsDetails />} />
        <Route path="/servicesDetails" element={<ServiceDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </>
    )
  }
}

export default App;
