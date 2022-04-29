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

  return (
    <div>AnimalParade</div>
  )
}
