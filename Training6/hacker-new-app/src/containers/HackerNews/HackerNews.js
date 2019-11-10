import { connect } from 'react-redux';
import HackerNews from '../../components/HackerNews';
import {
  actions as detailAction,
  selectors as detailSelector
} from '../../reducers/hackernews';


const mapStateToProps = (state) => ({
  bookmarkId: detailSelector.gethackernews(state),
  savePostId: detailSelector.savePostId(state),
})

const mapDispatchToProps = {   
  addBookmark: detailAction.addBookmark,
  savePosts: detailAction.savePosts,
  deleteTodo: detailAction.deleteTodo,
  completedTodo: detailAction.completedTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(HackerNews);


