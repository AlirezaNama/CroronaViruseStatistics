//Make functions that are goint to fetch some data that we need

// axios is use to make API request
import axios from 'axios';

//url of the api
const url = 'https://covid19.mathdro.id/api';

// we gonna have an asynchronous function
// most modern way to deal with asynchronous data => async / await
export const fetchData = async (country) =>{
    
    let changeableUrl = url; 
    if(country){
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        //get the data
        //const response = await axios.get(url);
        const {data: {confirmed,recovered,deaths,lastUpdate} } = await axios.get(changeableUrl);
        
        return {confirmed,recovered,deaths,lastUpdate};

    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async ()=>{
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData =  data.map((dailyData)=> ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () =>{
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country)=> country.name);

    } catch (error) {
        console.log(error);
    }
}

