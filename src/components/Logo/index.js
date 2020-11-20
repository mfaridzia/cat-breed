import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Roboto:ital@1&display=swap'); 
  background-color: white;
  height: auto;
  width: 80%;
  margin: 0 auto;
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
export const LogoText = styled.h1`
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 3px;
`
