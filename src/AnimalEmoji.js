import React from 'react';

export default function AnimalEmoji(props) {
  return <span>
    {props.animal === 'camel' && '🐫'}
    {props.animal === 'rhino' && '🦏'}
    {props.animal === 'giraffe' && '🦒'}
  </span>;
}