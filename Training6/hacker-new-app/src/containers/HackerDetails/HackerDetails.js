import { connect } from 'react-redux';
import HackerDetails from '../../components/HackerDetails';
import {
  actions as detailsAction,
} from '../../reducers/hackerdetails';
import {
  selectors as detailSelector
} from '../../reducers/hackernews';

const mapStateToProps =  (state, ownProps) => {  
  return{
    isBookmark : detailSelector.gethackernews(state).includes(ownProps.hackerDetailsId.dataHackerNew),
    isSavePost : detailSelector.savePostId(state).includes(ownProps.hackerDetailsId.dataHackerNew)
  }
}

const mapDispatchToProps = {   
  // addBookmark: detailAction.addBookmark,
  deleteTodo: detailsAction.deleteTodo,
  completedTodo: detailsAction.completedTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(HackerDetails);


