import React from "react";
import App from "./App";
import * as rtl from "@testing-library/react";

describe("App", () => {
  let body;

  afterEach(rtl.cleanup);
  beforeEach(() => {
    body = rtl.render(<App />);
  });

  it("first test", async () => {
    const text = await body.findByText("Select a season");
    expect(text).toBeInTheDocument();
    expect(text).toBeVisible();
  });
});
