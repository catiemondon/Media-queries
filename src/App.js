import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    
        <nav>
                <span>
                    <h1>Start Bootstrap</h1>
                </span>

                <ul className='desktop-navigation'>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>About</li>
                    <li>Team</li>
                    <li>Contact</li>
                </ul>
        <div className="mobilenav">
         
          
          
         
        <div className="mobile-navigation">
         
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="collapsible-menu">

        <label for="menu">Menu</label>

      <input type="checkbox" id="menu" />
    <div className="menu-content">
        <ul className="nav2">
            <li>Services</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Team</li>
            <li>Contact</li>
            
         </ul>
     </div>
     

     </div>
</div>
</nav>
</div>


      
            
    
     


  );
}

export default App;
