/* eslint-disable react/prop-types */
import { Card } from "keep-react";
import { Heart } from "phosphor-react";

const ElectionHomeCard = ({electionhomeItem}) => {
    const {   title, images, des } = electionhomeItem ;    
    const description = des.substring(0, 50) + '...'; 
    return (
        <div>
         <Card
          className=" overflow-hidden rounded-md"
          imgSrc={images}
          imgSize="md">
          <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
            <Heart size={20} weight="bold" color="white" />
          </Card.Container>
          <Card.Container className="p-6">
            <Card.Container className="my-3">
              <Card.Title> {title} </Card.Title>
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

export default ElectionHomeCard;

