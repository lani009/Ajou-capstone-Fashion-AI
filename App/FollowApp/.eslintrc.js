module.exports = {
    root: true,
    extends: '@react-native-community',
    lintonsave: false, // 삭제 해야함.
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
