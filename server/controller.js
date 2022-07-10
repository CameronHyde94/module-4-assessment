let customFortune = {};

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Adventure can be real happiness", "All your hard work will soon pay off", "Allow compassion to guide your decisions", "Believe it can be done", "Don't just spend time. Invest it."];
        
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    createFortune: (req, res) => {
        customFortune = req.body;
        res.sendStatus(200);
    },

    getCustomFortune: (req, res) => {
        res.status(200).send(customFortune);
    },

    deleteFortune: (req, res) => {
        customFortune = {};
        res.sendStatus(200);
    }

}