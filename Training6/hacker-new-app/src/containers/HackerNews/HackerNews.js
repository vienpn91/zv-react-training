import { connect } from 'react-redux';
import HackerNews from '../../components/HackerNews';
import {
  actions as detailAction,
  selectors as detailSelector
} from '../../reducers/hackernews';


const mapStateToProps = (state) => ({
  bookmarkId: detailSelector.gethackernews(state),
})

const mapDispatchToProps = {   
  addBookmark: detailAction.addBookmark,
  deleteTodo: detailAction.deleteTodo,
  completedTodo: detailAction.completedTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(HackerNews);


