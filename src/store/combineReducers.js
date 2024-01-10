
import userSlice from './modules/userslice/userSlice';
import authSlice from './modules/authSlice'

const rootReducer = {
  user: userSlice,
  auth: authSlice,
};

export default rootReducer;