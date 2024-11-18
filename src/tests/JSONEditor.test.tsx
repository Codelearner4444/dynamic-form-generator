import { render, fireEvent, screen } from "@testing-library/react";
import JSONEditor from "../components/JSONEditor";

test("validates JSON input", () => {
  render(<JSONEditor schema="" onSchemaChange={() => {}} />);
  
  const textarea = screen.getByPlaceholderText(/enter json schema/i);
  
  fireEvent.change(textarea, { target: { value: '{"valid":true}' } });
  expect(screen.queryByText(/invalid json/i)).not.toBeInTheDocument();
  
  fireEvent.change(textarea, { target: { value: '{"invalid"}' } });
  expect(screen.getByText(/invalid json/i)).toBeInTheDocument();
});
