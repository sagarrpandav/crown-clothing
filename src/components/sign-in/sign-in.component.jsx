import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";
import {signInWithPhone} from "../../firebase/firebase.utils";

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

    handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState(prevState => {
                return( {
                    ...prevState,
                    email: '',
                    password: ''
                });
            })
        }
        catch (e) {
            console.log(e);
        }
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
                        <div id="recaptcha-container"></div>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton type='button' isGoogleSignIn={true} onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;