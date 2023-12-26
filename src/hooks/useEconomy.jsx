import { useQuery } from "@tanstack/react-query";

const useEconomy = () => {
    const {data: economy = [], refetch} = useQuery({
        queryKey:['economy'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/economy');
            return res.json();
        }
    })

    return [economy, refetch];
};

export default useEconomy;

