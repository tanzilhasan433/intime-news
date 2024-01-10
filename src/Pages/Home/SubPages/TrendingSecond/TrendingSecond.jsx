import TrendingSecondCard from "../../../../Components/SubComponents/TrendingSecondCard";
import useTrendingSecond from "../../../../hooks/subHooks/useTrendingSecond";
import Opinion from "../Opinion/Opinion";

const TrendingSecond = () => {
  const [trendingsecond] = useTrendingSecond();

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-9 sm:flex-1 p-2 bg-gray-200 border-2">
        <div className="grid grid-cols-1 w-full sm:grid-cols-1 md:grid-cols-2 justify-center gap-2">
        {/* <div className="grid grid-cols-1 h-full w-full sm:grid-cols-1 md:grid-cols-3  gap-2"> */}
          {trendingsecond.map((trendingsecondItem) => (
            <TrendingSecondCard
              key={trendingsecondItem._id}
              trendingsecondItem={trendingsecondItem}
            ></TrendingSecondCard>
          ))}
        </div>
      </div>
      <div className="flex-3 sm:p-2 bg-gray-300 lg:w-1/4 shadow-xl">
        <h2 className="text-2xl bg-slate-400">মতামত</h2>
        <div>
          <Opinion></Opinion>
        </div>
      </div>
    </div>
  );
};

export default TrendingSecond;
