import { connect } from 'react-redux';
import HackerDetails from '../../components/HackerDetails';
import {
  actions as detailAction,
  selectors as detailSelector
} from '../../reducers/hackerdetails';
console.log('---detail action ---');
console.log({ detailAction })
console.log('---detail end action ---');

const mapStateToProps = (state) => ({
  bookmarkId: detailSelector.gethackerdetails(state),
})

const mapDispatchToProps = {   
  insertTodo: detailAction.insertTodo,
  deleteTodo: detailAction.deleteTodo,
  completedTodo: detailAction.completedTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(HackerDetails);


