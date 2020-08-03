import AsyncStorage from '@react-native-community/async-storage';
export const checkUserLoggedIn = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    return value;
  } catch (error) {
    return null;
  }
};
