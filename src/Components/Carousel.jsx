import React,{useState, useEffect, useRef} from 'react';
import { AspectRatio, Box, Typography, Card } from '@mui/joy';


 function Carousel() {
  const [posts, setPosts] = useState([]);
  const scrollRef = useRef(null);

  const colors = ["#FFCDD2", "#C8E6C9", "#BBDEFB", "#FFF9C4", "#D1C4E9"];
  // //Light red, green, blue, yellow, purple 
  //backgroundColor: colors[index % colors.length]

  useEffect(()=>{
    fetch(`https://dummyjson.com/products`)
    .then((response)=>response.json())
    .then((json)=>setPosts(json.products))
  }, []);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(scrollRef.current){
        scrollRef.current.scrollTo({left:0, behavior:'smooth'})
        if(scrollRef.current.scrollLeft+scrollRef.current.clientWidth>=scrollRef.current.scrollWidth-5){
        }else{
          scrollRef.current.scrollBy({left:260, behavior:'smooth'})
        }
      }
    }, 3000)
    return ()=>{
      clearInterval(interval)
    }
  }, []);
  return (
    <Box ref={scrollRef} sx={{display: 'flex', gap: 2, paddingTop:'10px', overflow:'auto', width: '100%', scrollSnapType: 'x mandatory', '& > *': {scrollSnapAlign: 'center', },'::-webkit-scrollbar': { display: 'none' }, }}>
      {posts.map((post, index) => {
        // const cardBg = `hsl(${Math.random() * 360}, 70%, 80%)`
        // const imgBg = `hsl(${Math.random() * 360}, 70%, 80%)`
        const cardBg = colors[index % colors.length]; // fixed palette
        const imgBg = colors[(index +0) % colors.length];
        return (
        <Card orientation='horizontal' size='lg' key={post.title} variant='outlined'
        sx={{ flex: '0 0 95%', // ✅ each card takes 95% width of container
              minWidth: '60%', height: 'auto', display:'felx', justifyContent:'center', alignItems:'center', backgroundColor:cardBg }} >
          <AspectRatio ratio="1" sx={{ minWidth: 250, }}>
            <img src={post.images[0]} alt='' style={{backgroundColor:imgBg}} />
          </AspectRatio>
              <Box sx={{ whiteSpace:'nowrap', mx:1 }}>
                <Typography level="title-lg" fontSize={30}>{post.title}</Typography>
                <Typography>Brand:{post.brand}</Typography>
                <Typography>Category:{post.category}</Typography>
                <Typography>Price:${post.price}</Typography>
                <Typography>Rating:{post.rating}</Typography>
                <Typography>Stock:{post.stock} {post.availabilityStatus}</Typography>
                <Typography>{post.warrantyInformation}</Typography>
                <Typography>{post.shippingInformation}</Typography>

              </Box>
        </Card>)
      })}
    </Box>
  );
}

export default Carousel;