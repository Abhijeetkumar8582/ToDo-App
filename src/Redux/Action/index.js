export const Increment = (amount = 0) => {
    return {
        type: "increment",
        payload: amount
    }
}

export const Decrement = (amount = 0) => {
    return {
        type: "decrement",
        payload: amount
    }
}

export const DarkMode = () => {
    return {
        type: 'darkmode'
    }
}

export const LightMode = () => {
    return {
        type: 'lightmode'
    }
}

export const ADDTONOTE = (note) => {
    return {
        type: 'addtoNote',
        payload: {
            id: new Date(),
            note: note
        }
    }
}

export const REMOVETONOTE = (id) => {
    return {
        type: 'removetoNote',
        payload: id
    }
}