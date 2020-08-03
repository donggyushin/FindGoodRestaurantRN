import {CHECK_USER_LOGIN} from '../actions/UserActions';

const initialState = {
  loading: true,
  userToken: '',
  loggedIn: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USER_LOGIN:
      const {token, loggedIn} = action;
      return {
        ...state,
        loading: false,
        userToken: token,
        loggedIn,
      };

    default:
      return state;
  }
};

export default UserReducer;
