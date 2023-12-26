import { useQuery } from "@tanstack/react-query";

const useAwamiLeague = () => {
    const {data: trending = [], refetch} = useQuery({
        queryKey:['trending'],
        queryFn: async () => {
            const res = await fetch('');
            return res.json();
        }
    })

    return [trending, refetch];
};

export default useAwamiLeague;