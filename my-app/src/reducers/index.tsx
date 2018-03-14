// src/reducers/index.tsx

import { EnthusiasmAction } from '../actions';
import { EnthusiamState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

const initialState: EnthusiamState = {
  languageName: '',
  enthusiasmLevel: 1
};

export function enthusiasm(state: EnthusiamState = initialState, action: EnthusiasmAction): EnthusiamState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default: return {...state};
  }
//  return state;
}