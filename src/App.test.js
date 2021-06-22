import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

it('renders the title', () => {
  const {queryByTestId} = render(<App />)

  expect(queryByTestId('title')).toBeTruthy()
  
});
