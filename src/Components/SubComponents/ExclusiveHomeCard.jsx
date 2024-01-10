/* eslint-disable react/prop-types */
import { Card } from "keep-react";
import { Heart } from "phosphor-react";
import { motion } from "framer-motion"

const ExclusiveHomeCard = ({exclusiveItem}) => {
    const {   title, images, des } = exclusiveItem ;    
    const description = des.substring(0, 50) + '...'; 
    return (
        <div>
         <Card
          className=" overflow-hidden rounded-md transition-all duration-700 hover:scale-105"
          imgSrc={images}
          imgSize="md">
          <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
            <Heart size={20} weight="bold" color="white" />
          </Card.Container>
          <Card.Container className="p-6">
            <Card.Container className="my-3">
                            {/* <Link to={`/details/${trendingsecondItem._id}`}> */}
                            <motion.a
                                whileHover={{ scale: 1.0, color: 'blue' }}
                                whileTap={{ scale: 0.9, color: 'blue' }}
                                >
                                <h2 className="text-xl text-bold">{title}</h2>
                                </motion.a>
                            {/* </Link> */}
              <br />
              <Card.Description>
              {description}
              </Card.Description>
            </Card.Container>
            
          </Card.Container>
        </Card>
            
        </div>
    );
};

export default ExclusiveHomeCard;