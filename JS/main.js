// CONSEGNA: 
//stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const { createApp } = Vue
createApp({
    data() {
        return {
            message: "Hello Veu World",
            //BONUS
            image: "./IMG/evan-you-portrait.jpg"
        }
    }
}).mount("#app")

