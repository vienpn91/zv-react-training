const ADD_HACKERDETAILS = 'hackerdetails/ADD_HACKERDETAILS';

const addhackerdetails = () =>({
  type: ADD_HACKERDETAILS,
  text: ''
})

export const actions = {
  addhackerdetails, 
}


const gethackerdetails = ({ bookmark }) => gethackerdetails.bookmark;

export const selectors = {
  gethackerdetails,
}

const initialState = {
  bookmark: [],
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_HACKERDETAILS: {
      return state;
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
