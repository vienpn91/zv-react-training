import { connect } from 'react-redux';
import Todo from '../../components/Todo';
import {
  actions as TodoAction,
  selectors as TodoSelector
} from '../../reducers/todo';

console.log({ TodoAction })

const mapStateToProps = (state) => ({
  todoList: TodoSelector.getCount(state),
})

const mapDispatchToProps = {   
  insertTodo: TodoAction.insertTodo,
  deleteTodo: TodoAction.deleteTodo,
  completedTodo: TodoAction.completedTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);


