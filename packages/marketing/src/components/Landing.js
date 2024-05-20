// src/components/Landing.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Card, CardContent, Typography } from '@mui/material';

const courses = [
    { id: 1, title: 'Course 1', description: 'Description for Course 1', price: '$19.99' },
    { id: 2, title: 'Course 2', description: 'Description for Course 2', price: '$24.99' },
    { id: 3, title: 'Course 3', description: 'Description for Course 3', price: '$29.99' },
    // Add more courses as needed
];

// Function to generate a random image URL
const getRandomImage = () => {
    // Placeholder image API
    const placeholderAPI = 'https://picsum.photos/200/300';
    return `${placeholderAPI}?random=${Math.floor(Math.random() * 1000)}`;
};

const Landing = () => {
    return (
        <div>
            <h1>Welcome to Our Website</h1>
            <Button component={Link} to="/pricing" variant="contained" color="primary">
                Go to Pricing
            </Button>
            <h2>Our Courses</h2>
            <Grid container spacing={2}>
                {courses.map(course => (
                    <Grid item xs={12} sm={6} md={4} key={course.id}>
                        <Card>
                            <img src={getRandomImage()} alt="Course" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {course.title}
                                </Typography>
                                <Typography color="textSecondary">
                                    {course.description}
                                </Typography>
                                <Typography color="textSecondary">
                                    Price: {course.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Landing;