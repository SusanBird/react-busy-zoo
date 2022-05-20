import { render, screen } from '@testing-library/react';
import AnimalEmoji from './AnimalEmoji';

test('the emoji that renders depends on the animal prop sent', () => {
  render(<AnimalEmoji animal='rhino'/>);

  const rhinoEmoji = screen.getByText(/🦏/i);

  expect(rhinoEmoji).toBeInTheDocument();
});
