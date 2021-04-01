import React from 'react';
import {Chart, Cards, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api'; 
import coronaImage from './Images/covid.png'


class App extends React.Component{
    
    //Constructor()
    state = {
        data:{},
        country: '',
    }
    

    // the best place to fetch the data is class-based components:
    //in the componentDidMount 
    async componentDidMount(){
        // make request to fetch data:
        const fetchedData = await fetchData();
        
        this.setState({ data : fetchedData });
    }

    handlCountryChange = async(country) => {
        // fetch the data
        const fetchedData = await fetchData(country);
        
        //set the state
        this.setState({ data : fetchedData, country: country });
    }

    render(){
        const {data, country} = this.state;
        return(
            // className={styles.container} => make sure that we dont have any interferece 
            //with any others css file accross our whole file system
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt='CoronaImage!'/>
                <Cards data={data} />
                <CountryPicker handlCountryChange={this.handlCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        );
    }
}

export default App;