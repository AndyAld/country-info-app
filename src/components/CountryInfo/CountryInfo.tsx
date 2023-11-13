import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Grid, CircularProgress, Box } from '@mui/material';


interface Country {
    name: string;
    capital: string;
    population: number;
    region: string;
    flag: string;
}
interface CountryInfoProps {
    searchTerm: string;
}

const CountryInfo: React.FC<CountryInfoProps> = ({ searchTerm }) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all')
            .then(response => {
                setCountries(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <CircularProgress />;
    return (
        <Grid container spacing={3}>
            {countries.map((country, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card sx={{ boxShadow: 2}}>
                        <CardMedia
                            component="img"
                            sx={{
                                padding: '0 0px', // Add padding to the left and right of the image
                                height: 140,
                                // width: 'calc(height*2)', // Set a fixed height for your images
                                objectFit: 'contain', // Add this to prevent stretching of your flags
                              }}
                            image={country.flag}
                            alt={`Flag of ${country.name}`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                {country.name}
                            </Typography>
                            <Typography variant="body2" component="p" sx={{ paddingBottom: '4px' }}>
                                <Box component="span" fontWeight="fontWeightBold" color="text.primary">
                                    Population:{" "}
                                </Box>
                                <Box component="span" color="text.secondary">
                                    {country.population.toLocaleString()}
                                </Box>
                            </Typography>
                            <Typography variant="body2" component="p" sx={{ paddingBottom: '4px' }}>
                                <Box component="span" fontWeight="fontWeightBold" color="text.primary">
                                    Region:{" "}
                                </Box>
                                <Box component="span" color="text.secondary">
                                    {country.region}
                                </Box>
                            </Typography>
                            <Typography variant="body2" component="p" sx={{ paddingBottom: '4px' }}>
                                <Box component="span" fontWeight="fontWeightBold" color="text.primary">
                                    Capital:{" "}
                                </Box>
                                <Box component="span" color="text.secondary">
                                    {country.capital}
                                </Box>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default CountryInfo;
