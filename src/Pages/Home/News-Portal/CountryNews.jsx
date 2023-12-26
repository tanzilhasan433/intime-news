import { useState } from 'react';

const CountryNews = () => {
    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedUpazila, setSelectedUpazila] = useState('');

    const newsData = [
        { division: 'Dhaka', district: 'Dhaka', upazila: 'Dhanmondi', news: 'News from Dhanmondi' },
        { division: 'Rajshahi', district: 'Rajshahi', upazila: 'Motihar', news: 'News from Motihar' },
        // Add more data...
      ];

        // Filter data based on selected values
  const filteredData = newsData.filter(
    (item) =>
      (!selectedDivision || item.division === selectedDivision) &&
      (!selectedDistrict || item.district === selectedDistrict) &&
      (!selectedUpazila || item.upazila === selectedUpazila)
  );

  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
    setSelectedDistrict(''); // Reset district when division changes
    setSelectedUpazila(''); // Reset upazila when division changes
  };

    // Event handler for district selection
    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
        setSelectedUpazila(''); // Reset upazila when district changes
      };

        // Event handler for upazila selection
  const handleUpazilaChange = (e) => {
    setSelectedUpazila(e.target.value);
  };

    return (
        <div className="mt-10">
            <h1 className="text-2xl">আপনার এলাকার খবর</h1> 
            <div>
                    <div className="flex mt-5 g-10 gap-4 m-5 p-5 bg-slate-200">
                        <select className="select select-bordered w-full max-w-xs"
                                    value={selectedDivision}
                                    onChange={handleDivisionChange}
                        >
                               <option disabled value="">
                                    বিভাগ 
                                </option>

                             <option>ঢাকা </option>
                             <option>রাজশাহী </option>
                             <option>খুলনা</option>
                             <option>রংপুর</option>
                             <option>ময়মনসিংহ</option>
                             <option>সিলেট</option>
                             <option>চট্টগ্রাম</option>
                             <option>বরিশাল</option>
                      
                         </select>
                         
                      <select
                            className="select select-bordered w-full max-w-xs"
                            value={selectedDistrict}
                            onChange={handleDistrictChange}
                        >
                            <option disabled value="">
                            জেলা
                            </option>
                            {/* Add options for upazilas based on the selected district */}
                        </select>

                      {/* <select className="select select-bordered w-full max-w-xs">
                             <option disabled selected> জেলা </option>
                             <option>Dhaka</option>
                             <option>Rajshahi</option>
                             <option>khulna</option>
                             <option>Rangpur</option>
                             <option>Mymonshing</option>
                             <option>Sylheat</option>
                             <option>Chittogong</option>
                             <option>Barishal</option>
                      </select> */}
                      <select className="select select-bordered w-full max-w-xs">
                             <option disabled selected> উপজেলা  </option>
                             <option>Dhaka</option>
                             <option>Rajshahi</option>
                             <option>khulna</option>
                             <option>Rangpur</option>
                             <option>Mymonshing</option>
                             <option>Sylheat</option>
                             <option>Chittogong</option>
                             <option>Barishal</option>
                      </select>
                           <div className="">
                            <button className="btn p-4  bg-slate-400  me-48  w-full max-w-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />  </svg> 
                            </button>

                        </div>
                    </div>
            </div>
            <div>
                {/* Display filtered data */}
                    {filteredData.map((item, index) => (
                    <div key={index}>
                        <p>{item.news}</p>
                    </div>
                    ))}
            </div>
            <div>

            </div>
        </div>
    );
};

export default CountryNews;