/* eslint-disable react/prop-types */
import { motion } from "framer-motion"

const JobsCard = ({jobsItem}) => {
    const {   title, images, des, time } = jobsItem ;    
    const description = des.substring(0, 50) + '...'; 
    return (
            <div className="transition-all duration-700 hover:scale-105">
                <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={images} alt="images" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                       {/* <Link to={`/details/${trendingsecondItem._id}`}> */}
                             <motion.a
                                whileHover={{ scale: 1.0, color: 'blue' }}
                                whileTap={{ scale: 0.9, color: 'blue' }}
                                >
                                <h2 className=" text-bold">{title}</h2>
                                </motion.a>
                            {/* </Link> */}
                    <p>{description}</p>
                    <p>Updated: {time}</p>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;