import useLoadPlays from '../../hooks/useLoadPlays'
import { EmptyTileInfo } from '../../layout/EmptyTileInfo'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export const Chart = (gameId) => {
  const { data } = useLoadPlays(gameId)

  return (
    <ResponsiveContainer width="100%" height="100%">
      {data.length === 0 ? (
        <EmptyTileInfo icon="📊" name="Leaderboard" />
      ) : (
        <BarChart
          data={data}
          margin={{
            right: 5,
            left: -25,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            cursor={{ fill: '#fafafa' }}
            content={({ payload }) => (
              <div className="bg-white text-primary border-2 border-primary text-base py-3 px-4 rounded-md shadow-lg">
                <span className="font-bold">
                  {payload && payload[0] != null && payload[0].payload.name}
                </span>
                <span className="text-left block text-tertiary">
                  Wins:{' '}
                  {payload && payload[0] != null && payload[0].payload.Wins | 0}
                </span>
                <span className="text-left block text-error">
                  Loses:{' '}
                  {payload &&
                    payload[0] != null &&
                    payload[0].payload.Loses | 0}
                </span>
              </div>
            )}
          />
          <XAxis dataKey="name" style={{ fill: '#fff', fontSize: 20 }} />
          <YAxis style={{ fill: '#fff', fontSize: 20 }} />
          <Legend wrapperStyle={{ fontSize: '20px' }} />
          <Bar dataKey="Wins" fill="#5cd5dd" />
          <Bar dataKey="Loses" fill="#ff3456" />
        </BarChart>
      )}
    </ResponsiveContainer>
  )
}
