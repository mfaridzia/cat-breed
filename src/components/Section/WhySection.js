import styled from 'styled-components';

export const WhySection = styled.div`
  background-color: black;
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 40px auto 0px;
  @media (max-width: 1300px) {
    flex-direction: column;
    height: auto;
  }
`
export const WhySectionText = styled.div`
  height: auto;
  width: 36%;
  margin-left: 150px;
  margin-top: 200px;
  @media (max-width: 1300px) {
    margin: 100px auto 100px;
    width: 80%;
  }
`
export const WhySectionLine = styled.div`
  height: 3px;
  background-color: white;
  margin-bottom: 10px;
  width: 100px;
`
export const WhySectionTitle = styled.h1`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  margin-bottom: 20px;
`
export const WhySectionDesc = styled.p`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 17px;
  line-height: 20px;
  margin-bottom: 60px;
`
export const WhySectionLink = styled.a`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`
