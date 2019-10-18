import { connect } from 'react-redux';
import Counter from '../../components/Counter';
import {
  actions as CounterAction,
  selectors as CounterSelector
} from '../../reducers/counter';

const mapStateToProps = state => ({
  count: CounterSelector.getCount(state),
  // count: 'CounterSelector.getCount(state)',
})

const mapDispatchToProps = {
  increase: CounterAction.increase,
  decrease: CounterAction.decrease,
  reset: CounterAction.reset,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
