const COUNTER_INCREASE = 'counter/INCREASE';
const COUNTER_DECREASE = 'counter/DECREASE';
const COUNTER_RESET = 'counter/RESET';

const increase = (number = 1) => ({
  type: COUNTER_INCREASE,
  number,
});

const decrease = (number = 1) => ({
  type: COUNTER_DECREASE,
  number,
});

const reset = () => ({
  type: COUNTER_RESET,
});

export const actions = {
  increase,
  decrease,
  reset,
}

// ==================

const getCount = ({ counter }) => counter.count;

export const selectors = {
  getCount,
}

// ==================

const initialState = {
  count: 0,
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case COUNTER_INCREASE: {
      const { number } = action;
      const newState = { ...state };
      newState.count += number;
      return newState;
    }

    case COUNTER_DECREASE: {
      const { number } = action;
      const newState = { ...state };
      newState.count -= number;
      return newState;
    }

    case COUNTER_RESET: {
      const newState = { ...state };
      newState.count = 0;
      return newState;
    }
    default: return state;
  }
}
