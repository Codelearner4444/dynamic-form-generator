import { render, screen } from "@testing-library/react";
import FormGenerator from "../components/FormGenerator";

test("renders form fields based on schema", () => {
  const schema = JSON.stringify({
    fields: [{ name: "username", type: "text", label: "Username", required: true }],
  });

  render(<FormGenerator schema={schema} />);

  const input = screen.getByLabelText(/username/i);
  expect(input).toBeInTheDocument(); // This will now work
});

