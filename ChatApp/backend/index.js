const express = require("express");
const cors = require("cors");
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username:username, secret: username},
        {headers:{"private-key":"044883d4-589a-4eb8-8507-86755ad325b8"}}
    )
    return res.status(r.status).json(r.data)
  }catch(e){
    console.log(e);
    return res.status(e?.response.status || 500).json(e?.response.data|| "internal server Error")
}


});

app.listen(3001);