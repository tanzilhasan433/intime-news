import { useQuery } from "@tanstack/react-query";

const useLatest = () => {
    const {data: latest = [], refetch} = useQuery({
        queryKey:['latest'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/latest');
            return res.json();
        }
    })

    return [latest, refetch];
};

export default useLatest;