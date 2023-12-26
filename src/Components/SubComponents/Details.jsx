
// import { useEffect, useState } from 'react';


// const Details = ({ match }) => {
//   const id = match.id; 
//   const [itemDetails, setItemDetails] = useState(null);
     

//   useEffect(() => {
    
//     const fetchItemDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/trendingfirst/${id}`);
//         const data = await response.json();
//         setItemDetails(data);
//       } catch (error) {
//         console.error('Error fetching item details:', error);
//       }
//     };

//     fetchItemDetails();
//   }, [id]);

//   return (
//  <div>
//       <h1>Details Page</h1>
//       {itemDetails ? (
//         <div>
//           <h2>{itemDetails.title}</h2>
//           <p>{itemDetails.description}</p>
          
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Details;

  

import axios from 'axios';
import { useEffect, useState } from "react";
import DetailsCard from './DetailsCard';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [data, setData] = useState([]);
    const {itemId} = useParams();
    useEffect(() => {
        
        axios.get(`http://localhost:3000/trendingfirst`)        
          .then(response => {   
            console.log(data);        
            setData(response.data);           
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, [itemId]);
      

      useEffect(() => {
        console.log(data);
    }, [data]);

    return (

        
          <div className='grid grid-cols-2'>  
                  <div>
                  {data.map(item => (
                    <DetailsCard 
                    key={item.id}
                    item={item}
                    >           
                    </DetailsCard>
                    ))}   
                  </div>
                 <div>

                </div>           
                         
          </div>  
    );
};

export default Details;



