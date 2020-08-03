import React, {useEffect} from 'react';
import LoadingScreen from './LoadingScreen';
import {useDispatch, useSelector} from 'react-redux';
import {checkUserLogin} from '../actions/UserActions';
import LoggedInScreen from './LoggedInScreen';
import LoggedOutScreen from './LoggedOutScreen';

const RootScreen = () => {
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.UserReducer);

  useEffect(() => {
    setTimeout(() => {
      callCheckUserLogin();
    }, 1500);
  }, []);

  const callCheckUserLogin = () => {
    dispatch(checkUserLogin());
  };

  if (userReducer.loading) {
    return <LoadingScreen />;
  } else if (userReducer.loggedIn) {
    return <LoggedInScreen />;
  } else {
    return <LoggedOutScreen />;
  }
};

export default RootScreen;
