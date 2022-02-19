/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("Button disable", () => {
  const { container } = render(<Button isDisable></Button>);

  expect(container.querySelector("span.disable")).toBeInTheDocument();
});
