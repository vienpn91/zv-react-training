const ADD_BOOKMARK = 'hackerdetails/ADD_BOOKMARK';

const addBookmark = (idBookMark) =>({
  type: ADD_BOOKMARK,
  idBookMark
})

export const actions = {
  addBookmark, 
}


const gethackerdetails = ({ hackerDetail123 }) => hackerDetail123.bookmarkList;

export const selectors = {
  gethackerdetails,
}

const initialState = {
  bookmarkList: [],
  savepostList: [],
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_BOOKMARK: {
      const newBookmark = action.idBookMark      
      const addNewBookmark = [...state.bookmarkList, newBookmark];
      const newState = {
        ...state,
        bookmarkList: addNewBookmark
      }
      return newState;
    }
    default: return state;
  }
}
