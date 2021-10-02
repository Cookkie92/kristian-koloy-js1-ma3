const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=2904233664034c1da06563d6fd16478c"

const resultContainer = document.querySelector(".result");

async function getApi(){
    //fetch

    const response = await fetch (url);
    const result = await response.json();
    const games = result.results;

    resultContainer.innerHTML = "";

    // console.log();

    for(let i = 0; i < games.length; i++){
        

        const tags = games[i].tags;

        var count = 0;

        for(let i = 0; i < tags.length; i++){
            
            count = count+1;
            
             
        }
        console.log(count)
  
        

        if(i === 8) {
            break;
        }

        
        resultContainer.innerHTML+= `<div class="result"> ${games[i].name} | Rating: ${games[i].rating} tags: ${count} </div>`; 
    }
   
// console.log(games);

}

getApi();