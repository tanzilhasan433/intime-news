/* eslint-disable react/prop-types */
import { Card } from "keep-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
// import './clipPath.css'


const TrendingFirstCard = ({trendingfirstItem}) => {
    const {   title, images, des  } = trendingfirstItem ;   
    const description = des.substring(0, 100) + '...'; 
    return (
        <div className="grid grid-cols-2 m-2 gap-4 ">
               <figure className="  transition-all duration-700 hover:scale-105">
                 <motion.img
                    src={images} alt="images"
                    className="w-full h-64 "
                />
                 </figure>
            <Card
                   className="w-full h-64 transition-all duration-700 hover:scale-105" 
                //    imgSrc={images} alt="images"
                    horizontal={true}>  
                    <Card.Container className=" space-y-4 p-6">                    
                        <Card.Container className="flex items-center justify-between ">
                        <Card.Title className="flex items-center gap-2 !text-body-8 font-bold text-metal-500">
                        <Link to={`/details/${trendingfirstItem._id}`}>
                                <motion.a
                                whileHover={{ scale: 1.0, color: 'blue' }}
                                whileTap={{ scale: 0.9, color: 'blue' }}
                                >
                                <h2>{title}</h2>
                                </motion.a>
                            </Link>
                        </Card.Title>

                        </Card.Container>
                                <Card.Container className="flex items-center justify-between">
                                    <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                                        
                                        <span> {description} </span>
                                    </Card.Title>
                                </Card.Container>
                                <Card.Container className="flex items-center justify-between">
                                    <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">                           
                                    <a className="mt-4 bg-slate-300 p-2" href="">পতাকা</a>
                                    </Card.Title>

                                 </Card.Container>                             
                       </Card.Container>                                           
                 </Card>           
        </div>
    );
};

export default TrendingFirstCard;