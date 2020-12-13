import { useEffect, useState } from 'react';
import axios from 'axios';
import http from '../services/api';

const useFetchBreeds = (limit) => {
  const [breeds, setBreeds] = useState([]);
  
  useEffect(() => {
    let source = axios.CancelToken.source();
    const fetchBreeds = async () => {
      try {
        const response = await http.get("breeds", {
          cancelToken: source.token,
          params: { 
            limit: limit
          }
        });
  
        const getImageBreeds = data => {
          return http.get("images/search", {
            cancelToken: source.token,
            params: {  
              limit: limit,
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

        console.log(processCatDataBreeds);
  
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
  }, [limit]);

  return [breeds, setBreeds];
}

export default useFetchBreeds;