const rest = require("./rest.service")
const token = "1eb10662-b3bd-4e0a-82d5-70df1bbff87c"
module.exports = { 
    getPlayer(playerName){
        const url = "https://futdb.app/api/players" 
        const payload = {name:playerName}
        rest.post(url, payload, token)
    }, 
    getPrice(playerId){
        
    }
}