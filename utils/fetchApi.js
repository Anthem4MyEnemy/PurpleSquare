import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';



  export const fetchApi = async (url) =>{
      const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '088854d22emsh502fbc0692c46f0p1d8d10jsn39dacaca8ba7'
          }
      });

      return data;
  }