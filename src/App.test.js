import { render, screen } from '@testing-library/react';
import ZooPage from './ZooPage';

test('renders learn react link', () => {
  render(<ZooPage />);
  const linkElement = screen.getByText(/animals/i);
  expect(linkElement).toBeInTheDocument();
});
