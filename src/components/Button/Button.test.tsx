import Button from "./Button";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { render, screen } from "@testing-library/react";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button tag", () => {
      render(
        <Provider store={store}>
          <Button />
        </Provider>
      );

      const button = screen.queryAllByRole("button", {
        name: "Delete",
      });

      expect(button).not.toBeNull();
    });
  });
});
