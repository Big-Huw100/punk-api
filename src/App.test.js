import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Punk IPA API/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders beer cards', async () => {
  render(<App />);
  const cardElements = await screen.findAllByTestId(/beer-card/i);
  expect(cardElements).not.toHaveLength(0);
});

test('filters beers by search input', async () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Search for a beer/i);
  fireEvent.change(inputElement, { target: { value: 'punk' } });
  const cardElements = await screen.findAllByTestId(/beer-card/i);
  expect(cardElements).not.toHaveLength(0);
  cardElements.forEach((cardElement) => {
    expect(cardElement).toHaveTextContent(/punk/i);
  });
});

test('filters beers by high ABV', async () => {
  render(<App />);
  const checkboxElement = screen.getByLabelText(/High ABV/i);
  fireEvent.click(checkboxElement);
  const cardElements = await screen.findAllByTestId(/beer-card/i);
  expect(cardElements).not.toHaveLength(0);
  cardElements.forEach((cardElement) => {
    const abvElement = cardElement.querySelector('.abv');
    expect(parseFloat(abvElement.textContent)).toBeGreaterThanOrEqual(6.0);
  });
});

test('filters beers by beer age', async () => {
  render(<App />);
  const checkboxElement = screen.getByLabelText(/2010 or older/i);
  fireEvent.click(checkboxElement);
  const cardElements = await screen.findAllByTestId(/beer-card/i);
  expect(cardElements).not.toHaveLength(0);
  cardElements.forEach((cardElement) => {
    const ageElement = cardElement.querySelector('.age');
    expect(parseInt(ageElement.textContent)).toBeLessThanOrEqual(2010);
  });
});

test('filters beers by acidity', async () => {
  render(<App />);
  const checkboxElement = screen.getByLabelText(/Acidity/i);
  fireEvent.click(checkboxElement);
  const cardElements = await screen.findAllByTestId(/beer-card/i);
  expect(cardElements).not.toHaveLength(0);
  cardElements.forEach((cardElement) => {
    const phElement = cardElement.querySelector('.ph');
    expect(parseFloat(phElement.textContent)).toBeGreaterThanOrEqual(4);
  });
});