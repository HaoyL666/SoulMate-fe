import LoginForm from "../components/auth/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { errorReducer } from "../reducers/userReducer";

export default function Login() {
    // const dispatch = useDispatch();
    // const user = useSelector((state) => state.user);
    // if (user.error) {
    //     dispatch(errorReducer({ type: "RESET_ERROR" }))
    // }

    return (
        <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
            {/*Container*/}
            <div className="flex w-[1600px] mx-auto h-full">
                {/*Login Form */}
                <LoginForm />
            </div>
        </div>
    );
}