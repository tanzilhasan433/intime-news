import { Card } from "keep-react";
import { Heart } from "phosphor-react";
const SportsFirstCard = () => {
    return (
        <div className="lg:w-[400px]">
             <Card
          className=" overflow-hidden rounded-md"
          imgSrc="https://assets.dhakapost.com/media/imgAll/BG/2023December/test-20231217114952.jpg?width=560&height=315"
          imgSize="md">
          <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
            <Heart size={20} weight="bold" color="white" />
          </Card.Container>
          <Card.Container className="p-6">
            <Card.Container className="flex items-center justify-between">
             
              
            </Card.Container>
            <Card.Container className="my-3">
              <Card.Title>পার্থ টেস্টে জিততে ৪৫০ রানের পাহাড় টপকাতে হবে পাকিস্তানকে</Card.Title>
              <Card.Description>
              পার্থ টেস্টে তৃতীয় দিনের খেলা শেষেই চালকের আসনে ছিল অস্ট্রেলিয়া। হাতে ৮ উইকেট নিয়ে স্বাগতিকদের লিড বেড়ে দাঁড়িয়েছিল ৩০০ রান। আজ চতুর্থ দিনে উসমান খাজা ও মিচেল মার্শের দারুণ ব্যাটিংয়ে আরও ১৪৯ রান যোগ করে 
              </Card.Description>
            </Card.Container>
            
          </Card.Container>
        </Card>
        </div>
    );
};

export default SportsFirstCard;