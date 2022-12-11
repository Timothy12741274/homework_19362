const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ReturnType<typeof loadingAC>): typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE-IS-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => ({type: 'CHANGE-IS-LOADING', isLoading} as const) // fix any