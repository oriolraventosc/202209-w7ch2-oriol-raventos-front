import { render, screen } from "@testing-library/react";
import RobotCard from "./RobotCard";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import robotsMock from "../../mocks/robotsMock";

describe("Given a RobotCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an article", () => {
      const robotName = "Ed-40";

      render(
        <Provider store={store}>
          <RobotCard robot={robotsMock[1]} />
        </Provider>
      );

      const article = screen.queryByRole("heading", {
        level: 2,
        name: robotName,
      });

      expect(article).toHaveTextContent(robotName);
    });
  });
});
