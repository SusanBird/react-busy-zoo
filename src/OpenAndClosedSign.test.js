import { fireEvent, render, screen } from '@testing-library/react';
import OpenAndClosedSign from './OpenAndClosedSign';

test('when I click the sign it changes whether it is open or closed', () => {

  render(<OpenAndClosedSign />);

  const closeZooButton = screen.queryByText(/Close zoo/i);
  const openZooButton = screen.queryByText(/Open zoo/i);

  fireEvent.click(closeZooButton);

  const closedZooEl = screen.queryByText('The animals are sleeping now, see you tomorrow!');
  expect(closedZooEl).toBeInTheDocument();

  fireEvent.click(openZooButton);

  const openZooEl = screen.queryByText('Welcome to the Zoo!');
  expect(openZooEl).toBeInTheDocument();
});
