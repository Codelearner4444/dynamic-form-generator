import { render } from "@testing-library/react";
import Layout from "../components/Layout";
// Explicitly import `test` and `expect` from Jest

import { test, expect } from "@jest/globals";// Use `vitest` if your project uses it
// OR, for Jest
// import { test, expect } from "@jest/globals";

test("renders children in a grid layout", () => {
  const { container } = render(
    <Layout>
      <div>Child 1</div>
      <div>Child 2</div>
    </Layout>
  );

  const children = container.querySelectorAll("div > div");
  expect(children.length).toBe(2);
});
