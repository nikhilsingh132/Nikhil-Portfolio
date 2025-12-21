import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants/index";

interface WindowStore {
  windows: typeof WINDOW_CONFIG;
  nextZIndex: number;
  openWindow: (windowId: keyof typeof WINDOW_CONFIG, data?: unknown) => void;
  closeWindow: (windowId: keyof typeof WINDOW_CONFIG) => void;
  focusWindow: (windowId: keyof typeof WINDOW_CONFIG) => void;
}

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,
    openWindow: (windowId, data = null) => {
      set((state) => {
        state.windows[windowId].isOpen = true;
        state.windows[windowId].zIndex = state.nextZIndex;
        state.windows[windowId].data = data;
        state.nextZIndex++;
      });
    },
    closeWindow: (windowId) => {
      set((state) => {
        state.windows[windowId].isOpen = false;
        state.windows[windowId].zIndex = INITIAL_Z_INDEX;
        state.windows[windowId].data = null;
      });
    },
    focusWindow: (windowId) => {
      set((state) => {
        state.windows[windowId].zIndex = state.nextZIndex + 1;
      });
    },
  }))
);

export default useWindowStore;
