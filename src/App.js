import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import {Route} from 'react-router-dom';
import Header from "./components/header/header.component";
import SignInRegisterPage from "./pages/signInRegisterPage/signInRegsiterPage.component";
import {auth} from "./firebase/firebase.utils";
import {createUserProfileDocument} from "./firebase/firebase.utils";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    this.setState(prevState => {
                        return {
                            ...prevState,
                            currentUser: {
                                id: snapshot.id,
                                ...snapshot.data()
                            }
                        }
                    });
                });
                //console.log(user);
            } else {
                this.setState(prevState => {
                    return ({
                            ...prevState,
                            currentUser: userAuth
                        }
                    );
                })
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Route exact path='/' component={Homepage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/signin' component={SignInRegisterPage}/>
            </div>
        )
    }
}

export default App;
