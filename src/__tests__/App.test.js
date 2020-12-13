import App from '../App';
import { render } from '@testing-library/react';

it('should render the App component without crash', () => {
  const { container } = render(<App />);
  expect(container).not.toBeNull();
});