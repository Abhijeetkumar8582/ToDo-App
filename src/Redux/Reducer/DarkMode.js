const initialValue = 'Enable Dark Mode';

const swtichMode =(state = initialValue,action)=>{
    if(action.type === 'darkmode'){
        return state = 'Enable Light Mode'
    }
    else if(action.type === 'lightmode'){
        return state = 'Enable Dark Mode'
    }
    else{
        return state
    }
}

export default swtichMode;