/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import AllPosts from "./components/AllPosts"

describe("All Posts component", () => {
  test("renders all posts", () => {
    // Render the App component
    render(<AllPosts />);

    // Find the nav bar button for all posts
    const allPostsButton = screen.getByText("All Posts");

    // Simulate a click on the "All Posts" button
    fireEvent.click(allPostsButton);

    // Assert that the header above all posts is rendered
    const headerText = screen.getByText(
      /All Active Posts Below/i,
    );
    expect(headerText).toBeInTheDocument();


  });


  //test below for API call
});
