import axios from 'axios';
import { useEffect, useState } from "react";
import LatestDisplayCard from './LatestDisplayCard';

const LatestNewsDisplay = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        // Fetch all data from the backend
        axios.get('http://localhost:3000/latest')
          .then(response => {
            // Assuming the response.data is an array of all data
            setData(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
      const displayedData = data.slice(0, 3);
    return (
        <div className=''>             
                                {displayedData.map(item => (
                                    <LatestDisplayCard 
                                    key={item.id}
                                    item={item}
                                    >           
                                    </LatestDisplayCard>
                                    ))}             
      </div>   
    );
};

export default LatestNewsDisplay;