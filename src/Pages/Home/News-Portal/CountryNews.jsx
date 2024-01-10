
import { useState, useEffect } from 'react';

const CountryNews = () => {
  const [selectedDivision, setSelectedDivision] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedUpazila, setSelectedUpazila] = useState('');
  // const [divisionOptions, setDivisionOptions] = useState([]);
  const [districtOptions, setDistrictOptions] = useState([]);
  const [upazilaOptions, setUpazilaOptions] = useState([]);
  // const [upazilaNames , setUpazilaNames] = useState([]);
  // const [districtNames, setDistrictNames] = useState([]);
  const [divisionNames, setDivisionNames] = useState([]);
  const [mainDatas, setMainDatas] = useState([]);

  useEffect(() => {   
    const fetchDivisions = async () => {
      const response = await fetch('http://localhost:3000/upaziladata');
      const data = await response.json();
      setMainDatas(data);   
      const divitions =   data.map( divisionData => divisionData.divisionName
        )   
      setDivisionNames(divitions);  
    };
    fetchDivisions();
  }, []);

  console.log({selectedDivision});
  console.log({selectedDistrict});
  console.log({selectedUpazila});



  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value); 

    const selectDevision =  mainDatas.find( division => division.divisionName === e.target.value )
     
    setDistrictOptions(selectDevision.alldistrict);
    setSelectedDistrict('');
    setSelectedUpazila('');
  };

  const handleDistrictChange = (e) => {
 
    // console.log(districtOptions);
     
    const selectDistrict =  districtOptions.find( district => district.districName === e.target.value )
    // console.log(selectDistrict);
    setSelectedDistrict( e.target.value)

    setUpazilaOptions(selectDistrict.allupazila );
    setSelectedUpazila("");
  };

  const handleUpazilaChange = (e) => {
    setSelectedUpazila(e.target.value);
  };

  return (
    <div className="mt-10">
      <h1 className="text-2xl">আপনার এলাকার খবর</h1>
      <div className="flex mt-5 g-10 gap-4 m-5 p-5 bg-slate-200">
        <select
          className="select select-bordered w-full max-w-xs"
          value={selectedDivision}
          onChange={handleDivisionChange}
        >
          <option disabled value="">
            বিভাগ
          </option>
          {divisionNames.map((division, index) => (
            <option key={index} value={division}>
              {division}
            </option>
          ))}


        </select>

        <select
          className="select select-bordered w-full max-w-xs"
          value={selectedDistrict}
          onChange={handleDistrictChange}
        >
          <option disabled value="">
            জেলা
          </option>
          {districtOptions.map((district, index) => (            
            <option key={index} value={district.districName}>
              {district.districName}
              
            </option>
          ))}
 
        </select>

        <select
          className="select select-bordered w-full max-w-xs"
          value={selectedUpazila}
          onChange={handleUpazilaChange}
        >
          <option disabled value="">
            উপজেলা
          </option>
          {upazilaOptions.map((upazila, index) => (
            <option key={index} value={upazila}>
              {upazila}
            </option>
          ))}
        </select>

        <div className="">
          <button className="btn p-4  bg-slate-400  me-48  w-full max-w-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* <div>
      {Array.isArray(newsData) && newsData.map((item, index) => (
          <div key={index}>
            <p>{item.news}</p>
          </div>
        ))}

      </div> */}
    </div>
  );
};

export default CountryNews;





