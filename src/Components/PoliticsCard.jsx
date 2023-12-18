/* eslint-disable react/prop-types */

const PoliticsCard = ({politicsItem}) => {

    const {   title, images, des, time } = politicsItem ;    
    const description = des.substring(0, 50) + '...'; 


    return (
                <div>
                <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={images} alt="images" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <a href=""><h2 className="card-title">{title}</h2></a>
                    <p>{description}</p>
                    <p>Updated: {time}</p>

                </div>
            </div>
        </div>
    );
};

export default PoliticsCard;