import styled from 'styled-components';

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
`
export const Line = styled.div`
background-color: black;
height: 3px;
width: 60px;
`
export const SectionTextWrapper = styled.div`
display: flex;
flex-direction: row;
width: 80%;
height: auto;
margin: 0 auto;
`
export const SectionSubTitle = styled.h1`
color: black;
font-family: 'Montserrat', sans-serif;
font-size: 35px;
letter-spacing: 0px;
margin-top: 20px;
margin-left: 15px;
`
export const SectionLink = styled.a`
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
export const ImageWrapper = styled.div`
display: flex;
flex-direction: row;
background-color: white;
width: 80%;
height: 200px;
margin: 30px auto 100px;
`
export const Image = styled.img`
width: 240px;
height: 200px;
margin: 0 18px;
border-radius: 20px;
border: 1px solid #f1f1f1;
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