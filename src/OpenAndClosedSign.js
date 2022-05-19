import React, { useState } from 'react';
import CustomButton from './CustomButton';

export default function OpenAndClosedSign() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenZoo() {
    setIsOpen(true);
  }

  function handleCloseZoo() {
    setIsOpen(false);
  }

  return (

    <div className='open-closed-sign'>
      <div>
        {isOpen ? 'Welcome to the Zoo!' : 'The animals are sleeping now, see you tomorrow!'}
      </div>
      <CustomButton onClick={handleOpenZoo}>Open Zoo</CustomButton>
      <CustomButton onClick={handleCloseZoo}>Close Zoo</CustomButton>
    </div>
  );
}
