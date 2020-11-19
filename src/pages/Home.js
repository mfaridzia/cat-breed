import React, { Fragment, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import axios from 'axios';
import http from '../services/httpClient';
import cat1 from '../assets/cat1.png';
import cat2 from '../assets/cat2.png';
import cat3 from '../assets/cat3.png';
import DropdownIndicator from '../components/DropwdownIndicator';
import customStyles from '../components/CustomStyleRS';
import { Header, Title, TextDescription } from '../components/Header';
import { Footer, FooterBox, FooterText } from '../components/Footer';
import { 
  WhySection, WhySectionText, WhySectionLine,  WhySectionTitle,  WhySectionDesc, WhySectionLink,
} from "../components/WhySection";
import {
  WhySectionImage, WhySectionImageCat, WhySectionImageCatBox, WhySectionImageGalery
} from "../components/WhySectionImage";
import {
  Section, SectionTitle, Line, SectionTextWrapper, SectionSubTitle, SectionLink, ImageWrapper,
  ImageWrapperName, ImageName
} from "../components/CatSection";
import { LazyImage } from '../components/LazyImage';

const Home = () => {
  let history = useHistory();
  const [breeds, setBreeds] = useState([]);
  const [searchBreeds, setSearchBreeds] = useState('');
  const [selectedBreed, setSelectedBreed] = useState(null);

  const handleInputChange = value => setSearchBreeds(value);

  const handleSelectedValue = value => {
    setSelectedBreed(value);
    history.push(`/breed/${value?.label}`);
  }

  const loadBreedsOptions = () => {
    return http.get(`breeds/search?q=${searchBreeds}`)
      .then(breeds => {
        return breeds.data.map(breed => ({
          "label": breed.id,
          "value": breed.name
        }))
      })
  }

  useEffect(() => {
    let source = axios.CancelToken.source();
    const fetchBreeds = async () => {
      try {
        const response = await http.get("breeds", {
          cancelToken: source.token,
          params: { 
            limit: 4
          }
        });

        const getImageBreeds = data => {
          return http.get("images/search", {
            cancelToken: source.token,
            params: {  
              limit: 4,
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
        breeds.map(breed => (
          <Fragment key={breed.images}>
            <ImageWrapperName>
              { breed.data.map(item => (
                <Fragment>
                  <Link to={`/breed/${item.id}`}> 
                    <LazyImage 
                      src={breed.images} 
                      alt={item.name} 
                      width="240"
                      height="200"
                      margin="0px 18px"
                      border="1px solid #f1f1f1"
                      borderRadius="20px"
                    />
                  </Link>
                  <ImageName> {item.name} </ImageName>
                </Fragment>
              )) }
             </ImageWrapperName> 
          </Fragment>
        )
      )
    )
  }

  return (
    <Fragment>
      <Header>
        <Title> CatWiki </Title>
        <TextDescription> Get to know more about your cat breed </TextDescription>

        <AsyncSelect 
          styles={customStyles}
          cacheOptions
          noOptionsMessage={() => 'Type your cat breed..'}
          defaultOptions={false}
          placeholder="Enter your breed" 
          value={selectedBreed}
          isClearable={true}
          getOptionLabel={e => e.value}
          getOptionValue={e => e.label}
          loadOptions={loadBreedsOptions}
          onInputChange={handleInputChange}
          onChange={handleSelectedValue}
          components={{ DropdownIndicator, IndicatorSeparator:() => null }}
        />
      </Header>
      <Section>
        <SectionTitle>
          Most Searched Breeds 
          <Line />
        </SectionTitle>
      <SectionTextWrapper>

        <SectionSubTitle>
          66+ Breeds For you <br /> to discover
        </SectionSubTitle>

        <SectionLink to="/popular"> SEE MORE &#8594; </SectionLink>
      </SectionTextWrapper>

      <ImageWrapper>
        { renderCat() }
      </ImageWrapper>
      </Section>

      <WhySection>
        <WhySectionText>
          <WhySectionLine />
          <WhySectionTitle> Why should you <br /> have a cat? </WhySectionTitle>
          <WhySectionDesc>
            Having a cat around you can actually trigger the release of calming chemicals in your 
            body which lower your stress and anxiety level.
          </WhySectionDesc>
          <WhySectionLink 
            href="https://www.mentalfloss.com/article/51154/10-scientific-benefits-being-cat-owner"
          >
            READ MORE &#8594;
          </WhySectionLink>
        </WhySectionText>

        <WhySectionImage>
          <WhySectionImageCat>
            <WhySectionImageCatBox> 
              <WhySectionImageGalery 
                src={cat2} loading="lazy" alt="cat2" height="130" width="230" />
              <WhySectionImageGalery 
                src={cat1} loading="lazy" alt="cat1" height="200" width="150" mleft="80px" />
            </WhySectionImageCatBox> 
            <WhySectionImageCatBox>
              <WhySectionImageGalery 
              src={cat3} loading="lazy" alt="cat3" height="250" width="200" />
            </WhySectionImageCatBox>
          </WhySectionImageCat>
        </WhySectionImage>
      </WhySection>

      <Footer>
        <FooterBox>
          <FooterText> 
            &#169; { new Date().getFullYear() } Cat Wiki by muhfaridzia  - Devchallenge.io
          </FooterText>
        </FooterBox>
      </Footer>
    </Fragment>
  );
}

export default Home;