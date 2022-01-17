import React from 'react';

function Navigation(props) {
  const tabs = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <header className="flex-row px-1">
      <h1>Mike Blackwell</h1>
      <nav>
      <ul className="flex-row">
        {tabs.map(tab => (
          <li 
          className="mx-2"
          key={tab}
          >
            <a
              href={'#' + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={props.currentPage === tab ? 'navActive' : 'nav-link'}
              key={tab}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      </nav>
    </header>
  );
}

export default Navigation;