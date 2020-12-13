import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Home from '../../pages/Home.js';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Homepage', () => {
  it('Should render title and sub title', () => {
    render(<Router> <Home /> </Router>);
    expect(screen.getAllByText('CatWiki')[0]).toBeInTheDocument();
    expect(screen.getByTestId('text-decsription')).toBeInTheDocument();
  });

  it('Should render see more link', () => {
    render(<Router> <Home /> </Router>);
    expect(screen.getByTestId('see-more')).toBeInTheDocument();
  });
})