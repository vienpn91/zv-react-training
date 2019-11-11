
const HACKERDETAIL_ADDBOOKMARK = 'hackerdetails/ADDBOOKMARK';
const HACKERDETAIL_SAVEPOST = 'hackerdetails/ADDSAVEPOST';

const addBookmark = (postId = 1) => ({
  type: HACKERDETAIL_ADDBOOKMARK,
  postId,
});
const addSavePost = (postId = 1) =>({
  type: HACKERDETAIL_SAVEPOST,
  postId,
})

export const actions ={
  addBookmark,
  addSavePost
}
// GET STATE FROM REDUX
const getHackerBookmark = ({ hackerdetailsroot }) => {
  console.log( hackerdetailsroot.dataHackerBookmark );
  return hackerdetailsroot.dataHackerBookmark;
}
const getHackerSave = ({ hackerdetailsroot }) => {
  return hackerdetailsroot.dataHackerSave;
}

export const selectors = {
  getHackerBookmark,
  getHackerSave
}
const initialState = {
  dataHackerBookmark: [],
  dataHackerSave: [],
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case HACKERDETAIL_ADDBOOKMARK: {
      const { postId } = action
      const addBookmark = [...state.dataHackerBookmark, postId ];
      const newState = { ...state,dataHackerBookmark:addBookmark}
      return newState;
    } 
    case HACKERDETAIL_SAVEPOST: {
      const { postId } = action
      const savePost = [...state.dataHackerSave, postId ];
      const newState = { ...state,dataHackerSave:savePost}
      return newState;
    }    
    default: return state;
  }
}
