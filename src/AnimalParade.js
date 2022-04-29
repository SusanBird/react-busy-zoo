import React, { useState } from 'react';
import AnimalEmoji from './AnimalEmoji';

export default function AnimalParade() {
  const [animals, setAnimals] = useState(['camel', 'rhino', 'giraffe']);

  function handleAddCamel() {
    animals.push('camel');

    setAnimals([...animals]);
  }

  function handleAddRhino() {
    animals.push('rhino');

    setAnimals([...animals]);
  }

  function handleAddGiraffe() {
    animals.push('giraffe');

    setAnimals([...animals]);
  }

  function handleRemoveAnimal() {
    animals.pop();

    setAnimals([...animals]);
  }

  return (
    <>
      <div>
        {animals.map(animal => <AnimalEmoji key={animal} animal={animal} />)}
      </div><button onClick={handleAddCamel}>Add Camel</button>
      <button onClick={handleAddRhino}>Add Rhino</button>
      <button onClick={handleAddGiraffe}>Add Giraffe</button>
      <button onClick={handleRemoveAnimal}>Remove last animal</button>
    </>
  );
}
