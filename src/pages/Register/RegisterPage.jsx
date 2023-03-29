import { useDispatch, useSelector } from "react-redux";
import { signup } from "redux/auth/auth-operations";
import RegisterForm from "features/RegisterForm/RegisterForm";
import { isUserLogin } from "redux/auth/auth-selector";
import { Navigate } from "react-router-dom";
import { paths } from "paths";

export const Register = () => {

    const isLogin = useSelector(isUserLogin);

    const dispatch = useDispatch();

    const handleSignup = (data) => {
        console.log(data);
        dispatch(signup(data));
    }

    if (isLogin) {
        return <Navigate to={paths.main} />
    }
    
    return (
        <div>
            <RegisterForm onSubmit={handleSignup} />
        </div>
    )

}