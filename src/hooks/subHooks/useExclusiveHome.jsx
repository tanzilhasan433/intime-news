import { useQuery } from "@tanstack/react-query";

const useExclusiveHome = () => {
    const {data: exclusive = [], refetch} = useQuery({
        queryKey:['exclusive'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/exclusive');
            return res.json();
        }
    })

    return [exclusive, refetch];
};

export default useExclusiveHome;