const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=2904233664034c1da06563d6fd16478c";

const resultContainer = document.querySelector(".result");

async function getApi() {
  // checking for errors with try
  try {
    //connecting to API
    const response = await fetch(url);

    const result = await response.json();
    console.log(result);
    //finding the info
    const games = result.results;
    //displaying loader
    resultContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
      //counting number of tags
      //games[i].tags.length = counts the number of tags

      if (i === 8) {
        //stops after 8 has been reached
        break;
      }

      //deploying the info
      resultContainer.innerHTML += `<div class="result"> ${games[i].name} | Rating: ${games[i].rating} tags: ${games[i].tags.length} </div>`;
    }

    // catching error
  } catch (error) {
    console.log("error occured", error);
    resultContainer.innerHTML = "This didnt go as planned";
  }
}

getApi();

// sucky shit code below

//catching other error
// try {
//   getApi();
//   console.log("success");
// } catch (error) {
//   console.log("error occured", error);
//   resultContainer.innerHTML = "This didnt go as planned";
// }

//let count = 0;

// for(let i = 0; i < tags.length; i++){

//     count = count+1;

// }
// console.log(count)
// const tags = games[i].tags;

// tags = 0

// for(let i = 0; i < tags.length; i++){

//     tags = tags+1

//stopping the loop at 8
//   const tags = games[i].tags;
