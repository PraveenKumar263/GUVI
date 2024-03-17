// XML-HTTP Request (XHR): If interaction has been done
// based on the API then it is called the XML-HTTP request. (to extract data from server)

// 4 Step Process

// Step 1: Create a XHR Object
var request = new XMLHttpRequest()


// Step 2: Initate a requst / Open a request
// Indicates the API your using to extract data
request.open("GET", "https://restcountries.com/v3.1/all")

// Step 3: Trigger a request
request.send()

// Step 4: If server response is successful
// Onload is an Event
// Event is used to perform a specific action/task
// here onload is used since the data has been loaded successfully
request.onload = function () {
    // Use JSON parser converts json string to JavaScript value or object
    var res = JSON.parse(request.response)
    console.log(res)

    // Get all the countries from Asia continent /region using Filter function
    var countries_asia = res.filter(ele=>ele.region==='Asia').map(ele=>ele.name.common);
    console.log(countries_asia);

    // Get all the countries with a population of less than 2 lakhs using Filter function
    var pop_less_200k = res.filter(ele=>ele.population < 200000).map(ele=>ele.name.common);
    console.log(pop_less_200k);

    // Print the following details name, capital, flag, using forEach function
    res.forEach(ele => {
        console.log(ele.name.common);
        if(ele.capital) {
            console.log(ele.capital['0']);
        }
        console.log(ele.flag);
    });

    // find the sum of total population for all countries
    var total_pop = res.reduce((acc,ele)=>acc+ele.population, 0);
    console.log(total_pop);

    // Print the country that uses US dollars as currency.
    var us_dollars_countries = res.filter(ele=> {
        if(ele.currencies) {
            return ele.currencies.USD;
        }
    }).map(ele=>ele.name.common);
    console.log(us_dollars_countries);

    // // Print all the counties name in the array
    // var data = res.map((ele)=>ele.name.common);
    // // console.log(data);

    // // // print country names which are in europe region
    // // var data2 = res.reduce((acc, ele) => {
    // //     if (ele.region === 'Europe') {
    // //         acc.push(ele.name.common);
    // //     }
    // //     return acc;
    // // }, []);
    // // // alternative
    // var data2=res.filter((ele)=>ele.region === 'Europe').map((ele)=>ele.name.common);
    // // console.log(data2);

    // // print capital of those coutnried whose area is more than 100000 sq km

    // var capital_100k = res.filter((ele)=>ele.area>100000).map((ele)=>(ele.capital));
    // console.log(capital_100k);



}