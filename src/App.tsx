import firebase from 'firebase';
import React from 'react';
import styled from '@emotion/styled';

import './index.css';

function App() {
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log('onAuthChanged START');
      console.log(user);
      console.log('onAuthChanged END');
    });
  }, []);

  React.useEffect(() => {
    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        console.log('CREDENTIAL CREDENTIAL CREDENTIAL');
        console.log(result.credential);
        console.log('USER USER USER');
        console.log(result.user);
        console.log('ADDITIONAL INFO ADDITIONAL INFO ADDITIONAL INFO');
        console.log(result.additionalUserInfo);
        console.log('OPERATION TYPE OPERATION TYPE OPERATION TYPE');
        console.log(result.operationType);
      });
  }, []);

  const onGoogleLoginClick = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  const onFBLoginClick = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  return (
    <Div>
      <Button onClick={onGoogleLoginClick}>구글 로그인</Button>
      <Button onClick={onFBLoginClick}>페이스북 로그인</Button>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  margin: 10px;
  width: 100vw;
  height: 50px;
  border: none;
  background-color: ghostwhite;
`;

export default App;
