import { fireEvent, render, screen } from '@testing-library/react';
import AnimalParade from './AnimalParade';

test('when I click add rhino there is one more rhino than there was before the click', () => {
  render(<AnimalParade animal='rhino'/>);

  const rhinoEmojisBefore = screen.queryAllByText(/🦏/i);

  expect(rhinoEmojisBefore.length).toBe(1);

  const addRhinoButton = screen.getByText(/Add Rhino/i);

  fireEvent.click(addRhinoButton);

  const rhinoEmojisAfter = screen.queryAllByText(/🦏/i);

  expect (rhinoEmojisAfter.length).toBe(1);
});
