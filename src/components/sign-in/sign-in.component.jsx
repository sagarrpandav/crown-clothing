import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState((prevState) => {
            return ({...prevState, [name]: value})
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' label='email' type='email' value={this.state.email}
                               handleChange={this.handleChange} required/>
                    <FormInput name='password' label='password' type='password' value={this.state.password}
                               handleChange={this.handleChange} required/>
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;