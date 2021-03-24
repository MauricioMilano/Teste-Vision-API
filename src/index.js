let futdb = require("./futdb");
let name = process.argv.slice(2).join(" ");

async function buscaNoMercado(player) {
  let price = await futdb.getPrice(playerId);
  //let playstation = price.playstation;

  if (price && price.data) {
    console.log(
      `${player.common_name || name} ${player.rating} custa ${JSON.stringify(
        price.data.playstation.price
      )} coins`
    );
  } else {
    console.log(
      `${player.common_name || name} ${player.rating} Price error: ${price}`
    );
  }
}

let timeout = async () =>
  setTimeout(() => {
    console.log("timeout");
  }, 5000);

let exec = async () => {
  await futdb
    .getPlayer(name)
    .then((players) => {
      players.data.items.forEach(async (elem) => {
        await timeout();
        await buscaNoMercado(elem);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exec();
