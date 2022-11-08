import {
  robotReducer,
  getAllRobotsActionCreator,
  initialRobotState,
  RobotState,
  deleteRobotActionCreator,
} from "./RobotsSlice";
import robotsMock from "../../../mocks/robotsMock";
import deleteRobotsMock from "../../../mocks/deleteRobotsMock";

describe("Given a robotReducer", () => {
  describe("When it is invoked with getAllRobots", () => {
    test("Then it should receive a list with three robots", () => {
      const action = getAllRobotsActionCreator(robotsMock);
      const expectedState: RobotState = {
        robots: robotsMock,
      };

      const newState = robotReducer(initialRobotState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with deleteRobot", () => {
    test("Then it should receive a list with two robots", () => {
      const idRobot = "6365624d5574e86800a7e879";
      const action = deleteRobotActionCreator(idRobot);

      const initialState = { robots: robotsMock };

      const expectedState: RobotState = {
        robots: deleteRobotsMock,
      };
      const newState = robotReducer(initialState, action);
      expect(newState).toStrictEqual(expectedState);
    });
  });
});
