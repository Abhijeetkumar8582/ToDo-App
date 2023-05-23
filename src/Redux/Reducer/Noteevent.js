const initialValue = {
    list: []
}

const modifyNotes = (state = initialValue, action) => {
    switch (action.type) {
        case 'addtoNote': 
            const { id, note } = action.payload
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        note: note
                    }
                ]
            }
        case 'removetoNote':
            const removeElement = state.list.filter(element=>action.payload!==element.id)
            return {
                ...state,
                list:removeElement
            }
        
        default :
        return state;
    }
}

export default modifyNotes;