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
                <div  className="" style={{ display: 'flex', width: '100%' }}>
                        <div  style={{ flex: '4', padding: '5px', background: '#f2f2f2', border: '5px' }}>
                            <SportsFirstCard></SportsFirstCard>

                        </div>               
                        <div  style={{ flex: '8', padding: '10px', background: '#e6e6e6', width: '50%', shadow: 'xl'  }}>
                         <div className="grid    md:grid-cols-2 justify-center gap-2">    
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