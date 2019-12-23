export const getDefaultFontName = () => Platform.select({
    ios: {
        fontFamily: 'GESSTwoLight-Light',
    },
    android: {
        fontFamily: 'ArbFONTS-rabi3',
    },
});

export const url = "https://bridenight.banantec.com/api/";