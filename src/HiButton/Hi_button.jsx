import './Hi_button_style.css';
import React from 'react';
import Random from './Dop.jsx';

function Hibutton() {
    return (
      <div className="ButtonClick">
        <button onClick={() => {
          Random()
          console.log(' ')}
          }>
          Самая доброжелательная кнопка!
        </button>
      </div>
    );
  }
  export default Hibutton;