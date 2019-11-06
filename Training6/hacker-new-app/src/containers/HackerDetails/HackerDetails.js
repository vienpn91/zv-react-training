import { connect } from 'react-redux';
import HackerDetails from '../../components/HackerDetails';
import {
  actions as detailAction,
  selectors as detailSelector
} from '../../reducers/hackerdetails';


const mapStateToProps = (state) => ({
  bookmarkId: detailSelector.gethackerdetails(state),
})

const mapDispatchToProps = {   
  // addBookmark: detailAction.addBookmark,
  deleteTodo: detailAction.deleteTodo,
  completedTodo: detailAction.completedTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(HackerDetails);


