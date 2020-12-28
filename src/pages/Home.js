import React, { lazy, Suspense, Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import http from '../services/api';
import cat1 from '../assets/cat1.png';
import cat1_webp from '../assets/cat1.webp';
import cat2 from '../assets/cat2.png';
import cat2_webp from '../assets/cat2.webp';
import cat3 from '../assets/cat3.png';
import cat3_webp from '../assets/cat3.webp';
import DropdownIndicator from '../components/Custom/DropwdownIndicator';
import { Header, Title, TextDescription } from '../components/Header';
import { Footer, FooterBox, FooterText } from '../components/Footer';
import { 
  WhySection, WhySectionText, WhySectionLine,  WhySectionTitle,  WhySectionDesc, WhySectionLink,
} from "../components/Section/WhySection";
import {
  WhySectionImage, WhySectionImageCat, WhySectionImageCatBox, WhySectionImageGalery
} from "../components/Section/WhySectionImage";
import {
  Section, SectionTitle, Line, SectionTextWrapper, SectionSubTitle, SectionLink, ImageWrapper
} from "../components/Section/CatSection";
//import CustomAsyncSelect from '../components/Custom/CustomAsyncSelect';
import useFetchBreeds from '../hooks/useFetchBreeds';
const CustomAsyncSelect = lazy(() => import('../components/Custom/CustomAsyncSelect'));
const RenderCat = lazy(() => import('../components/RenderCat/RenderCat'));

const Home = () => {
  let history = useHistory();
  const [searchBreeds, setSearchBreeds] = useState('');
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [breeds] = useFetchBreeds(4);

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

  return (
    <Fragment>
      <Header>
        <Title> CatWiki </Title>
        <TextDescription data-testid="text-decsription"> 
          Get to know more about your cat breed 
        </TextDescription>

        <CustomAsyncSelect 
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

        <SectionLink to="/popular" data-testid="see-more"> 
          SEE MORE &#8594;
        </SectionLink>
      </SectionTextWrapper>

      <ImageWrapper>
        <Suspense fallback={<>Loading</>}> 
          <RenderCat breeds={breeds} />
        </Suspense>
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
                src={cat2_webp} 
                loading="lazy" 
                alt="cat2" 
                height="130" 
                width="230"
                fallback={cat2}
              />
              <WhySectionImageGalery 
                src={cat1_webp} 
                loading="lazy" 
                alt="cat1" 
                height="200" 
                width="150" 
                mleft="80px" 
                fallback={cat1}
              />
            </WhySectionImageCatBox> 
            <WhySectionImageCatBox>
              <WhySectionImageGalery 
                src={cat3_webp} 
                loading="lazy" 
                alt="cat3" 
                height="250" 
                width="200" 
                fallback={cat3}
              />
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