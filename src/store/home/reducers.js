import {
  TOGGLE_LOADER, TOGGLE_SCREEN
} from './types';

function initialState() {
  return {
    isLoader: false,
    isDesktop: true
  };
}

export default function general(state = initialState(), action) {
  switch (action.type) {
    case TOGGLE_LOADER:
      return {
        ...state,
        isLoader: !state.isLoader
      };
    case TOGGLE_SCREEN:
      return {
        ...state,
        isDesktop: !state.isDesktop
      };
    default:
      return state;
  }
}
