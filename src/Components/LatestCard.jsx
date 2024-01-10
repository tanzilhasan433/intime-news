/* eslint-disable react/prop-types */
import { Card } from "keep-react";
import { motion } from "framer-motion"

const LatestCard = ({latestItem}) => {
    const {   title, images, des, time } = latestItem ;  
     const description = des.substring(0, 200) + '...'; 
    return (
        <div>
             <Card
                    className="  overflow-hidden rounded-md md:!max-w-[100%] h-[auto] transition-all duration-700 hover:scale-105"
                    imgSrc={images}
                    imgSize="md"
                    horizontal={true}>
                    <Card.Container className="space-y-4 p-6">
   
                        <Card.Container className="flex items-center justify-between">
                        <Card.Title className="flex items-center gap-2 !text-body-5 font-bold text-metal-500">                            
                            {/* <Link to={`/details/${trendingsecondItem._id}`}> */}
                            <motion.a
                                whileHover={{ scale: 1.0, color: 'blue' }}
                                whileTap={{ scale: 0.9, color: 'blue' }}
                                >
                                <h2 className=" text-bold">{title}</h2>
                                </motion.a>
                            {/* </Link> */}
                        </Card.Title>

                        </Card.Container>
                        <Card.Container className="flex items-center justify-between">
                        <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                            
                            <span> {description} </span>
                        </Card.Title>

                        </Card.Container>
                            <span>  {time} </span>
                    </Card.Container>
                 </Card>
            
        </div>
    );
};

export default LatestCard;