import { useQuery } from "@tanstack/react-query";

const useInternational = () => {
    const {data: international = [], refetch} = useQuery({
        queryKey:['international'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/international');
            return res.json();
        }
    })

    return [international, refetch];
};

export default useInternational;