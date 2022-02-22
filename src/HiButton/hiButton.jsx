import './HibuttonStyle.css';
import React from 'react';

function Hibutton() {
    return (
      <div className="ButtonClick">
        <button onClick={() => {
          console.log('Goooooooooood MooOOooOooorning, мистер!')
          console.log(' ')}
          }>
          Самая доброжелательная кнопка!
        </button>
      </div>
    );
  }
  export default Hibutton;