import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import TreandingSecondDesCard from './TreandingSecondDesCard';

const TrendingSecondDes = () => {
    const [data, setData] = useState([]);
    const { itemId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/trendingsecond`);
                setData(response.data);
                console.log(response.data); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [itemId]);

    return (
        <div>
            {data.map(item => (
                <TreandingSecondDesCard 
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    );
};

export default TrendingSecondDes;
