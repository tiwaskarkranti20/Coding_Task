
import React from 'react';
import authenticate from './authenticate';


const Profile = ({ isAuthenticated }) => {
  return (
    <div>
      {isAuthenticated ? (
        <h2>Welcome to your Profile!</h2>
      ) : (
        <p> Hello  Team FW </p>
      )}
    </div>
  );
};

export default authenticate(Profile);

        