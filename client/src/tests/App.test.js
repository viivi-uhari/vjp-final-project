import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renders the title of the website', () => {
  render(<App />);
  const title = screen.getByText(/Inclusive Helsinki/i);
  expect(title).toBeInTheDocument();
});
