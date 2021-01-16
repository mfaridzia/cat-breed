import React, { lazy, Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
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
import RenderCat from '../components/RenderCat/RenderCat';
import Spinner from '../components/Loading/Spinner';
const CustomAsyncSelect = lazy(() => import('../components/Custom/CustomAsyncSelect'));

const Home = () => {
  let history = useHistory();

  const fetchBreeds = async () => {
    try {
      const response = await http.get("breeds", {
        params: { 
          limit: 4
        }
      });

      const getImageBreeds = data => {
        return http.get("images/search", {
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
      return processCatDataBreeds;
    } catch (error) {
      throw error;
    }
  }

  const { data, isLoading } = useQuery('breeds', fetchBreeds, { staleTime: 1000 })

  const [searchBreeds, setSearchBreeds] = useState('');
  const [selectedBreed, setSelectedBreed] = useState(null);

  const handleInputChange = value => setSearchBreeds(value);

  const handleSelectedValue = value => {
    setSelectedBreed(value);
    history.push(`/breed/${value?.label}`);
  }

  const loadBreedsOptions = () => {
    return http.get(`breeds/search?q=${searchBreeds}`).then(breeds => {
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
          66+ Breeds For you to discover
        </SectionSubTitle>

        <SectionLink to="/popular" data-testid="see-more"> 
          SEE MORE &#8594;
        </SectionLink>
      </SectionTextWrapper>

      <ImageWrapper>
        { isLoading ? <Spinner /> :  <RenderCat breeds={data} /> } 
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
            &#169; { new Date().getFullYear() } Cat Wiki by muhfaridzia  - Devchallenges.io
          </FooterText>
        </FooterBox>
      </Footer>
    </Fragment>
  );
}

export default Home;