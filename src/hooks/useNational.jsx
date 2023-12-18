import { useQuery } from "@tanstack/react-query";

const useNational = () => {
    const {data: national = [], refetch} = useQuery({
        queryKey:['national'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/national');
            return res.json();
        }
    })

    return [national, refetch];
};

export default useNational;