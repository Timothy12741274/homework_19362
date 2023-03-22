const CHANGE_THEME = "CHANGE_THEME"

type initialStateType = {
    theme: string
}
const initState = {
    theme: ''
};


export const themeReducer = (state = initState, action: ThemeActionType): initialStateType => {
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

type ThemeActionType = {
    type: "CHANGE_THEME",
    theme: string
}

export const changeThemeC = (theme: string): ThemeActionType => ({
    type: CHANGE_THEME,
    theme
});