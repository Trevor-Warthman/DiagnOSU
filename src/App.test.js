import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the app div', () => {
  const { getByTestId } = render(<App />);
  const divElement = getByTestId(/app-div/i);
  expect(divElement).toBeInTheDocument();
});
