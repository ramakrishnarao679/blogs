import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Carousel from "../Components/Carousel";
import { Box, Card, CardContent, Typography, Button} from "@mui/joy";

const HomePage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let data = await fetch(`https://dummyjson.com/products?limit=100`)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      });
    setData(await data.products);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Box>
      <NavBar />
      <Carousel />
      <Box sx={{width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 2, paddingTop: "10px",}} >
        {data.map((item) => {
          return (
            <Card variant="outlined" key={item.id}>
              <CardContent sx={{flexGrow:1}} >
                <Typography level="h3">{item.title}</Typography>
                <Typography>
                    <img src={item.images[0]} alt='' width={300} height={200} />
                </Typography>
                <Typography>{item.description}</Typography>
                <Button variant="solid" size="md" color="primary" aria-label="Explore Bahamas       Islands" sx={{ mt: 'auto', alignSelf:'flex-end', fontWeight: 600 }} >
                     MoreDetails
                </Button>
              </CardContent>
            </Card> 
          );
        })}
      </Box>
    </Box>
  );
};

export default HomePage;
