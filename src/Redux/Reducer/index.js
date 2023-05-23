import {combineReducers} from 'redux'
// import amount from './Counter';
import swtichMode from './DarkMode'
import modifyNotes from './Noteevent'



const reducer = combineReducers({
    modifyNotes : modifyNotes,
    swtichMode:swtichMode,
   
})
export default reducer