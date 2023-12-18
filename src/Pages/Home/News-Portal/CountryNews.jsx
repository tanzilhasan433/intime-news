
const CountryNews = () => {
    return (
        <div className="mt-10">
            <h1>Bangladesh</h1> 
            <div>
                    <div className="flex mt-5 g-10 m-5 p-5 bg-slate-200">
                        <select className="select select-bordered w-full max-w-xs">
                             <option disabled selected> Your Division? </option>
                             <option>Dhaka</option>
                             <option>Rajshahi</option>
                             <option>khulna</option>
                             <option>Rangpur</option>
                             <option>Mymonshing</option>
                             <option>Sylheat</option>
                             <option>Chittogong</option>
                             <option>Barishal</option>
                      </select>
                      <select className="select select-bordered w-full max-w-xs">
                             <option disabled selected> Your District? </option>
                             <option>Dhaka</option>
                             <option>Rajshahi</option>
                             <option>khulna</option>
                             <option>Rangpur</option>
                             <option>Mymonshing</option>
                             <option>Sylheat</option>
                             <option>Chittogong</option>
                             <option>Barishal</option>
                      </select>
                      <select className="select select-bordered w-full max-w-xs">
                             <option disabled selected> Your Thana? </option>
                             <option>Dhaka</option>
                             <option>Rajshahi</option>
                             <option>khulna</option>
                             <option>Rangpur</option>
                             <option>Mymonshing</option>
                             <option>Sylheat</option>
                             <option>Chittogong</option>
                             <option>Barishal</option>
                      </select>
                           <div className="navbar flex">
                            <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />  </svg>
                              
                            </button>

                        </div>
                    </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default CountryNews;