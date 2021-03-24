const axios = require('axios');

module.exports = {
    get: (url, token = '')=>{
        try{ 
            axios.get(url,{
                headers:{
                    "X-AUTH-TOKEN": token
                }
            })
        }catch(err){
            console.error("RestService :: GET :: Erro no get :: "+  err.status)
        }
    },
    post: (url, body, token = '')=>{
        try{ 
            axios.post(url,body,{
                headers:{
                    "X-AUTH-TOKEN": token
                }
            })
        }catch(err){
            console.error("RestService :: POST :: Erro no post :: "+  err.status)
        }
        
    }
}