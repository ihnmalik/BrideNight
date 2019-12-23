export const getDefaultFontName = () => Platform.select({
    ios: {
        fontFamily: 'GESSTwoLight-Light',
    },
    android: {
        fontFamily: 'ArbFONTS-rabi3',
    },
});

export const url = "https://bridenight.banantec.com/api/";

export const API_URL = (urlName = null, data = {} ) => {
    const URLS = {
        refreshToken: "auth/refresh-token",
    };

    return urlName in URLS ? URLS[urlName] : "";
};