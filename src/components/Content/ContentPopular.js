import styled from 'styled-components';

export const Box = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Roboto:ital@1&display=swap'); 
  background-color: whute;
  font-family: 'Montserrat', sans-serif;
  height: auto;
  margin: 30px auto;
  width: 80%;
`
export const Title = styled.h1`
  color: black;
  font-size: 27px;
  margin-bottom: 50px;
`
export const ContentWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  margin-bottom: 0px;
  @media (max-width: 1200px) {
   flex-direction: column-reverse;
  }
`
export const ContentPhoto = styled.div`
  background-color: white;
  height: auto;
  width: 30%;
  margin-bottom: 40px;
  @media (max-width: 1200px) {
   margin-bottom: 40px;
   width: 100%;
  }
`
export const ContentText = styled.div`
  background-color: white;
  height: 150px;
  margin-left: auto;
  width: 65%;
  @media (max-width: 1200px) {
   height: auto;
   margin-left: 0px;
   width: 100%;
  }
`
export const ContentTitle = styled.h2`
  color: black;
  margin-top: 0px;
`
export const ContentDesc = styled.p`
  color: black;
  font-size: 18px;
  line-height: 25px;
`