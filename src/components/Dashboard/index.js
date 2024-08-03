
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import './index.css';

const data = [
  { name: '6/30/2024 - 7/6/2024', orders: 4, sales: 1404 },
  { name: '7/7/2024 - 7/13/2024', orders: 2, sales: 700 },
  { name: '7/14/2024 - 7/20/2024', orders: 1, sales: 350 },
];

const pieData = [
  { name: 'WooCommerce Store', value: 44.2 },
  { name: 'Shopify Store', value: 55.8 },
];

const COLORS = ['#00C49F', '#FFBB28'];

const Dashboard = () => {
  return (
    <div className="dashboard">
        <h1 className='size'>Created by:Rakesh Pabbathi</h1>
      <div className="chart-container">
        <h2>Sales vs Orders <i className="info-icon">i</i></h2>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="orders" stroke="#8884d8" />
          <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
        </LineChart>
      </div>
      <div className="chart-container">
        <h2>Portion of Sales <i className="info-icon">i</i></h2>
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            cx={200}
            cy={200}
            labelLine={false}
            label
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div className="pie-legend">
          <div><span className="legend-color" style={{ background: COLORS[0] }}></span>WooCommerce Store</div>
          <div><span className="legend-color" style={{ background: COLORS[1] }}></span>Shopify Store</div>
        </div>
        <div className="total-sales">
          <h3>Total</h3>
          <p>2659</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
