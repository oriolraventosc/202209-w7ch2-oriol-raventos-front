//Given a usersReducer
//When it is invoked with the method userLogin
//Then it should
//Change state isLogged to true
//change the credentials(username, passowrd, email)

import userMock from "../../../mocks/userMcok";
import {
  userLoginActionCreator,
  userInitialState,
  usersReducer,
} from "./UsersSlice";

describe("Given a usersReducer", () => {
  describe("When it is invoked with userLogin", () => {
    test("Then it should receive the user 'paco' logged", () => {
      const action = userLoginActionCreator(userMock);
      const initialState = userInitialState;
      const expectedState = {
        username: "paco",
        password: "paco2",
        email: "paco2@gmail.com",
        isLogged: true,
      };

      const newState = usersReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
