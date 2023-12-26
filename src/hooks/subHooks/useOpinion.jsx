import { useQuery } from "@tanstack/react-query";

const useOpinion = () => {
    const {data: opinion = [], refetch} = useQuery({
        queryKey:['opinion'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/opinion');
            return res.json();
        }
    })

    return [opinion, refetch];

};

export default useOpinion;