import { UPDATE_CLOWNS } from './constants';

export const clownsInitialState = {
  clowns: [],
};

export const clownsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CLOWNS: {
      return { ...state, clowns: action.payload };
    }
    default:
  }
};
