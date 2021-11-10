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
    console.log(response);
  expect(getByText("All Dogs")).toBeInTheDocument();
});

test('Navbar links', () => {
  const { getByText } = render((
  <MemoryRouter initialEntries={["/dogs"]}>
    <App />
  </MemoryRouter>
  ));

  expect(getByText("All Dogs")).toBeInTheDocument();
  
  const link = getByText('Perry');
  fireEvent.click(link);

  expect(getByText("Perry")).toBeInTheDocument();

});
