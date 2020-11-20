import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { LogoWrapper, LogoLink, LogoText } from '../components/Logo';
import Container from '../components/Wrapper/Container';
import { LazyImage } from '../components/LazyImage';
import useFetchBreeds from '../hooks/useFetchBreeds';
import { Box, Title, ContentWrapper, ContentPhoto, 
  ContentText, ContentTitle, ContentDesc } from '../components/Content/ContentPopular';

const PopularBreed = () => {
  const [breeds] = useFetchBreeds(10);

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