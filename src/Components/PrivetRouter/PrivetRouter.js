import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivetRouter = ({ children, ...rest }) => {

    const [loggedInUser, seLoggedInUser]= useContext(UserContext)
    // let auth = useAuth();
    return (
  

    <Route
        {...rest}
        render={({ location }) =>
        loggedInUser.email ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            )
        }
    />
    );
};

export default PrivetRouter;