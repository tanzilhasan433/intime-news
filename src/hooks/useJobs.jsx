import { useQuery } from "@tanstack/react-query";

const useJobs = () => {
    const {data: jobs = [], refetch} = useQuery({
        queryKey:['jobs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/jobs');
            return res.json();
        }
    })

    return [jobs, refetch];

};

export default useJobs;