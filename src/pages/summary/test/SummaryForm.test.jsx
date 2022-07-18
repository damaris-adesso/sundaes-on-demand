import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("Initial conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button");
  expect(confirmButton).toBeDisabled();
});

test("checking checkbox enables button", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button", { name: /submit/i });
  expect(button).toBeDisabled();
  userEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("Checkbox enables button on first click and disables on second click", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button", { name: "Submit" });

  expect(checkbox).toBeEnabled();
  userEvent.click(checkbox);
  expect(button).toBeEnabled();
  userEvent.click(checkbox);
  expect(button).toBeDisabled();
});
