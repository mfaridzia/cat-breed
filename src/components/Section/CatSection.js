import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  background-color: white;
  height: auto;
  width: 100%;
`
export const SectionTitle = styled.h2`
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin-left: 150px;
  margin-top: 40px;
  @media (max-width: 860px) {
    margin-left: 0px;
    text-align: center;
    font-size: 30px;
  }
  @media (max-width: 640px) {
    font-size: 25px;
  }
`
export const Line = styled.div`
  background-color: black;
  height: 3px;
  width: 50px;
  @media (max-width: 860px) {
    width: 200px;
    margin: 0 auto;
  }
`
export const SectionTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: auto;
  margin: 0 auto;
  @media (max-width: 860px) {
    width: 70%;
    flex-direction: column;
  }
`
export const SectionLink = styled(Link)`
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  margin-left: auto;
  margin-top: auto;
  text-decoration: none;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`
export const SectionSubTitle = styled.h1`
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-size: 35px;
  letter-spacing: 0px;
  margin-top: 20px;
  margin-left: 15px;
  @media (max-width: 860px) {
    font-size: 25px;
    display: none;
  }
`
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 80%;
  height: 200px;
  margin: 30px auto 100px;
  @media (max-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: auto;
    margin: 10px auto 50px;
  }
  @media (max-width: 940px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: auto;
    margin: 10px auto 50px;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: auto;
    margin: 10px auto 50px;
  }
  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: auto;
    margin: 10px auto 50px;
  }
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
    height: auto;
    margin: 10px auto 50px;
  }
`
export const ImageWrapperName = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
`
export const ImageName = styled.p`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 500;
  margin: 10px auto;
`