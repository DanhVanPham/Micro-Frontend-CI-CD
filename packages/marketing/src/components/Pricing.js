// pricing/src/components/Pricing.js
import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

const Pricing = () => {
    return (
        <div>
            <h1>Pricing Options</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Free
                            </Typography>
                            <Typography color="textSecondary">
                                Access to basic features
                            </Typography>
                            <Typography color="textSecondary">
                                Price: $0/month
                            </Typography>
                            <Button variant="contained" color="primary">
                                Select
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Monthly Plan
                            </Typography>
                            <Typography color="textSecondary">
                                Access to premium features
                            </Typography>
                            <Typography color="textSecondary">
                                Price: $10/month
                            </Typography>
                            <Button variant="contained" color="primary">
                                Select
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Yearly Plan
                            </Typography>
                            <Typography color="textSecondary">
                                Access to premium features
                            </Typography>
                            <Typography color="textSecondary">
                                Price: $100/year
                            </Typography>
                            <Button variant="contained" color="primary">
                                Select
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Pricing;
