import React, { useState } from 'react';
import CustomButton from './CustomButton';

export default function LionUnicornFight() {
  const [unicornStrength, setUnicornStrength] = useState(5);
  const [lionStrength, setLionStrength] = useState(5);
  
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
        <CustomButton onClick={handleUnicornAttack}>Unicorn attacks lion</CustomButton>
        <CustomButton onClick={handleUnicornEatSprinkles}>Unicorn eats some sprinkles</CustomButton>
      </div>
      <div className='fighter'>
        <div className='emoji' style={{ fontSize: `${lionStrength}rem` }}>
          🦁
        </div>
        <CustomButton onClick={() => setUnicornStrength(unicornStrength - .2)}>Lion attack unicorn</CustomButton>
        <CustomButton onClick={() => setLionStrength(lionStrength + .2)}>Lion roars</CustomButton>
      </div>
    </div>
  );
}
