import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import RenderCat from '../../../components/RenderCat/RenderCat.js';

describe('Rendercat Component', () => {
  it('Should render cat image without crash', () => {
    const { container } = render(<RenderCat breeds={[]} />);
    expect(container).toBeInTheDocument();
  });
});