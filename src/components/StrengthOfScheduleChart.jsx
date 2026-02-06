import { useEffect, useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import axios from "axios";

export default function StrengthOfScheduleChart() {
  const [data, setData] = useState([]);
  const [yMetric, setYMetric] = useState("winPct");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/reality-check");

        const formatted = res.data.map((team) => ({
          team: team.Team,
          conference: team.Conference,
          sos: Number(team.SoS),
          winPct: Number(team["WIN%"]),
          eWinPct: Number(team["eWIN%"]),
          gp: Number(team.GP),
        }));

        setData(formatted);
      } catch (err) {
        console.error("Failed to fetch SoS data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex justify-center my-10">
      {/* Chart card */}
      <div className="w-full max-w-6xl bg-black rounded-xl p-6 shadow-xl">
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setYMetric("winPct")}
            className={`px-4 py-1 rounded font-semibold ${
              yMetric === "winPct"
                ? "bg-orange-400 text-black"
                : "bg-gray-700 text-white"
            }`}
          >
            WIN%
          </button>
          <button
            onClick={() => setYMetric("eWinPct")}
            className={`px-4 py-1 rounded font-semibold ${
              yMetric === "eWinPct"
                ? "bg-orange-400 text-black"
                : "bg-gray-700 text-white"
            }`}
          >
            Expected WIN%
          </button>
        </div>

        {/* Chart */}
        <div className="w-full h-[460px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 30, bottom: 30, left: 30 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />

              <XAxis
                type="number"
                dataKey="sos"
                tick={{ fill: "#ccc" }}
                label={{
                  value: "Strength of Schedule",
                  position: "bottom",
                  fill: "#aaa",
                }}
              />

              <YAxis
                type="number"
                dataKey={yMetric}
                domain={[0, 1]}
                tick={{ fill: "#ccc" }}
                label={{
                  value: yMetric === "winPct" ? "Win %" : "Expected Win %",
                  angle: -90,
                  position: "left",
                  fill: "#aaa",
                }}
              />

              <ZAxis type="number" dataKey="gp" range={[120, 600]} name="Games Played" />

              {/* Reference Lines */}
              <ReferenceLine x={0} stroke="#666" />
              <ReferenceLine y={0.5} stroke="#666" />

              {/* Quadrant Labels */}
              <text x="75%" y="20%" fill="#4ade80" fontSize={12}>
                Tough Schedule, Winning
              </text>
              <text x="75%" y="80%" fill="#f87171" fontSize={12}>
                Tough Schedule, Struggling
              </text>
              <text x="25%" y="20%" fill="#60a5fa" fontSize={12}>
                Easy Schedule, Winning
              </text>
              <text x="25%" y="80%" fill="#facc15" fontSize={12}>
                Easy Schedule, Struggling
              </text>

              {/* Tooltip */}
              <Tooltip
                content={({ payload }) => {
                  if (!payload || !payload.length) return null;
                  const d = payload[0].payload;

                  return (
                    <div className="bg-black border border-white/20 rounded-md p-3 text-sm text-white">
                      <p
                        className={`font-semibold ${
                          d.conference === "East" ? "text-blue-400" : "text-orange-400"
                        }`}
                      >
                        {d.team}
                      </p>
                      <p>WIN%: {(d.winPct * 100).toFixed(1)}%</p>
                      <p>Expected WIN%: {(d.eWinPct * 100).toFixed(1)}%</p>
                      <p>SoS: {d.sos}</p>
                      <p>GP: {d.gp}</p>
                      <p className="mt-1 text-xs text-white/60">
                        Over/Under: {(d.winPct - d.eWinPct).toFixed(3)}
                      </p>
                    </div>
                  );
                }}
              />

              {/* Scatter Points */}
              <Scatter
                name="East"
                data={data.filter((d) => d.conference === "East")}
                fill="#60a5fa"
                shape="circle"
              />
              <Scatter
                name="West"
                data={data.filter((d) => d.conference === "West")}
                fill="#fb923c"
                shape="circle"
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
