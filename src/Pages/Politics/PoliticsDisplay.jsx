import axios from 'axios';
import { useEffect, useState } from "react";
import PoliticsDisplayCard from './PoliticsDisplayCard';
import PoliticsFirstCard from './PoliticsFirstCard';
// import HealthCard from '../AdditionalPage/Health/HealthCard';
const PoliticsDisplay = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        // Fetch all data from the backend
        axios.get('http://localhost:3000/politics')
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
                <h1 className='text-2xl mt-10'> রাজনীতি </h1>
         <div  className="grid grid-cols-1 sm:grid-cols-3 md:flex-row mt-2" >
                <div  className="flex-1 p-2 bg-gray-200 border-2">
                    <PoliticsFirstCard></PoliticsFirstCard>
             
                </div>               
                <div  className="flex-1 sm:p-2 bg-gray-300  shadow-xl">
                                {displayedData.map(item => (
                                    <PoliticsDisplayCard 
                                    key={item.id}
                                    item={item}
                                    >           
                                    </PoliticsDisplayCard>
                                    ))}
                </div>

                <div   className="flex-1 sm:p-2 bg-gray-300  shadow-xl">
                    {/* <HealthCard></HealthCard> */}
                </div>
            </div>  
      </div>   
    );
};

export default PoliticsDisplay;

