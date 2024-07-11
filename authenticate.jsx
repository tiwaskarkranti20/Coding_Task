import React from 'react';


const authenticate = () => {
 
  return localStorage.getItem('isLoggedIn') === 'true'; 
};

const withAuthentication = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      
      return <WrappedComponent {...this.props} isAuthenticated={authenticate()} />;
    }
  };
};

export default withAuthentication;
