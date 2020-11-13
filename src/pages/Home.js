import React, { Fragment, useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';
import http from '../api/httpClient';
import cat1 from '../assets/cat1.png';
import cat2 from '../assets/cat2.png';
import cat3 from '../assets/cat3.png';
import Loading from '../components/LoadingCat';
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
  Image,ImageWrapperName, ImageName
} from "../components/CatSection";

const Home = () => {
  const [breeds, setBreeds] = useState([]);
  const [searchBreeds, setSearchBreeds] = useState('');
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = value => setSearchBreeds(value);
  const handleSelectedValue = value => setSelectedBreed(value);

  const loadBreedsOptions = () => {
    return http.get(`breeds/search?q=${searchBreeds}`)
      .then(breeds => {
        let dataBreeds = []
        for (let i = 0; i < breeds.data.length; i++) {
          dataBreeds.push({
            "label": breeds.data[i].id,
            "value": breeds.data[i].name
          })
        }
        console.log(dataBreeds)
        return dataBreeds;
      })
  }

  useEffect(() => {
    setLoading(true);
    let source = axios.CancelToken.source();
    const fetchBreeds = async () => {
      try {
        const response = await http.get("breeds", {
          cancelToken: source.token,
          params: { 
            limit: 4
          }
        });

        const tempDataBreeds = []; 
        // jalan secara sequensial, bisa ganti pake Promise.all biar jalan secara parallel
        for (let i = 0; i < response.data.length; i++) {
          let images = await http.get("images/search", {
            cancelToken: source.token,
            params: {  
              limit: 4,
              mime_types: ['png', 'jpg'],
              breed_id: response.data[i].id
            }
          });
          tempDataBreeds.push(images.data)
        }

        const result = tempDataBreeds.map(item => {
          let data = item[0].breeds
          let images = item[0].url
          return {
            data,
            images
          }
        })

        setBreeds(result);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('cancelled');
        } else {
          throw error;
        }
        setLoading(false);
      }
    };
    fetchBreeds();

    return () => {
      source.cancel();
    }
  }, []);

  const renderCat = () => {
    return (
      loading ? <Loading /> : ( 
        breeds.map(breed => (
          <Fragment key={breed.images}>
            <ImageWrapperName>
              { breed.data.map(item => (
                <Fragment>
                  <a href={item.name}> <Image src={breed.images} alt={item.name} /> </a>
                  <ImageName> { item.name } </ImageName>
                </Fragment>
              )) }
             </ImageWrapperName> 
          </Fragment>
        ))
      )
    )
  }

  return (
    <Fragment>
      <Header>
        <Title> CatWiki </Title>
        <TextDescription> Get to know more about your cat breed. </TextDescription>

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
          components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
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

        <SectionLink href=""> SEE MORE &#8594; </SectionLink>
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
              <WhySectionImageGalery src={cat2} height="100" width="200" />
              <WhySectionImageGalery src={cat1} height="200" width="150" mleft="50px" />
            </WhySectionImageCatBox> 
            <WhySectionImageCatBox>
              <WhySectionImageGalery src={cat3} height="250" width="200" />
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