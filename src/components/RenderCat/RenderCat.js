import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ImageWrapperName, ImageName } from "../Section/CatSection";
import { LazyImage } from '../LazyImage/';

const RenderCat = ({ breeds }) => {
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

export default RenderCat;