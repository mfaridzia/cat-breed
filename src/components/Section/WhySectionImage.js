import styled from 'styled-components';

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
  left: 130px;
`
export const WhySectionImageGalery = styled.img`
  border: 0px solid white;
  border-radius: 25px;
  width: ${props => props.width};
  height: ${props => props.height};
  margin-bottom: 20px;
  margin-left: ${props => props.mleft};
`
