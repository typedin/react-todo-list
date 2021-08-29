import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByTestId(/app-link/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.textContent).toContain("Learn React");
});
