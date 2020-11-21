import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowSquareLeft } from 'phosphor-react';
import Taken404 from '../assets/taken404.svg';

const Box = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Roboto:ital@1&display=swap'); 
  background: white;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
`
const BackLink = styled(Link)`
  background: black;
  border-radius: 10px;
  color: white;
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
  margin: 0 auto;
  padding: 15px;
  position: relative;
  top: 470px;
  right: 100px;
  text-decoration: none;
`
const Text = styled.span`
  color: white;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  top: -5px;
`
const Image = styled.img`
  width: 400px;
  margin: 30px auto;
`

const NotFound = () => {
  return (
    <Box>
      <BackLink to="/">
        <ArrowSquareLeft size={27} /> 
        <Text> Oopss, Back to Homepage  </Text>
       </BackLink>
      <Image src={Taken404} alt="404" />
    </Box>
  );
}

export default NotFound;