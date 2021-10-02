const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=2904233664034c1da06563d6fd16478c"

const resultContainer = document.querySelector(".result");

async function getApi(){
// checking for errors with try
    try {
        //connecting to API
        const response = await fetch (url);

        const result = await response.json();
//finding the info
        const games = result.results;
        
    resultContainer.innerHTML = "";


    for(let i = 0; i < games.length; i++){
        
//counting number of tags
        const tags = games[i].tags;

        let count = 0;

        for(let i = 0; i < tags.length; i++){
            
            count = count+1;
            
        }
        // console.log(count)
  
        
//stopping the loop at 8
        if(i === 8) {
            break;
        }

//deploying the info        
        resultContainer.innerHTML+= `<div class="result"> ${games[i].name} | Rating: ${games[i].rating} tags: ${count} </div>`; 
    }
   
// catching error 
    }   catch (error) {
        console.log("error occured", error);
        resultContainer.innerHTML = "This didnt go as planned";
    }

}

getApi();

//catching other error
try {
    getApi();
    console.log("success");
}
catch(error) {
    console.log("error occured", error);
    resultContainer.innerHTML = "This didnt go as planned";
}