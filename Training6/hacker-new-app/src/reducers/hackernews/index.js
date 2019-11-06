const ADD_BOOKMARK = 'hackernews/ADD_BOOKMARK';

const addBookmark = (idBookMark) =>({
  type: ADD_BOOKMARK,
  idBookMark
})

export const actions = {
  addBookmark, 
}


const gethackernews = ({ hackerNews123 }) => hackerNews123.bookmarkList;

export const selectors = {
  gethackernews,
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
