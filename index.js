const http = require('https');

const options = {
    method: 'GET',
    hostname: 'video-game-news.p.rapidapi.com',
    port: null,
    path: '/zelda',
    headers: {
        'x-rapidapi-key': '2ee158bdf0msh9439aa6db898f7fp179a60jsn9e2352907f4a',
        'x-rapidapi-host': 'video-game-news.p.rapidapi.com'
    }
};

const req = http.request(options, function (res) {
    const chunks = [];

    res.on('data', function (chunk) {
        chunks.push(chunk);
    });

    res.on('end', function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.end();
