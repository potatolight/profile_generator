const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  let arr = []

  rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
    arr.push(answer)
    rl.question("What's an activity you like doing?", (answer) => {
      arr.push(answer)
      rl.question("What do you listen to while doing that? ", (answer) => {
        arr.push(answer)
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
          arr.push(answer)
          rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
            arr.push(answer)
            rl.question("Which sport is your absolute favourite? ", (answer) => {
              arr.push(answer)
              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
                arr.push(answer)
                 console.log(`Thank you for your valuable feedback: ${arr.join(', ')}`);
                 rl.close();
              })
            })

          })
        })
      })
    })
   
  }); 

