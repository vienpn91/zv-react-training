const ADD_BOOKMARK = 'hackernews/ADD_BOOKMARK';
const SAVE_POST = 'hackernews/SAVE_POST';

const addBookmark = (idBookMark) =>({
  type: ADD_BOOKMARK,
  idBookMark
})
const savePosts = (idPost) =>({
  type: SAVE_POST,
  idPost
})

export const actions = {
  addBookmark,
  savePosts 
}


const gethackernews = ({ hackerNews123 }) => hackerNews123.bookmarkList;
const savePostId = ({ hackerNews123 }) => hackerNews123.savepostList;
export const selectors = {
  gethackernews,
  savePostId,
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
    case SAVE_POST: {
      const newidPost = action.idPost      
      const addNewidPost = [...state.savepostList, newidPost];
      const newState = {
        ...state,
        savepostList: addNewidPost
      }
      return newState;
    }
    default: return state;
  }
}
