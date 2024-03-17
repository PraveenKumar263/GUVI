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

    // Print all hte counties name in the array
    var data = res.map((ele)=>ele.name.common);
    // console.log(data);

    // // print country names which are in europe region
    // var data2 = res.reduce((acc, ele) => {
    //     if (ele.region === 'Europe') {
    //         acc.push(ele.name.common);
    //     }
    //     return acc;
    // }, []);
    // // alternative
    var data2=res.filter((ele)=>ele.region === 'Europe').map((ele)=>ele.name.common);
    // console.log(data2);

    // print capital of those coutnried whose area is more than 100000 sq km

    var capital_100k = res.filter((ele)=>ele.area>100000).map((ele)=>(ele.capital));
    console.log(capital_100k);

    // find the sum of total population for all countries
    var total_pop = res.reduce((acc,ele)=>acc+ele.population, 0);
    console.log(total_pop);

}