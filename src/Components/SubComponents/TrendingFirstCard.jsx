/* eslint-disable react/prop-types */
import { Card } from "keep-react";

const TrendingFirstCard = ({trendingfirstItem}) => {
    const {   title, images, des, time } = trendingfirstItem ;   
    const description = des.substring(0, 200) + '...'; 
    return (
        <div className="grid grid-cols-2">
             <img className="w-full" src={images} alt="" />
            <Card
                    
                    horizontal={true}>
            
                    <Card.Container className="space-y-4 p-8">
   
                        <Card.Container className="flex items-center justify-between">
                        <Card.Title className="flex items-center gap-2 !text-body-8 font-bold text-metal-500">
                            
                            <a href=""><h2> {title} </h2></a>
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

export default TrendingFirstCard;