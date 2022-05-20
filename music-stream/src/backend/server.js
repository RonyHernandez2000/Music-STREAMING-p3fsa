const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const SpotifyWebApi = require('spotify-web-api-node');


const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/refresh',(req,res)=> {
    const refreshToken = req.params.refreshToken
})

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifytApi = new SpotifyWebApi({
        redirectUri:'http://localhost:3000',
        clientId:'be4f66a30e1d4762b7b21785ca4555f8',
        clientSecret:'09ad56a651aa43449b596fe96d5c100c'
    })


spotifytApi.authorizationCodeGrant(code).then(data => {
    res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in

        })
    }) .catch((err) => {
        console.error(err)
        res.sendStatus(400)
    })
})

app.listen(3001)