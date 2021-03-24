const request = require("./request_service");

module.exports = {
  getPlayer: async (player) => {
    try {
      return await request.post("https://futdb.app/api/players", {
        name: player,
      });
    } catch (err) {
      console.log(err);
    }
  },

  getPrice: async (playerId) => {
    try {
      return await request.post(
        `https://futdb.app/api/players/${playerId}/price`,
        {}
      );
    } catch (err) {
      console.log(err);
    }
  },
};
