import { useQuery } from "@tanstack/react-query";

const useEntertainment = () => {
    const {data: entertainment = [], refetch} = useQuery({
        queryKey:['entertainment'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/entertainment');
            return res.json();
        }
    })

    return [entertainment, refetch];
};

export default useEntertainment;