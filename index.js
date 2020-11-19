const login = require("facebook-chat-api");
const axios = require("axios");
 
login({email: "hipcute24@gmail.com", password: "linhvoheu2097"}, (err, api) => {
    if(err) return console.error(err);
 
    api.listen((err, message) => {
      axios.get('http://api.minhhieu.asia/vi.php',{params:{text:message.body}})
      .then( response =>{
        api.sendMessage(response.data, message.threadID);
      } )
 
    });
});
 
