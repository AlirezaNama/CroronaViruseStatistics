import React from 'react';
import CountUp from 'react-countup'; 
import Styles from './Cards.module.css';
// to apply multiple classes for an element
import cx from 'classnames';

//import from material-ui
import{ Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import { cleanup } from '@testing-library/react';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed){
        return "Loading ...";
    }
    return(
//xs(screen extra small) = size for the mobile devices => {12} = full width of screen
//md = for the medium and uper devices we need 3 spaces out of 12
        <div className={Styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(Styles.card, Styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end ={confirmed.value} duration= {2.5} separator= "," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(Styles.card, Styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                            </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>                
                <Grid item component={Card} xs={12} md={3} className={cx(Styles.card, Styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}

export default Cards;