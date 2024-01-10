import { useDispatch, useSelector } from "react-redux"
import { userLogin } from "../../store/modules/authSlice";

const Login = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(userLogin({isAuth: !isAuth}))
    };

    return <div>
        {!isAuth && <button onClick={handleClick}>Login</button>}
        {isAuth && <button onClick={handleClick}>Log out</button>}
    </div>
}

export default Login