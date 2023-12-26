/* eslint-disable react/prop-types */

import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const OpinionCard = ({opinionItem}) => {
    const {   title, images, author } = opinionItem ;     
    return (
        <div className="bg-base-100  p-4 gap-4 border-spacing-2">
           <div className="flex  transition-all duration-700 hover:scale-105"  >
                   <div className="avatar ms-5 me-5">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={images} />
                            </div>
                    </div> 
                    
                    <div>
                        <div>
                        <Link>
                                <motion.a
                                whileHover={{ scale: 1.0, color: 'blue' }}
                                whileTap={{ scale: 0.9, color: 'blue' }}
                                >
                                <p>{title}</p>
                                </motion.a>
                            </Link>
                        </div>
                        <div>
                            <p>{author}</p>
                        </div>
                    </div>
                   
                 </div>
        </div>
    );
};

export default OpinionCard;