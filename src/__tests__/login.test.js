import { render, screen } from "@testing-library/react";
import LoginPage from "../Pages/LoginPage/LoginPage";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

test("is login button working", () => {
  render(
    <Router>
      <LoginPage />
    </Router>
  );
  expect(screen.getByRole("button", { name: /LOG IN/i }));
});

test("Are there input space", () => {
  render(
    <Router>
      <LoginPage />
    </Router>
  );
  userEvent.type(screen.getByPlaceholderText(/Email/i));
  userEvent.type(screen.getByPlaceholderText(/Password/i));
});

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
