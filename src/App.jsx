import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Products from "./sections/Products";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";



function App() {
  

  return (
    
      <div      
      className="bg-gray-50 dark:bg-gray-950 min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Products />
        <Contact />
        <Footer />
      </div>
     
  )
}

export default App
