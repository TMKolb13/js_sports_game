(function() {
//calling out all elements from the DOM that are needed
let team1shoot = document.querySelector("#teamone-shoot");
let team2shoot = document.querySelector("#teamtwo-shoot");
let team1shotcount = document.querySelector("#teamone-numshots");
let team2shotcount = document.querySelector("#teamtwo-numshots");
let team1goals = document.querySelector("#teamone-numhits");
let team2goals = document.querySelector("#teamtwo-numhits");
let reset = document.querySelector("#reset");
let resetNumber = document.querySelector("#num-resets");
let audio = document.querySelector("#sound");


//functionality for team 1 shoot button
team1shoot.addEventListener("click", function(){
  audio.play();
  team1shotcount.innerHTML = parseInt(team1shotcount.innerHTML) + 1;

  //if statement for if the random number is greater than .5, increase goal number
  let randomNumber = Math.random();
  console.log(randomNumber);
  if(randomNumber > .5) {
    team1goals.innerHTML = parseInt(team1goals.innerHTML) + 1;
    }
  }
)


//functionality for team 2 shoot button
team2shoot.addEventListener("click", function(){
  audio.play();
  team2shotcount.innerHTML = parseInt(team2shotcount.innerHTML) + 1;

    //if statement for if the random number says goal, increase goal number
    let randomNumber = Math.random();
    console.log(randomNumber);
    if(randomNumber > .5) {
      team2goals.innerHTML = parseInt(team2goals.innerHTML) + 1;
  }
}
)

//functionality for reset button
reset.addEventListener("click", function(){
  resetNumber.innerHTML = parseInt(resetNumber.innerHTML) + 1;
  team1shotcount.innerHTML = 0;
  team1goals.innerHTML = 0;
  team2shotcount.innerHTML = 0;
  team2goals.innerHTML = 0;
})

})()
