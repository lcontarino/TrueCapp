import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import './SlideShow.css'

export const SlideShow = () => {
  return (
    
     <div>
       <Carousel infiniteLoop autoPlay>
         <div className="image">
           <img src="https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399&width=1024" alt="shiping"/>
         </div>
         <div className="image">
           <img src="https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399&width=1024" alt="shiping"/>
         </div>
         <div className="image">
           <img src="https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399&width=1024" alt="shiping"/>
         </div>
       </Carousel>
</div>
     
  )
}