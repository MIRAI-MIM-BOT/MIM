const axios = require("axios");

module.exports = {
  config: {
    name: "Fack",
    version: "1.0.2",
    prefix: false,
    permission: 0,
    credits: "Farhan",
    description: "Fun",
    category: "no prefix",
    usages: "🙋‍♂️",
    cooldowns: 5,
  },

  handleEvent: async function ({ api, event }) {
    const { threadID, messageID, body } = event;
    if (!body) return;

    const lowerBody = body.toLowerCase();
    const triggerWords = ["🥵", "👅", "fack", "Fack"];

    if (triggerWords.some(word => lowerBody.startsWith(word))) {
      const url = "https://drive.google.com/uc?id=1ta1ujBjmcvxSuYVwQ3oEXIJsnPCW2VZO";
      const res = await axios.get(url, { responseType: "stream" });

      const msg = {
        body: "~কিরে তোরা  কি আর ভালো হবি না, নাকি।😒 >সারা জীবন অস্লিলতা করে গেলি>😈🫵😤 ",
        attachment: res.data
      };

      api.sendMessage(msg, threadID, messageID);
      api.setMessageReaction("🖕", messageID, () => {}, true);
    }
  },

  start: function () {}
};
