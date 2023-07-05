import axios from "axios";
import { useState, useEffect } from "react";
// require('dotenv').config();



export const getPlayingStatus = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setPlayingStatus] = useState();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        // const resp = await axios.get(`${process.env.DOMAIN}/api/spotify`);
        // const data = await resp?.data.data.body;
        console.log(`${process.env.DOMAIN}`)

        // setPlayingStatus(data);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
      }
    };

    fetchData();

  })

  return { isLoading, status }

};
