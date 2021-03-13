import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
// *** insted of type one by one to import our files we can use code below:
// to make it works, inside the components folder make index.js file 
//this file is gonna take all the components and export them from the components
import {Chart, Cards, CountryPicker} from './components';

import styles from './App.module.css';

// we dont need to write ./api/index.js (just folerName)
// automatically it will goes to the index file
import {fetchData} from './api'; 


class App extends React.Component{
    
    //Constructor()
    state = {
        data:{},
    }
    
    // the best place to fetch the data is class-based components:
    //in the componentDidMount 
    async componentDidMount(){
        // make request to fetch data:
        const fetchedData = await fetchData();
        
        this.setState({ data : fetchedData })
    }

    render(){
        const {data} = this.state;
        return(
            // className={styles.container} => make sure that we dont have any interferece 
            //with any others css file accross our whole file system
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker/>
                <Chart/>
            </div>
        )
    }
}

export default App;