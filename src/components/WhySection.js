import styled from 'styled-components';

export const WhySection = styled.div`
  background-color: black;
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 40px auto 0px;
`
export const WhySectionText = styled.div`
  height: auto;
  width: 36%;
  margin-left: 150px;
  margin-top: 200px;
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
export const WhySectionImage = styled.div`
  height: auto;
  margin-top: 140px;
  width: 45%;
`
export const WhySectionImageCat = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  height: 0 auto;
  width: 100%;
`
export const WhySectionImageCatBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 0 auto;
  padding-left: 15px;
  position: relative;
  left: 150px;
`
export const WhySectionImageGalery = styled.img`
  border: 0px solid white;
  border-radius: 25px;
  width: ${props => props.width};
  height: ${props => props.height};
  margin-bottom: 20px;
  margin-left: ${props => props.mleft};
`
