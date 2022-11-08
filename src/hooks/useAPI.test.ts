import useAPI from "./useAPI";
import { renderHook } from "@testing-library/react";
import { store } from "../redux/store";
import ProviderWrapper from "../mocks/providerWrapper";

const dispatch = jest.spyOn(store, "dispatch");

describe("Given a useAPI hook", () => {
  describe("When it is invoked with the method getAllRobots", () => {
    test("Then it should call the dispatch method", async () => {
      const {
        result: {
          current: { getAllRobots },
        },
      } = renderHook(() => useAPI(), {
        wrapper: ProviderWrapper,
      });

      await getAllRobots();

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method deleteRobots", () => {
    test("Then it should call the dispatch method", async () => {
      const {
        result: {
          current: { deleteRobot },
        },
      } = renderHook(() => useAPI(), {
        wrapper: ProviderWrapper,
      });
      const idRobot = "660091ddd11";
      await deleteRobot(idRobot);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
