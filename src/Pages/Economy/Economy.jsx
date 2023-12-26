import EconomyCard from "../../Components/EconomyCard";
import useEconomy from "../../hooks/useEconomy";


const Economy = () => {
    const [economy] = useEconomy();
    return (
        <div  className="mt-10" style={{ display: 'flex', width: '100%' }}>
        <div  style={{ flex: '8', padding: '5px', background: '#f2f2f2', border: '5px' }}>
            
        <div className='grid pt-10 mb-10 md:grid-cols-2 justify-center gap-2'>
            {
                economy.map(economyItem => <EconomyCard
                    key={economyItem._id}
                    economyItem={economyItem}
                ></EconomyCard>)
            }
        </div>

        </div>
        <div  style={{ flex: '4', padding: '10px', background: '#e6e6e6', width: '50%', height:'50%', shadow: 'xl'  }}>
            
        </div>
    </div>
    );
};

export default Economy;