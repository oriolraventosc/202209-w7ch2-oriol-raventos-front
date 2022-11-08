import { render, screen } from "@testing-library/react";
import RobotList from "./RobotList";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Given a RobotList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a ul element", () => {
      render(
        <Provider store={store}>
          <RobotList />
        </Provider>
      );

      const list = screen.queryByRole("list");

      expect(list).toBeInTheDocument();
    });
  });
});
