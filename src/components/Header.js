import React, { useState } from 'react';
import Navigation from './Navigation';
import Project from './pages/Project';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

function Header() {
  const [currentPage, handlePageChange] = useState('About Me');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch(currentPage)
    {
      case 'Portfolio':
        return <Project/>;
      case 'Resume':
        return <Resume/>;
      case 'Contact':
        return <Contact/>;
      default:
        return <AboutMe/>;
    }
  };

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage(currentPage)
        }
      </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Header;
