import { useQuery } from "@tanstack/react-query";

const useSports = () => {
    const { isLoading, refetch, data: sports = [] } = useQuery({
        queryKey: ['sports'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/sports-item')            
            return res.json()
        },
    },
    )
    return [sports,isLoading,refetch];
};

export default useSports;