//Make functions that are goint to fetch some data that we need

// axios is use to make API request
import axios from 'axios';

//url of the api
const url = 'https://covid19.mathdro.id/api';

// we gonna have an asynchronous function
// most modern way to deal with asynchronous data => async / await
export const fetchData = async () =>{
    try {
        //get the data
        //const response = await axios.get(url);
        const {data: {confirmed,recovered,death,lastUpdate} } = await axios.get(url);
        
        return {confirmed,recovered,death,lastUpdate};

    } catch (error) {
        
    }
}

