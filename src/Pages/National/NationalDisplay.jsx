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
         <div  className="mt-2" style={{ display: 'flex', width: '100%' }}>
                <div  style={{ flex: '4', padding: '5px', background: '#f2f2f2', border: '5px' }}>
                    <NationalFirstPart></NationalFirstPart>
             
                </div>               
                <div  style={{ flex: '4', padding: '10px', background: '#e6e6e6', width: '50%', shadow: 'xl'  }}>
                                {displayedData.map(item => (
                                    <NationalDisplayCard 
                                    key={item.id}
                                    item={item}
                                    >           
                                    </NationalDisplayCard>
                                    ))}
                </div>

                <div  style={{ flex: '4', padding: '10px', background: '#e6e6e6', width: '50%', shadow: 'xl'  }}>
                    <LatestNewsDisplay></LatestNewsDisplay>
                </div>
            </div>  
      </div>   
    );
};

export default NationalDisplay;

