import React, { useState } from 'react';

export default function LionUnicornFight() {
  const [unicornStrength, setUnicornStrength] = useState(1);
  const [lionStrength, setLionStrength] = useState(1);
  
  function handleUnicornAttack() {
    setLionStrength(lionStrength - .2);
  }
  
  function handleUnicornEatSprinkles() {
    setUnicornStrength(unicornStrength + .2);
  }

  return (
    <div className='fight'>
      <div className='fighter'>
        <div className='emoji' style={{ fontSize: `${unicornStrength}rem` }}>
          🦄
        </div>
        <button onClick={handleUnicornAttack}>Unicorn attacks lion</button>
        <button onClick={handleUnicornEatSprinkles}>Unicorn eats some sprinkles</button>
      </div>
      <div className='fighter'>
        <div className='emoji' style={{ fontSize: `${lionStrength}rem` }}>
          🦁
        </div>
        <button onClick={() => setUnicornStrength(unicornStrength - .2)}>Lion attack unicorn</button>
        <button onClick={() => setLionStrength(lionStrength + .2)}>Lion roars</button>
      </div>
    </div>
  );
}
