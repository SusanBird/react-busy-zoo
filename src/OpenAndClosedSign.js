import React, { useState } from 'react';

export default function OpenAndClosedSign() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenZoo() {
    setIsOpen(true);
  }

  function handleCloseZoo() {
    setIsOpen(false);
  }

  function handleToggleZoo() {
    setIsOpen(!isOpen);
  }   

  return (

    <div>
      <div>
        {isOpen ? 'Welcome to the Zoo!' : 'The animals are sleeping now, see you tomorrow!'}
      </div>
      <button onClick={handleOpenZoo}>Open Zoo</button>
      <button onClick={handleCloseZoo}>Close Zoo</button>
      <button onClick={handleToggleZoo}>Toggle Zoo</button>
    </div>
  );
}
