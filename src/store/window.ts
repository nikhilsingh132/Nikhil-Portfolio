import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants/index";

interface WindowState {
  isOpen: boolean;
  zIndex: number;
  data: unknown;
  isMaximized: boolean;
  originalPosition?: { x: number; y: number; width: string; height: string };
}

interface WindowStore {
  windows: Record<keyof typeof WINDOW_CONFIG, WindowState>;
  nextZIndex: number;
  openWindow: (windowId: keyof typeof WINDOW_CONFIG, data?: unknown) => void;
  closeWindow: (windowId: keyof typeof WINDOW_CONFIG) => void;
  focusWindow: (windowId: keyof typeof WINDOW_CONFIG) => void;
  maximizeWindow: (windowId: keyof typeof WINDOW_CONFIG) => void;
  restoreWindow: (windowId: keyof typeof WINDOW_CONFIG) => void;
  toggleMaximize: (windowId: keyof typeof WINDOW_CONFIG) => void;
}

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: Object.keys(WINDOW_CONFIG).reduce((acc, key) => {
      const windowKey = key as keyof typeof WINDOW_CONFIG;
      acc[windowKey] = {
        ...WINDOW_CONFIG[windowKey],
        isMaximized: false,
        originalPosition: undefined,
      };
      return acc;
    }, {} as Record<string, WindowState>),
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
    maximizeWindow: (windowId) => {
      set((state) => {
        const window = state.windows[windowId];
        if (!window.isMaximized) {
          // Use requestAnimationFrame to ensure DOM is ready
          requestAnimationFrame(() => {
            const element = document.getElementById(windowId);
            if (element) {
              const rect = element.getBoundingClientRect();
              const computedStyle = getComputedStyle(element);

              set((state) => {
                state.windows[windowId].originalPosition = {
                  x: rect.left,
                  y: rect.top,
                  width:
                    element.style.width ||
                    computedStyle.width ||
                    rect.width + "px",
                  height:
                    element.style.height ||
                    computedStyle.height ||
                    rect.height + "px",
                };
                state.windows[windowId].isMaximized = true;
                state.windows[windowId].zIndex = state.nextZIndex++;
              });
            } else {
              // Fallback: set maximized even if element not found
              set((state) => {
                state.windows[windowId].isMaximized = true;
                state.windows[windowId].zIndex = state.nextZIndex++;
              });
            }
          });
        }
      });
    },
    restoreWindow: (windowId) => {
      set((state) => {
        state.windows[windowId].isMaximized = false;
        state.windows[windowId].zIndex = state.nextZIndex++;
      });
    },
    toggleMaximize: (windowId) => {
      const state = useWindowStore.getState();
      if (state.windows[windowId].isMaximized) {
        state.restoreWindow(windowId);
      } else {
        state.maximizeWindow(windowId);
      }
    },
  }))
);

export default useWindowStore;
