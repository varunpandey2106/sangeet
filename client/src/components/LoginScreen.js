import React from 'react';
import styled from 'styled-components/macro';
import { theme, mixins, Main } from '../styles';
import { loginUrl } from '../spotify';


const { colors, fontSizes } = theme;

const Login = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
  min-height: 100vh;
  h1 {
    font-size: ${fontSizes.xxl};
  }
`;



const LoginButton = styled.a`
  display: inline-block;
  background-color: ${colors.green};
  color: ${colors.white};
  border-radius: 100px;
  padding: 17px 35px;
  margin: 20px 0 70px;
  min-width: 160px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  &:hover,
  &:focus {
    background-color: ${colors.offGreen};
  }
`;

const LoginScreen = () => (
  <Login>
    <h1>Sangeet</h1>
    {/* Use the loginUrl imported from the spotify file */}
    <LoginButton href={loginUrl}>Log in to Spotify</LoginButton>
  </Login>
);

export default LoginScreen;
