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
         <div  className="mt-2" style={{ display: 'flex', width: '100%' }}>
                <div  style={{ flex: '4', padding: '5px', background: '#f2f2f2', border: '5px' }}>
                    <PoliticsFirstCard></PoliticsFirstCard>
             
                </div>               
                <div  style={{ flex: '4', padding: '10px', background: '#e6e6e6', width: '50%', shadow: 'xl'  }}>
                                {displayedData.map(item => (
                                    <PoliticsDisplayCard 
                                    key={item.id}
                                    item={item}
                                    >           
                                    </PoliticsDisplayCard>
                                    ))}
                </div>

                <div  style={{ flex: '4', padding: '10px', background: '#e6e6e6', width: '50%', shadow: 'xl'  }}>
                    {/* <HealthCard></HealthCard> */}
                </div>
            </div>  
      </div>   
    );
};

export default PoliticsDisplay;

