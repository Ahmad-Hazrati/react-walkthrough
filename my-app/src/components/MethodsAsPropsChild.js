import React, { Component } from 'react'

export class MethodsAsPropsChild extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    // handleSignIn = () => {
    //     this.setState({
    //         isLoggedIn: true
    //     })
    //     console.log(this)
    // }

    // handleSignOut = () => {
    //     this.setState({
    //         isLoggedIn: false
    //     })
    //     console.log(this)
    // }

    // Single method that handles both SignIn and SignOut
    toggleIsLoggedIn = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn,
        }));
    };

    render() {
        return (
            <div>
                {
                    this.state.isLoggedIn ? (
                        <div>
                            <p>Welcome to the site! Please complete the steps below:</p>
                            <ol>
                                <li>Confirm your email</li>
                                <li>Complete your profile</li>
                                <li>Subscribe to the newsletter</li>
                            </ol>
                            <button onClick={this.toggleIsLoggedIn}>Sign out</button>
                        </div>
                    ) : (
                        <div>
                            <p>Please sign in</p>
                            <button onClick={this.toggleIsLoggedIn}>Sign in</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default MethodsAsPropsChild


// import React from 'react'
// function MethodsAsPropsChild(props) {
//   return (
//     <div>
//         {
//                 props.isLoggedIn ? (
//                     <div>
//                         <p>Welcome to the site! Please complete the steps below:</p>
//                         <ol>
//                             <li>Confirm your email</li>
//                             <li>Complete your profile</li>
//                             <li>Subscribe to the newsletter</li>
//                         </ol>
//                     <button onClick={props.toggleIsLoggedIn}>Sign out</button>

//                     </div>
//                 ) : (
//                     <div>
//                     <p>Please sign in</p>
//                     <button onClick={props.toggleIsLoggedIn}>Sign in</button>
//                     </div>
//                 )
//             }
//     </div>
//   )
// }

// export default MethodsAsPropsChild