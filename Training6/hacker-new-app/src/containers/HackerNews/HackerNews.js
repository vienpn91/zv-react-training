import { connect } from 'react-redux';
import HackerNews from '../../components/HackerNews';
import {
  selectors as GetHackerNewSelector
} from '../../reducers/hackernews';

const mapStateToProps = (state) => ({
  dataHackerNew: GetHackerNewSelector.getHackerNews(state),
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps,null)(HackerNews);
