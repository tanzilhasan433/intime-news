/* eslint-disable react/prop-types */

import { Card } from "keep-react";

const NationalDisplayCard = ({item}) => {
    const {   title, images } = item ;
    return (
        <div>
            <Card
                    className="!max-w-xs  overflow-hidden rounded-md md:!max-w-[100%] h-[auto]"
                    imgSrc={images}
                    imgSize="md"
                    horizontal={true}>
                    <Card.Container className="space-y-4 p-6">
   
                        <Card.Container className="flex items-center justify-between">
                        <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                            
                            <a href=""><p> {title} </p></a>
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

export default NationalDisplayCard;