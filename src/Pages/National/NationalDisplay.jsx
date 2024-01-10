import axios from 'axios';
import { useEffect, useState } from "react";
import NationalDisplayCard from './NationalDisplayCard';
import NationalFirstPart from './NationalFirstPart';
import LatestNewsDisplay from '../Home/LatestNews/LatestNewsDisplay';

const NationalDisplay = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        // Fetch all data from the backend
        axios.get('http://localhost:3000/national')
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
                <h1 className='text-2xl'> জাতীয়  </h1>
         <div  className="grid grid-cols-1 sm:grid-cols-3 md:flex-row mt-2" >
                <div  className="flex-1 p-2 bg-gray-200 border-2">
                    <NationalFirstPart></NationalFirstPart>        
                </div>               
                <div  className="flex-1 sm:p-2 bg-gray-300  shadow-xl">
                                {displayedData.map(item => (
                                    <NationalDisplayCard 
                                    key={item.id}
                                    item={item}
                                    >           
                                    </NationalDisplayCard>
                                  ))}
                </div>

                <div  className="flex-1 sm:p-2 bg-gray-300  shadow-xl">
                    <LatestNewsDisplay></LatestNewsDisplay>
                </div>
            </div>  
      </div>   
    );
};

export default NationalDisplay;

