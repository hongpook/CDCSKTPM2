import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { AiFillShopping, AiFillFileText } from 'react-icons/ai';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import { BsPersonFill } from "react-icons/bs";
import jsonServerProvider from 'ra-data-json-server';
import './style.scss'; // Import the CSS file for styling

const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



const Dashboard = () => {

    const [total, setTotal] = useState(0);
    const [totalBlog, setTotalBlogs] = useState(0);

    useEffect(() => {
        const countTotalProducts = async () => {
            try {
                const response = await fetch('http://localhost:3001/products');
                const data = await response.json();
                const totalProducts = data.length;
                setTotal(totalProducts);
            } catch (error) {
                console.error('Đã xảy ra lỗi:', error);
                setTotal(0);
            }
        };

        countTotalProducts();
    }, []);

    useEffect(() => {
        const countTotalBlogs = async () => {
            try {
                const response = await fetch('http://localhost:3001/blogs');
                const data = await response.json();
                const totalBlogs = data.length;
                setTotalBlogs(totalBlogs);
            } catch (error) {
                console.error('Đã xảy ra lỗi:', error);
                setTotalBlogs(0);
            }
        };

        countTotalBlogs();
    }, []);

    return (
        <div className="dashboard">
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card className="dashboard-card">
                        <CardHeader
                            title="Products"
                            avatar={<AiFillShopping className="card-icon" />}
                        />
                        <CardContent>
                            <Typography variant="body2">
                                <h1>{total}: Sản phẩm</h1>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className="dashboard-card">
                        <CardHeader
                            title="Blogs"
                            avatar={<AiFillFileText className="card-icon" />}
                        />
                        <CardContent>
                            <Typography variant="body2">
                                <h1>{totalBlog}: Bài viết</h1>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className="dashboard-card">
                        <CardHeader
                            title="Users"
                            avatar={<BsPersonFill className="card-icon" />}
                        />
                        <CardContent>
                            <Typography variant="body2">
                                {/* Manage all your users here. */}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className="dashboard-card">
                        <CardHeader title="Sales Overview" />
                        <CardContent>
                            <LineChart width={300} height={250} data={data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className="dashboard-card">
                        <CardHeader title="Revenue" />
                        <CardContent>
                            <BarChart width={300} height={250} data={data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className="dashboard-card">
                        <CardHeader title="User Distribution" />
                        <CardContent>
                            <PieChart width={300} height={250}>
                                <Pie
                                    data={pieData}
                                    cx={150}
                                    cy={125}
                                    labelLine={false}
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
