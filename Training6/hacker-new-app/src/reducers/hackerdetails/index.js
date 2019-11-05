const ADD_HACKERDETAILS = 'hackerdetails/ADD_HACKERDETAILS';

const addhackerdetails = () =>({
  type: ADD_HACKERDETAILS,
  text: ''
})

export const actions = {
  addhackerdetails, 
}


const gethackerdetails = ({ hackerDetail123 }) => hackerDetail123.bookmarkId;

export const selectors = {
  gethackerdetails,
}

const initialState = {
  bookmarkId: [{abc: 'vienpn'}],
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_HACKERDETAILS: {
      return state;
    }
    default: return state;
  }
}
