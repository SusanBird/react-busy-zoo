import React, { useState } from 'react';
import AnimalEmoji from './AnimalEmoji';
import CustomButton from './CustomButton';

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
    <div className='AnimalParade'>
      <div>
        {animals.map(animal => <AnimalEmoji key={animal} animal={animal} />)}
      </div>
      <CustomButton onClick={handleAddCamel}>Add Camel</CustomButton>
      <CustomButton onClick={handleAddRhino}>Add Rhino</CustomButton>
      <CustomButton onClick={handleAddGiraffe}>Add Giraffe</CustomButton>
      <CustomButton onClick={handleRemoveAnimal}>Remove last animal</CustomButton>
    </div>
  );
}
