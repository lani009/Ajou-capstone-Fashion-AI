const colors = {
    white: '#ffffff',
    black: '#000000',
    grey_0: '#d5d5d5',
    grey_1: '#a6a6a6',
    red: '#e84118',
    blue: '#3679fe',
};

export const theme = {
    background: colors.white,
    text: colors.black,
    errorText: colors.red,
    testColor: colors.black,

    Button: {
        color: colors.white,
        background: colors.blue,
        title: colors.white,
        unfilledTitle: colors.blue,
        logout: colors.red,
    },

    Input: {
        label: colors.grey_1,
        placeholder: colors.grey_1,
        border: colors.grey_1,
        disabledBackground: colors.grey_0,
    },
};
