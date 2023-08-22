/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
// import App from "./App";
import "@testing-library/jest-dom";
import AllPosts from "./components/AllPosts"

describe("All Posts component", () => {
  test("renders all posts from API", () => {
    // Render the App component
    render(<AllPosts />);
    const renderText = screen.getByText(
      /Practically new Stradivarius/i,
    );
    expect(renderText).toBeInTheDocument();


  });


});
