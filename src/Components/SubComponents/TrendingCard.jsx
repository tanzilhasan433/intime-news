/* eslint-disable react/prop-types */

  import { Card } from "keep-react";
  import { motion } from "framer-motion";


const TrendingCard = ({trendingItem}) => {
    const {   title, images } = trendingItem ;    
    // const description = des.substring(0, 50) + '...'; 
    return (
        <div>
            
            <Card
                    className="!max-w-xs  overflow-hidden rounded-md md:!max-w-[100%] h-[auto] transition-all duration-700 hover:scale-105"
                    imgSrc={images}
                    
                    imgSize="md"
                    horizontal={true}>
                    <Card.Container className="space-y-4 p-6">
   
                        <Card.Container className="flex items-center justify-between">
                        <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                            
                        <motion.a
                                whileHover={{ scale: 1.0, color: 'blue' }}
                                whileTap={{ scale: 0.9, color: 'blue' }}
                                >
                                <h2>{title}</h2>
                                </motion.a>
                        </Card.Title>

                        </Card.Container>
                        <Card.Container className="flex items-center justify-between">
                        <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                            
                            {/* <span> {description} </span> */}
                        </Card.Title>

                        </Card.Container>
                            {/* <span>  {time} </span> */}
                    </Card.Container>
                 </Card>
        </div>
    );
};

export default TrendingCard;