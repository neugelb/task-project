import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders successfully', () => {
  render(<App />);
  const linkElement = screen.getByText(/successfully/i);
  expect(linkElement).toBeInTheDocument();
});
