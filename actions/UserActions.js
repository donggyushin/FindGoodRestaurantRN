import {checkUserLoggedIn} from '../utils/Utils';

export const CHECK_USER_LOGIN = 'CHECK_USER_LOGIN';

export const checkUserLogin = () => async (dispatch) => {
  const token = await checkUserLoggedIn();
  const loggedIn = token === null ? false : true;

  console.log('token: ', token);
  console.log('loggedIn:', loggedIn);

  return dispatch({
    type: CHECK_USER_LOGIN,
    token,
    loggedIn,
  });
};
