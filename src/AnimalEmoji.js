import React from 'react';

export default function AnimalEmoji({ animal }) {
  return (
    <>
      {animal === 'camel' && '🐫'}
      {animal === 'rhino' && '🦏'}
      {animal === 'giraffe' && '🦒'}
    </>
  );
}