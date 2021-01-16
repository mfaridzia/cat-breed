import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import http from '../services/api';
import Container from '../components/Wrapper/Container';
import { LazyImage } from '../components/LazyImage';
import { LogoWrapper, LogoLink, LogoText } from '../components/Logo';
import Spinner from '../components/Loading/Spinner';
import { ContentWrapper, ContentPhoto, ContentData, TextBold, 
  ContentDataTitle, ContentDataDesc, ContentDataBox, ContentLine, 
  ListPhotos, ListPhotosTitle } from '../components/Content/ContentDetailBreed';

const Breed = () => {
  const { id } = useParams();
  
  const fetchBreeds = async () => {
    try {
      const response = await http.get("images/search", {
        params: {  
          limit: 8,
          mime_types: ['png', 'jpg'],
          breed_id: id
        }
      });

      const processCatDataBreeds = response.data.map(breed => ({
        data: breed.breeds,
        images: breed.url
      }));
      return processCatDataBreeds;
    } catch (error) {
     throw error;
    }
  }

  const { data: catBreed, isFetching } = useQuery('breed', fetchBreeds);

  const renderCat = () => {
    return (
      catBreed.map(breed => (
        <Fragment>
          <LazyImage 
            key={breed.images}
            src={breed.images} 
            alt={id} 
            width="240"
            height="200"
            margin="10px 10px"
            border="1px solid #f1f1f1"
            borderRadius="20px"
          />
        </Fragment>
      )
    ))
  }

  const renderScore = (data) => {
    let lines = []
    for(let i = 0; i < data; i++) {
      lines.push(<ContentLine />)
    }
    return lines;
  }

  return (
    <Container>
      { !isFetching ? (
         <Fragment>
          <LogoWrapper>
            <LogoLink to="/"> 
              <LogoText> [CATWIKI] </LogoText> 
            </LogoLink>
          </LogoWrapper> 
          <ContentWrapper> 
            <ContentPhoto> 
              <LazyImage 
                src={catBreed[0].images} 
                width="400px" 
                height="280px" alt={id} 
                borderRadius="30px"
            />
            </ContentPhoto>
            <ContentData> 
              <ContentDataTitle> { catBreed[0]?.data[0].name } </ContentDataTitle> 
              <ContentDataDesc> { catBreed[0]?.data[0].description } </ContentDataDesc>
              <ContentDataDesc> 
                <TextBold> Temperament: </TextBold> 
                { catBreed[0]?.data[0].temperament } 
              </ContentDataDesc>
              <ContentDataDesc> 
                <TextBold> Origin: </TextBold> 
                { catBreed[0]?.data[0].origin } 
              </ContentDataDesc>
              <ContentDataDesc> 
                <TextBold> Life Span: </TextBold> 
                { catBreed[0]?.data[0].life_span } 
              </ContentDataDesc>
              <ContentDataDesc> 
                <ContentDataBox>
                  <TextBold> Adaptability: </TextBold> 
                  { renderScore(catBreed[0]?.data[0].adaptability) }
                </ContentDataBox>
              </ContentDataDesc>
              <ContentDataDesc> 
                <ContentDataBox>
                  <TextBold> Affection level: </TextBold> 
                  { renderScore(catBreed[0]?.data[0].affection_level) }
                </ContentDataBox>
              </ContentDataDesc>
              <ContentDataDesc> 
                <ContentDataBox>
                  <TextBold> Child friendly: </TextBold> 
                  { renderScore(catBreed[0]?.data[0].child_friendly) }
                </ContentDataBox>
              </ContentDataDesc>
              <ContentDataDesc> 
                <ContentDataBox>
                  <TextBold> Energy level: </TextBold> 
                  { renderScore(catBreed[0]?.data[0].energy_level) }
                </ContentDataBox>
              </ContentDataDesc>
              <ContentDataDesc> 
                <ContentDataBox>
                  <TextBold> Intelligence: </TextBold> 
                  { renderScore(catBreed[0]?.data[0].intelligence) }
                </ContentDataBox>
              </ContentDataDesc>
              <ContentDataDesc> 
                <ContentDataBox>
                  <TextBold> Health issues: </TextBold> 
                  { renderScore(catBreed[0]?.data[0].health_issues) }
                </ContentDataBox>
              </ContentDataDesc>
              <ContentDataDesc> 
                <ContentDataBox>
                  <TextBold> Social needs: </TextBold> 
                  { renderScore(catBreed[0]?.data[0].social_needs) }
                </ContentDataBox>
              </ContentDataDesc>
              <ContentDataDesc> 
                <ContentDataBox>
                  <TextBold> Stranger friendly: </TextBold> 
                  { renderScore(catBreed[0]?.data[0].stranger_friendly) }
                </ContentDataBox>
              </ContentDataDesc>
            </ContentData>
          </ContentWrapper>
          <ListPhotosTitle>
              Other Photos 
          </ListPhotosTitle>
          <ListPhotos>
           { renderCat() }
          </ListPhotos>
         </Fragment>
      ) : <Spinner />
      }
    </Container>
  );
}

export default Breed;