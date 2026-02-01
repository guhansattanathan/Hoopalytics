import { useEffect, useState } from "react";
import StatSelector from "./StatSelector";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-[150px]">
    <div className="flex space-x-2">
      <span className="block w-2 h-6 bg-orange-500 animate-bar"></span>
      <span className="block w-2 h-6 bg-orange-500 animate-bar delay-150"></span>
      <span className="block w-2 h-6 bg-orange-500 animate-bar delay-300"></span>
    </div>
  </div>
);


export default function TopPlayersTable() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStat, setSelectedStat] = useState("PPG");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `http://127.0.0.1:8000/?stat=${selectedStat}`;
        const response = await fetch(url);

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(
          `Failed to fetch data. Ensure your backend server is running and CORS is configured: ${err.message}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedStat]);

  if (loading) return <LoadingSpinner />;

  if (error)
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg w-full mt-4">
        <p className="font-bold">Error Loading Data</p>
        <p className="text-sm">{error}</p>
      </div>
    );

  if (!data || !data.top_merge_sorted || data.top_merge_sorted.length === 0)
    return <p className="p-4 text-center text-gray-500 w-full">No top player data available.</p>;

  const { stat, top_merge_sorted } = data;

  return (
    <div className="w-full">
      {/* Full-width Stat Selector */}
      <StatSelector
        selectedStat={selectedStat}
        onStatChange={setSelectedStat}
      />

      {/* Page Header */}
      <div className="w-full bg-gray-900 py-8 flex flex-col items-center text-center border-b border-gray-700">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 uppercase mb-2">
          Top 10 Players by {stat}
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-black/90">
            <tr>
              <th className="px-4 py-2 text-xs font-semibold text-white uppercase tracking-wider text-left">
                Rank
              </th>
              <th className="px-4 py-2 text-xs font-semibold text-white uppercase tracking-wider text-left">
                Player
              </th>
              <th className="px-4 py-2 text-xs font-semibold text-white uppercase tracking-wider text-left">
                {stat}
              </th>
              <th className="px-4 py-2 text-xs font-semibold text-white uppercase tracking-wider text-left">
                PPG
              </th>
              <th className="px-4 py-2 text-xs font-semibold text-white uppercase tracking-wider text-left">
                RPG
              </th>
              <th className="px-4 py-2 text-xs font-semibold text-white uppercase tracking-wider text-left">
                FG%
              </th>
              <th className="px-4 py-2 text-xs font-semibold text-white uppercase tracking-wider text-left">
                3P%
              </th>
              <th className="px-4 py-2 text-xs font-semibold text-white uppercase tracking-wider text-left">
                FT%
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {top_merge_sorted.slice(0, 10).map((player, index) => (
              <tr
                key={player.Player}
                className="hover:bg-gray-100 transition duration-150 ease-in-out"
              >
                <td className="px-4 py-2 text-sm text-gray-800 font-medium text-left">
                  {index + 1}
                </td>
                <td className="px-4 py-2 text-sm text-gray-900 font-semibold text-left">
                  {player.Player}
                </td>
                <td className="px-4 py-2 text-sm text-orange-600 font-extrabold text-left">
                  {player[stat]?.toFixed(1) || "0.0"}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 text-left">
                  {player.PPG.toFixed(1)}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 text-left">
                  {player.RPG.toFixed(1)}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 text-left">
                  {player["FG%"].toFixed(1)}%
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 text-left">
                  {player["3P%"].toFixed(1)}%
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 text-left">
                  {player["FT%"].toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
