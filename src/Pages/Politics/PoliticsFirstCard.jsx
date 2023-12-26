import { Card } from "keep-react";
import { Heart } from "phosphor-react";

const PoliticsFirstCard = () => {
    return (
        <div>
              <Card
          className=" overflow-hidden rounded-md"
          imgSrc="https://assets.dhakapost.com/media/imgAll/BG/2023December/septik-20231218151557.jpg?width=560&height=315"
          imgSize="md">
          <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
            <Heart size={20} weight="bold" color="white" />
          </Card.Container>
          <Card.Container className="p-6">
            <Card.Container className="flex items-center justify-between">
             
              
            </Card.Container>
            <Card.Container className="my-3">
              <Card.Title>সীমান্তে সুড়ঙ্গ-বিরোধী প্রাচীর নির্মাণ</Card.Title>
              <br />

              <Card.Description>
              ফিলিস্তিনের অবরুদ্ধ গাজা উপত্যকায় প্রায় আড়াই মাস ধরে নির্বিচারে বোমা ও ক্ষেপণাস্ত্র হামলা চালিয়ে যাচ্ছে ইসরায়েল। এর সঙ্গে চলছে স্থলপথেও অভিযান। 
              </Card.Description>
            </Card.Container>
            
          </Card.Container>
        </Card>
        </div>
    );
};

export default PoliticsFirstCard;