import {bindActionCreators} from "redux";
import {setLocale} from "../redux/actions/languageAction";
import {logIn, logOut} from "../redux/actions/authAction";

export const mapStateToProps = ({language, auth}) => {
    return  {
        language,
        auth,
    };
};

export const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setLocale,
        logIn,
        logOut
    }, dispatch)
};