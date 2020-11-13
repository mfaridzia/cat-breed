import styled from 'styled-components';
import heroImage from '../assets/heroImagels.png';

export const Header = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Roboto:ital@1&display=swap');  background-image: url(${heroImage});
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-size: 100% 500px;
  height: 500px;
  width: 100%;
  background-attachment: fixed;
`
export const Title = styled.h1`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 60px;
  letter-spacing: 5px;
  margin: 150px 150px 5px;
` 
export const TextDescription = styled.p`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 25px;
  margin-left: 150px;
`