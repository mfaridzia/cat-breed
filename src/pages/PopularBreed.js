import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import http from '../services/httpClient';
import styled from 'styled-components';
import { LogoWrapper, LogoLink, LogoText } from '../components/Logo';
import Container from '../components/Container';
import { LazyImage } from '../components/LazyImage';

const Box = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Roboto:ital@1&display=swap'); 
  background-color: whute;
  font-family: 'Montserrat', sans-serif;
  height: auto;
  margin: 30px auto;
  width: 80%;
`
const Title = styled.h1`
  color: black;
  font-size: 27px;
  margin-bottom: 50px;
`
const ContentWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  margin-bottom: 0px;
`
const ContentPhoto = styled.div`
  background-color: white;
  height: auto;
  width: 30%;
  margin-bottom: 40px;
`
const ContentText = styled.div`
  background-color: white;
  height: 150px;
  margin-left: auto;
  width: 65%;
`
const ContentTitle = styled.h2`
  color: black;
  margin-top: 0px;
`
const ContentDesc = styled.p`
  color: black;
  font-size: 18px;
  line-height: 25px;
`

const PopularBreed = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    let source = axios.CancelToken.source();
    const fetchBreeds = async () => {
      try {
        const response = await http.get("breeds", {
          cancelToken: source.token,
          params: { 
            limit: 10
          }
        });

        const getImageBreeds = data => {
          return http.get("images/search", {
            cancelToken: source.token,
            params: {  
              limit: 10,
              mime_types: ['png', 'jpg'],
              breed_id: data.id
            }
          });
        }

        const iterateImagesCatBreeds = response.data.map(getImageBreeds);
        const imagesCatBreeds = await Promise.all(iterateImagesCatBreeds);
        const resultImagesCatBreeds = imagesCatBreeds.map(item => item.data);
        const processCatDataBreeds = resultImagesCatBreeds.map(breed => ({
          data: breed[0].breeds,
          images: breed[0].url
        }));

        setBreeds(processCatDataBreeds);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('cancelled');
        } else {
          throw error;
        }
      }
    };
    fetchBreeds();

    return () => {
      source.cancel();
    }
  }, []);

  const renderCat = () => {
    return (
        breeds.map((breed, index) => (
          <Fragment key={breed.images}>
            <ContentWrapper>
              { breed.data.map(item => (
                <Fragment>
                  <ContentPhoto>
                    <Link to={`/breed/${item.id}`}> 
                      <LazyImage 
                        src={breed.images} 
                        alt={item.name} 
                        width="280"
                        height="230"
                        margin="0px 0px"
                        border="1px solid #f1f1f1"
                        borderRadius="20px"
                      />
                    </Link>
                  </ContentPhoto>
                  <ContentText> 
                    <ContentTitle> {index+1}. {item.name} </ContentTitle>
                    <ContentDesc> {item.description} </ContentDesc>
                  </ContentText>
                </Fragment>
              )) }
             </ContentWrapper> 
          </Fragment>
        )
      )
    )
  }
  
  return (
    <Container>
      <LogoWrapper>
        <LogoLink to="/">
          <LogoText> [CATWIKI] </LogoText>
        </LogoLink>
      </LogoWrapper>
      <Box>
        <Title> Top 10 most searched Breeds </Title>
        { renderCat() }
      </Box>
    </Container>
  );
}

export default PopularBreed;