import Navbar from './component/Navbar.js'
import Intro from './component/intro.js'
import About from './component/about.js'
import Project  from './component/Project.js';
import Contect from './component/Contact.js';
import Footer from './component/Footer.js';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Project />
      <Contect />
      <Footer />
    </div>
    
  );
}

export default App;
