import { useQuery } from "@tanstack/react-query";

const useTrendingFirst = () => {const {data: trending = [], refetch} = useQuery({
    queryKey:['trendingfirst'],
    queryFn: async () => {
        const res = await fetch('http://localhost:3000/trendingfirst');
        return res.json();
    }
})

return [trending, refetch];
   
};

export default useTrendingFirst;