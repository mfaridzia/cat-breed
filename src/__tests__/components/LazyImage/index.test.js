import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { LazyImage } from '../../../components/LazyImage/index.js';

describe('LazyImage Component', () => {
  beforeEach(() => {
    //IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: jest.fn().mockReturnValue(null),
      unobserve: jest.fn().mockReturnValue(null),
      disconnect: jest.fn().mockReturnValue(null)
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('Should render image fallback', () => {
    const { container } = render(<LazyImage />);
    expect(container).toBeInTheDocument();
  });
});