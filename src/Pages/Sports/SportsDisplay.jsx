import axios from 'axios';
import { useEffect, useState } from "react";
import SportsDisplayCard from './SportsDisplayCard';
import SportsFirstCard from './SportsFirstCard';

const SportsDisplay = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        // Fetch all data from the backend
        axios.get('http://localhost:3000/sports-item')
          .then(response => {
            // Assuming the response.data is an array of all data
            setData(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
      const displayedData = data.slice(0, 6);
    return (
            <div>
                  <h1 className='text-2xl mt-10'> খেলাধুলা </h1>
                <div  className=" flex flex-col sm:flex-row ">
                    
                        <div className='  bg-gray-200 ' >
                            <SportsFirstCard></SportsFirstCard>

                        </div>               
                     
                        <div className=' sm:p-2 bg-gray-300  shadow-xl' >
                       
                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-2">    
                                        {displayedData.map(item => (
                                            <SportsDisplayCard 
                                            key={item.id}
                                            item={item}
                                            >           
                                            </SportsDisplayCard>
                                            ))}
                                      </div>
                        </div>


                    </div>  
                </div>   
    );
};

export default SportsDisplay;