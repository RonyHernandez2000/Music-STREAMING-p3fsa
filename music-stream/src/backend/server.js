const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');


const app = express()

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifytApi = new SpotifyWebApi({
        redirectUri:'http://localhost:3000/login',
        clientId:'be4f66a30e1d4762b7b21785ca4555f8',
        clientSecret:'09ad56a651aa43449b596fe96d5c100c'
    })


spotifytApi.authoraztionCodeGrant(code).then(data => {
    res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in

        })
    }) .catch(err => {
        res.sendStatus(400)
    })
})