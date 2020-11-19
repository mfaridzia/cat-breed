import React, { useState, useEffect } from "react";
import styled from "styled-components";

const placeHolder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

const Image = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  border-radius: ${props => props.borderRadius};
  border: ${props => props.border};

  @keyframes loaded {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }

  &.loaded:not(.has-error) {
    animation: loaded 300ms ease-in-out;
  }

  &.has-error {
    content: url(${placeHolder});
  }
`;

export const LazyImage = ({ 
  src, alt, width = 100, height = 100, margin = 0, border = 0, borderRadius = 0 
}) => {
  const [imageSrc, setImageSrc] = useState(placeHolder);
  const [imageRef, setImageRef] = useState();

  const onLoad = event => {
    event.target.classList.add("loaded");
  };

  const onError = event => {
    event.target.classList.add("has-error");
  };

  useEffect(
    () => {
      let observer;
      let didCancel = false;

      if (imageRef && imageSrc !== src) {
        if (IntersectionObserver) {
          observer = new IntersectionObserver(
            entries => {
              entries.forEach(entry => {
                if (
                  !didCancel &&
                  (entry.intersectionRatio > 0 || entry.isIntersecting)
                ) {
                  setImageSrc(src);
                  observer.unobserve(imageRef);
                }
              });
            },
            {
              threshold: 0.01,
              rootMargin: "75%"
            }
          );
          observer.observe(imageRef);
        } else {
          // Old browsers fallback
          setImageSrc(src);
        }
      }
      return () => {
        didCancel = true;
        // on component cleanup, we remove the listner
        if (observer && observer.unobserve) {
          observer.unobserve(imageRef);
        }
      };
    },
    [src, imageSrc, imageRef]
  );
  return (
    <Image
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      margin={margin}
      border={border}
      borderRadius={borderRadius}
      onLoad={onLoad}
      onError={onError}
    />
  );
};
