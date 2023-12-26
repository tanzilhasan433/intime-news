import axios from 'axios';
import { useEffect, useState } from "react";
import InternationalDisplayCard from './internationalDisplayCard';
import InternationalFirstPart from './InternationalFirstPart';

const InternationalDisplay = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        // Fetch all data from the backend
        axios.get('http://localhost:3000/international')
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
                <h1 className='text-2xl mt-10'> আন্তজাতিক </h1>
         <div  className="mt-2" style={{ display: 'flex', width: '100%' }}>
                <div  style={{ flex: '5', padding: '5px', background: '#f2f2f2', border: '5px' }}>
                <InternationalFirstPart></InternationalFirstPart>
             
                </div>               
                <div  style={{ flex: '4', padding: '10px', background: '#e6e6e6', width: '50%', shadow: 'xl'  }}>
                                {displayedData.map(item => (
                                    <InternationalDisplayCard 
                                    key={item.id}
                                    item={item}
                                    >           
                                    </InternationalDisplayCard>
                                    ))}
                </div>

                <div  style={{ flex: '3', padding: '10px', background: '#e6e6e6', width: '50%', shadow: 'xl'  }}>
                    
                </div>
            </div>  
      </div>   
    );
};

export default InternationalDisplay;