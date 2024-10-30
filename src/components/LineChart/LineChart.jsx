

import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";

const studentResults = [
  {
    id: 1,
    name: "Alice",
    Math: 78,
    Science: 85,
    English: 92,
    History: 70,
    Art: 88,
  },
  {
    id: 2,
    name: "Bob",
    Math: 65,
    Science: 73,
    English: 80,
    History: 68,
    Art: 76,
  },
  {
    id: 3,
    name: "Charlie",
    Math: 90,
    Science: 88,
    English: 94,
    History: 85,
    Art: 92,
  },
  {
    id: 4,
    name: "Daisy",
    Math: 55,
    Science: 60,
    English: 68,
    History: 72,
    Art: 75,
  },
  {
    id: 5,
    name: "Ethan",
    Math: 82,
    Science: 78,
    English: 89,
    History: 80,
    Art: 85,
  },
  {
    id: 6,
    name: "Fiona",
    Math: 75,
    Science: 70,
    English: 80,
    History: 85,
    Art: 90,
  },
  {
    id: 7,
    name: "George",
    Math: 88,
    Science: 92,
    English: 95,
    History: 78,
    Art: 80,
  },
  {
    id: 8,
    name: "Hannah",
    Math: 70,
    Science: 65,
    English: 72,
    History: 75,
    Art: 78,
  },
  {
    id: 9,
    name: "Ian",
    Math: 85,
    Science: 90,
    English: 88,
    History: 84,
    Art: 83,
  },
  {
    id: 10,
    name: "Jade",
    Math: 92,
    Science: 95,
    English: 97,
    History: 90,
    Art: 94,
  },
];



  export default function LineChart() {
    return (
      <LChart
        width={1000}
        height={500}
        data={studentResults}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis dataKey={"English"}></YAxis>
        <Line
          type="monotone"
          dataKey="English"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        {/* <Line type="monotone" dataKey="Science" stroke="#82ca9d" /> */}
      </LChart>
    );
  }

