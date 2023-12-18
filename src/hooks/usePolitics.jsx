import { useQuery } from "@tanstack/react-query";

const usePolitics = () => {
    const {data: politics = [], refetch} = useQuery({
        queryKey:['politics'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/politics');
            return res.json();
        }
    })

    return [politics, refetch];
    

};

export default usePolitics;