import { locations } from "#constants/index";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work;

type Location =
  | (typeof locations)[keyof typeof locations]
  | (typeof locations.work.children)[number];

interface FinderLocationStore {
  activeLocation: Location | null;
  setActiveLocation: (location: Location | null) => void;
  resetActiveLocation: () => void;
}

const useFinderLocationStore = create<FinderLocationStore>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    setActiveLocation: (location = null) => {
      set((state) => {
        state.activeLocation = location;
      });
    },
    resetActiveLocation: () => {
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      });
    },
  }))
);

export default useFinderLocationStore;
