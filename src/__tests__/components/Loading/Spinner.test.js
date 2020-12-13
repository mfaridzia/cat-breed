import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Spinner from '../../../components/Loading/Spinner.js';

describe('Spinner Component', () => {
  it('Should render Loading screen without crash', () => {
    const { container } = render(<Spinner />);
    expect(container).toBeInTheDocument();
  });
});