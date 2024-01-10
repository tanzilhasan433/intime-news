

export const CardComponent = () => {
  return (

   

<div className="mt-5 mb-10 " style={{ display: 'flex', width: '100%' }}>
{/* First Column - col-3 */}
<div style={{ flex: '3', padding: '10px', background: '#f2f2f2', border: '5px' }}>


</div>

{/* Second Column - col-6 */}
<div style={{ flex: '6', padding: '10px', background: '#e6e6e6', width: '50%', shadow: 'xl'  }}>
 
        <div className="flex  border-spacing-5 bg-slate-200 ">
            <div className="m-5">
                    <img src="https://i.ibb.co/BZZ5WKv/unsplash-Eh-Tc-C9s-YXsw-4.png" alt="" />
            </div> 

                    <div className="m-5">
                    <h2 className=" font-bold hover:font-extrabold">Putin declared to election </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, molestiae?</p>
                    <p> <span>4 hours</span> </p>
                </div>
       </div>      
        <div className="flex  border-spacing-5 bg-slate-200 ">
            <div className="m-5">
                    <img src="https://i.ibb.co/BZZ5WKv/unsplash-Eh-Tc-C9s-YXsw-4.png" alt="" />
            </div> 

                    <div className="m-5">
                    <h2  className="font-bold hover:font-extrabold">Putin declared to election </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, molestiae?</p>
                    <p> <span>4 hours</span> </p>
                </div>
       </div>      
    </div>

{/* Third Column - col-3 */}
<div style={{ flex: '3', padding: '10px', background: '#d9d9d9' }}>
  
      

</div>
</div>

  )
}




