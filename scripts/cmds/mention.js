module.exports = {
  config: {
    name: "mention",
    version: "1.0",
    author: "𝙼𝙸𝚁𝙹𝙰𝙵𝙾𝚁",
    role: 0,
    shortDescription: {
      en: "Auto reply when boss is mentioned"
    },
    longDescription: {
      en: "Bot replies when the boss is mentioned"
    },
    category: "owner"
  },

  onStart: async function () { },

  onChat: async function ({ api, event }) {
    const bossUID = "61588374999435"; 

    if (!event.mentions) return;

    if (event.mentions[bossUID]) {
      return api.sendMessage(
        "😈 Boss ekhon busy ache 😌",
        event.threadID,
        event.messageID
      );
    }
  }
};
