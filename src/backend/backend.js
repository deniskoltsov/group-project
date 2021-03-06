const express = require('express'),
      app = express(),
      cors = require('cors'),
      request = require('request'),
      bodyParser = require('body-parser');
      watson = require('watson-developer-cloud');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/searchtrack', (req, res) => {
  const MUSIXMATCH_KEY = process.env.MUSIXMATCH_KEY;
  console.log('musix', MUSIXMATCH_KEY);
  const url = 'http://api.musixmatch.com/ws/1.1/matcher.track.get?q_track=' + req.body.data.song + '&q_artist=' + req.body.data.artist + '&apikey=' + MUSIXMATCH_KEY;
  request(url, (err, response, body) => {
   res.send(body);
  })
})

app.post('/searchlyrics', (req, res) => {
  const MUSIXMATCH_KEY = process.env.MUSIXMATCH_KEY;
  console.log('musix', MUSIXMATCH_KEY);
  const url = 'http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=' + req.body.data.track_id + '&apikey=' + MUSIXMATCH_KEY;
  request(url, (err, response, body) => {
    res.send(body);
  })
})

app.post('/urban-translation', (req, res) => {
  const MASHAPE_KEY = process.env.MASHAPE_KEY;
  console.log('MASHAPE', MASHAPE_KEY);
  const url = 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + req.body.data.input + '&mashape-key=' + MASHAPE_KEY;
  // console.log('url:', url);
  request(url, (err, response, body) => {
    res.send(body);
  })
})

app.post('/analyze', (req, res) => {
  const url = 'https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?version=2016-05-19&text=' + req.body.data.lyrics;
  console.log('REQ.BODY.DATA.LYRICS:', req.body.data.lyrics);
  console.log('ANALYZE URL:', url)
  request(url, (err, response, body) => {
    res.send(body);
    console.log('ANALYZE BODY:', body);
    console.log('ANALYZE RESPONSE:' ,response)
  })
})

//   'https://watson-api-explorer.mybluemix.net/text-to-speech/api/v1/synthesize?accept=audio%2Fogg%3Bcodecs%3Dopus&voice=en-US_MichaelVoice&text='

app.post('/speech', (req, res) => {
  const url =
  'https://stream.watsonplatform.net/text-to-speech/api' + req.body.data.input
  // console.log('REQ.BODY.DATA.INPUT FROM BACKEND:', req.body.data.input)
  // console.log('TEXT TO SPEECH URL FROM BACKEND:', url)
  request(url, (err, response, body) => {
    res.send(body);
    // console.log('THE BODY OF THE RESPONSE:', body);
    // console.log('THE RESPONSE AFTER THE REQUEST IS MADE FROM BACKEND:', response)
  })
})


PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
  console.log('listening to events on prot:', PORT)
});
