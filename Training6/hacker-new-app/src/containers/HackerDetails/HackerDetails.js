import { connect } from 'react-redux';
import HackerDetails from '../../components/HackerDetails';
import {
  actions as HackerDetailAction,
  selectors as GetHackerDetailSelector
} from '../../reducers/hackerdetails';

const mapStateToProps = (state, ownProps) => {
  return {
    dataHackerBookmark: GetHackerDetailSelector.getHackerBookmark(state),
    dataHackerSave: GetHackerDetailSelector.getHackerSave(state),
    isBookmark : GetHackerDetailSelector.getHackerBookmark(state).includes(ownProps.hackerDetailsId.dataHackerNew),
    isSavePost : GetHackerDetailSelector.getHackerBookmark(state).includes(ownProps.hackerDetailsId.dataHackerNew)
  }
}

const mapDispatchToProps = {
  handleBookmark : HackerDetailAction.addBookmark,
  handleSavePost : HackerDetailAction.addSavePost,
}

export default connect(mapStateToProps,mapDispatchToProps)(HackerDetails);
