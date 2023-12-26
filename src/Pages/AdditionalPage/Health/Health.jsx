import axios from 'axios';
import { useEffect, useState } from "react";
import HealthCard from './HealthCard';

const Health = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        // Fetch all data from the backend
        axios.get('http://localhost:3000/health')
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
        <div>
        <h1 className='text-2xl'> Health  </h1>
              
        <div>
                        {displayedData.map(item => (
                            <HealthCard 
                            key={item.id}
                            item={item}
                            >           
                            </HealthCard>
                            ))}
        </div>


    
</div>   
    );
};

export default Health;