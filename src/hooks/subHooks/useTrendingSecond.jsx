import { useQuery } from "@tanstack/react-query";

const useTrendingSecond = () => {
    const {data: trendingsecond = [], refetch} = useQuery({
        queryKey:['trendingsecond'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/trendingsecond');
            return res.json();
        }
    })

    return [trendingsecond, refetch];
};

export default useTrendingSecond;