import { useQuery } from "@tanstack/react-query";

const useElectionHome = () => {
    const {data: electionhome = [], refetch} = useQuery({
        queryKey:['electionhome'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/electionhome');
            return res.json();
        }
    })

    return [electionhome, refetch];
};

export default useElectionHome;