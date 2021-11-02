// import functions

// reference needed DOM elements
const roll = document.getElementById('outter-shape');
const cube = document.getElementById('cube');
const fortune = document.getElementById('fortune');

// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)

function randomizeMessage() {
    const messageArray = [
        `It is certain.`, 
        `It is decidedly so.`,
        `Without a doubt.`,
        `Yes definitely.`,
        `You may rely on it`,
        `As I see it, yes.`,
        `Most likely.`,
        `Outlook good.`,
        `Yes.`,
        `Signs point to yes.`,
        `Reply hazy, try again.`,
        `Ask again later.`,
        `Better not tell you now.`,
        `Cannot predict now.`,
        `Concentrate and ask again.`,
        `Don't count on it.`,
        `My reply is no.`,
        `My sources say no.`,
        `Outlook not so good.`,
        `Very doubtful.`
    ];

    const randoNumber = Math.floor(Math.random() * 20);

    return (messageArray[randoNumber]);
}

roll.addEventListener('click', () => {
    roll.classList.add('shake8ball');
    setTimeout(() => {
        roll.classList.remove('shake8ball');
        const message = randomizeMessage();
        fortune.textContent = message;
        cube.classList.add('cubeVisibility');
        setTimeout(() => {
            cube.classList.remove('cubeVisibility');
        }, 3001);
    }, 1001);
    
});

