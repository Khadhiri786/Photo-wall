import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions'
import Main from './Main'
import {withRouter } from 'react-router';
function mapStateToProps(state, ownProps) {
 return {
 posts: state
 }
}
function mapDispatchToProps(dispatch) {
 return bindActionCreators(actionCreators, dispatch);
}
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
export default App;