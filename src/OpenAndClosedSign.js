import React, { useState } from 'react';

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
      <button onClick={handleOpenZoo}>Open Zoo</button>
      <button onClick={handleCloseZoo}>Close Zoo</button>
    </div>
  );
}
