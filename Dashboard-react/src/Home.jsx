import React from "react";
import { RiDrinks2Fill } from "react-icons/ri";
import { BiAnalyse } from "react-icons/bi";
import { BiDish } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import "./Home.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,BarChart,Bar,
} from "recharts";



function Home() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const data2 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>Dashbord</h3>
      </div>
      <div className="sections-container">
        <div>
          <div>
            <h2>Dishes</h2>
            <h2>20</h2>
          </div>
          <div>
            <BiDish className="icon" />
          </div>
        </div>
        <div>
          <div>
            <h2>Orders</h2>
            <h2>134</h2>
          </div>
          <div>
            <MdFavoriteBorder className="icon" />
          </div>
        </div>
        <div>
          <div>
            <h2>Drinks</h2>
            <h2>46</h2>
          </div>
          <div>
            <RiDrinks2Fill className="icon" />
          </div>
        </div>
        <div>
          <div>
            <h2>Analyses</h2>
            <h2>241</h2>
          </div>
          <div>
            <BiAnalyse className="icon" />
          </div>
        </div>
      </div>
      <div className="charts">
        <ResponsiveContainer width="50%" height="100%" className="chart-graphic">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="50%" height="100%" className="chart-graphic" >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
