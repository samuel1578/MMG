import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Impact from './pages/Impact';
import Stories from './pages/Stories';
import Programs from './pages/Programs';
import BecomeMentor from './pages/BecomeMentor';
import BecomeMentee from './pages/BecomeMentee';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/become-mentor" element={<BecomeMentor />} />
              <Route path="/become-mentee" element={<BecomeMentee />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
