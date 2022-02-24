import './Hi_button_style.css';
import React from 'react';
import Random from './Dop.jsx';

function Hibutton() {
    return (
      <body>
          <div className="social instagram">
            <p className="slova">Нажми на иконку inst</p>
              <a href="https://www.instagram.com/aleksey_lu/" target="_blank"><i className="fa fa-instagram fa-5x"></i></a>
                <div className="ButtonClick">
                  <button onClick={() => {
                    Random()
                    console.log(' ')}
                    }>
                    Button
                  </button>
                </div>
          </div>
      </body> 
    );
  }
  export default Hibutton;