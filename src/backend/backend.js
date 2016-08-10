const express = require('express'),
      app = express(),
      cors = require('cors'),
      request = require('request'),
      bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/searchtrack', (req, res) => {
  const url = 'http://api.musixmatch.com/ws/1.1/matcher.track.get?q_track=' + req.body.data.song + '&q_artist=' + req.body.data.artist + '&apikey=262ed6e47e180f3fe28f5b2e621a5a3f'
  request(url, (err, response, body) => {
   res.send(body);
  })
})

app.post('/searchlyrics', (req, res) => {
  const url = 'http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=' + req.body.data.track_id + '&apikey=262ed6e47e180f3fe28f5b2e621a5a3f';
  request(url, (err, response, body) => {
    res.send(body);
  })
})

app.post('/urban-translation', (req, res) => {
  const url = 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + req.body.data.input + '&mashape-key=PTCbf7suIBmshuOBDhfSKo0RAwZPp1dXj1PjsnMEx2Z5QbSAPV';
  console.log('url:', url);
  request(url, (err, response, body) => {
    res.send(body);
  })
})


app.listen(5000);

console.log('Express server started on port 5000');
