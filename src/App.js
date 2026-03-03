import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import AIFooter from './Components/AIFooter/AIFooter';
import Home from './Pages/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import Pricing from './Pages/Pricing/Pricing';
import Faqs from './Pages/Faqs/Faqs';
import About from './Pages/About';
import Capabilities from './Pages/Capability';
import Terms from './Pages/Terms';
import BlogDetail from './Pages/Blog';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#02040a', minHeight: '100vh' }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faqs" element={<Faqs />} />
                    <Route path="/about" element={<About />} />
                                        <Route path="/capabilities" element={<Capabilities />} />

                                        <Route path="/term" element={<Terms />} />
                                                                                <Route path="/partner" element={<BlogDetail />} />


        </Routes>

        <AIFooter />
      </div>
    </Router>
  );
}

export default App;