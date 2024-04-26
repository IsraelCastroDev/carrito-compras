export const darkModeInitialState = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches
  ? "dark"
  : "light";

export function darkModeReducer(state, action) {
  if (action.type === "TOGGLE_DARK_MODE") {
    return state === "light" ? "dark" : "light";
  }

  return state;
}
