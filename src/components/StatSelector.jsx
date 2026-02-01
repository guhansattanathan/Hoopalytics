const stats = [
  { value: 'PPG', label: 'PPG' },
  { value: 'RPG', label: 'RPG' },
  { value: 'APG', label: 'APG' },
  { value: 'STL', label: 'STL' },
  { value: 'BLK', label: 'BLK' },
  { value: '+/-', label: '+/-' },
];

export default function StatSelector({ selectedStat, onStatChange }) {
  return (
    <div className="w-full bg-gray-900 py-4 flex justify-center flex-wrap gap-3 px-4">
      {stats.map((stat) => (
        <button
          key={stat.value}
          onClick={() => onStatChange(stat.value)}
          className={`
            px-4 py-2 rounded-md font-semibold transition
            ${
              selectedStat === stat.value
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-orange-600 hover:text-white'
            }
          `}
        >
          {stat.label}
        </button>
      ))}
    </div>
  );
}
