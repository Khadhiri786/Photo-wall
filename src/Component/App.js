import Main from './Main';
import {connect} from 'react-redux'


const mapStateToProps=(state)=>{
    return{
        posts:state
    }
}
const App =connect(mapStateToProps)(Main)

export default App;