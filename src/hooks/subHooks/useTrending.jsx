import { useQuery } from "@tanstack/react-query";

const useTrending = () => {
    const {data: trending = [], refetch} = useQuery({
        queryKey:['trending'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/trending');
            return res.json();
        }
    })

    return [trending, refetch];

};

export default useTrending;

