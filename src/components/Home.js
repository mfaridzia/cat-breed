import React, { Fragment, useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import styled from 'styled-components';
import heroImage from '../assets/heroImagels.png';
import cat1 from '../assets/image1.png';
import cat2 from '../assets/image2.png';
import cat3 from '../assets/image3.png';
import http from '../api/httpClient';
import axios from 'axios';
import Loading from './LoadingCat';
import customStyles from './CustomStyleRS';

const Header = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Roboto:ital@1&display=swap');  background-image: url(${heroImage});
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-size: 100% 500px;
  height: 500px;
  width: 100%;
  background-attachment: fixed;
`

const Title = styled.h1`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 60px;
  letter-spacing: 5px;
  margin: 150px 150px 5px;
` 

const TextDescription = styled.p`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 25px;
  margin-left: 150px;
`

const Section = styled.section`
  background-color: white;
  height: auto;
  width: 100%;
`

const SectionTitle = styled.h2`
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin-left: 150px;
  margin-top: 40px;
`
const Line = styled.div`
  background-color: black;
  height: 3px;
  width: 60px;
`

const SectionTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: auto;
  margin: 0 auto;
`

const SectionSubTitle = styled.h1`
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-size: 35px;
  letter-spacing: 0px;
  margin-top: 20px;
  margin-left: 15px;
`

const SectionLink = styled.a`
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

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 80%;
  height: 200px;
  margin: 30px auto 100px;
`

const Image = styled.img`
  width: 240px;
  height: 200px;
  margin: 0 18px;
  border-radius: 20px;
  border: 1px solid #f1f1f1;
`
const ImageWrapperName = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
`
const ImageName = styled.p`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 500;
  margin: 10px auto;
`

const WhySection = styled.div`
  background-color: black;
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 40px auto 0px;
`

const WhySectionText = styled.div`
  height: auto;
  width: 36%;
  margin-left: 150px;
  margin-top: 200px;
`

const WhySectionLine = styled(Line)`
  background-color: white;
  margin-bottom: 10px;
  width: 100px;
`

const WhySectionTitle = styled.h1`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  margin-bottom: 20px;
`

const WhySectionDesc = styled.p`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 17px;
  line-height: 20px;
  margin-bottom: 60px;
`

const WhySectionLink = styled.a`
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

const WhySectionImage = styled.div`
  height: auto;
  margin-top: 140px;
  width: 45%;
`

const WhySectionImageCat = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  height: 0 auto;
  width: 100%;
`

const WhySectionImageCatBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 0 auto;
  padding-left: 15px;
  position: relative;
  left: 150px;
`

const WhySectionImageGalery = styled.img`
  border: 0px solid white;
  border-radius: 25px;
  width: ${props => props.width};
  height: ${props => props.height};
  margin-bottom: 20px;
  margin-left: ${props => props.mleft};
`

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  background-color: black;
`
const FooterBox = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: black;
  height: auto;
`

const FooterText = styled.p`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  text-align: center;
  margin-left: 15px;
`

const Home = () => {
  const [images, setImages] = useState([]);
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
          console.log("name--- ", breeds.data[i].name)
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

        let tempData = []; 
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
          tempData.push(images.data)
        }

        const result = tempData.map(item => {
          let data = item[0].breeds
          let images = item[0].url
          return {
            data,
            images
          }
        })

        setImages(result);
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
        images.map(breed => (
          <Fragment key={breed.images}>
            <ImageWrapperName>
              { breed.data.map(item => (
                <>
                  <a href={item.name}> <Image src={breed.images} alt="cat" /> </a>
                  <ImageName> { item.name } </ImageName>
                </>
              )) }
             </ImageWrapperName> 
          </Fragment>
        ))
      )
    )
   }

   console.log("hahahha", images);

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