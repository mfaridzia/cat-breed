import styled from 'styled-components';

export const ContentWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  height: auto;
  margin: 10px auto;
  width: 80%;
`
export const ContentPhoto = styled.div`
  background-color: white;
  height: auto;
  width: 35%;
  @media (max-width: 740px) {
    display: none;
  }
`
export const ContentData = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Roboto:ital@1&display=swap'); 
  background-color: white;
  height: auto;
  margin-left: auto;
  width: 55%;
  @media (max-width: 740px) {
    width: 100%;
  }
`
export const TextBold = styled.strong`
  color: black;
`
export const ContentDataTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 35px;
  margin-top: -5px;
`
export const ContentDataDesc = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  line-height: 27px;
  margin-top: -10px;
  margin-bottom: 30px;
`
export const ContentDataBox = styled.div`
  border-radius: 6px;
  height: auto;
  background-color: white;
  margin-bottom: 10px;
  width: auto;
  display: flex;
`
export const ContentLine = styled.div`
  border-radius: 10px;
  height: 8px;
  background-color: black;
  margin-top: 10px;
  margin-left: 10px;
  width: 45px;
`

export const ListPhotos = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Roboto:ital@1&display=swap'); 
  background: white;
  height: auto;
  margin: 0 auto 30px auto;
  width: 80%;
  @media (max-width: 997px) and (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 669px) and (min-width: 580px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
export const ListPhotosTitle = styled.h1`
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  width: 80%;
  padding-left: 20px;
  @media (max-width: 860px){
    font-size: 25px;
  }
  @media (max-width: 540px){
    margin-bottom: 15px;
  }
`