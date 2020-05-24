import React from "react";
import './signInRegsiterPage.styles.scss';
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInRegisterPage = () => {
    return(
        <div className='sign-in-and-up'>
            SIGN IN
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInRegisterPage;