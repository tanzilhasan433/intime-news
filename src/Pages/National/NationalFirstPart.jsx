import { Card } from "keep-react";
import { Heart } from "phosphor-react";
const NationalFirstPart = () => {
    return (
        <div>
            <Card
          className=" overflow-hidden rounded-md"
          imgSrc="https://assets.dhakapost.com/media/imgAll/BG/2023December/high-commision-20231217071722.jpg?width=560&height=315"
          imgSize="md">
          <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
            <Heart size={20} weight="bold" color="white" />
          </Card.Container>
          <Card.Container className="p-6">
            <Card.Container className="flex items-center justify-between">
             
              
            </Card.Container>
            <Card.Container className="my-3">
              <Card.Title>বাঙালি জাতিসত্তার পূর্ণতা দেন বঙ্গবন্ধু : হাইকমিশনার</Card.Title>
              <Card.Description>
              অস্ট্রেলিয়ায় বাংলাদেশের হাইকমিশনার এম আল্লামা সিদ্দীকী বলেছেন, হাজার বছরে সৃষ্টি হওয়া বাঙালি জাতি সত্তাকে বঙ্গবন্ধু শেখ মুজিবুর রহমান. 
              </Card.Description>
            </Card.Container>
            
          </Card.Container>
        </Card>
        </div>
    );
};

export default NationalFirstPart;