import {
  TOGGLE_LOADER, TOGGLE_SCREEN
} from './types';

export const toggleLoader = () => ({ type: TOGGLE_LOADER });

export const toggleScreen = () => ({ type: TOGGLE_SCREEN });
