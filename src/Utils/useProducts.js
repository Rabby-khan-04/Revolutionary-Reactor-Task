import axios from "axios";
import { useEffect } from "react";

export const useProducts = () => {
  const options = {
    method: "GET",
    url: "https://amazon23.p.rapidapi.com/product-search",
    params: {
      query: "xbox",
      country: "US",
    },
    headers: {
      "X-RapidAPI-Key": "960153622amshc5ff09853b5c276p120343jsn9b0f0daae392",
      "X-RapidAPI-Host": "amazon23.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
};
