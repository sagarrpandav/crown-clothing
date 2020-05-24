import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import {Route, Redirect} from 'react-router-dom';
import Header from "./components/header/header.component";
import SignInRegisterPage from "./pages/signInRegisterPage/signInRegsiterPage.component";
import {auth} from "./firebase/firebase.utils";
import {createUserProfileDocument} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";
import userReducer from "./redux/user/user.reducer";
import {render} from "react-dom";

class App extends React.Component {

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                });
                //console.log(user);
            } else {
                setCurrentUser(userAuth);
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Route exact path='/' component={Homepage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route exact path='/signin' render={() => {
                    return (this.props.currentUser ? (<Redirect to='/'/>) : (<SignInRegisterPage/>));
                }}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        ...state,
        currentUser: state.user.currentUser
    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
        setCurrentUser: (user) => {
            dispatch(setCurrentUser(user));
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
