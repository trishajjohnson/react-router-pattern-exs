import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App, {dogs} from './App';
import Navbar from "./Navbar";

test('/dogs route', () => {
  const { getByText } = render((
  <MemoryRouter initialEntries={["/dogs"]}>
    <App />
  </MemoryRouter>
  ));

  expect(getByText("All Dogs")).toBeInTheDocument();
});

test('Navbar links', () => {
  const { getByText, getByTestId } = render((
  <MemoryRouter initialEntries={["/dogs"]}>
    <App />
  </MemoryRouter>
  ));

  expect(getByText("All Dogs")).toBeInTheDocument();
  
  const link = getByTestId('Perry');
  fireEvent.click(link);

  expect(getByTestId("DogDetails-header-Perry")).toBeInTheDocument();

});

test('Navbar links', () => {
  const { getByText, getByTestId } = render((
  <MemoryRouter initialEntries={["/dogs"]}>
    <App />
  </MemoryRouter>
  ));

  expect(getByText("All Dogs")).toBeInTheDocument();
  
  const link = getByTestId('Whiskey');
  fireEvent.click(link);

  expect(getByTestId("DogDetails-header-Whiskey")).toBeInTheDocument();

});
