# Oh, Hello

`ohhello` is a simple app that responds with `HTTP 200` (default) to any incoming request, and prints some info about it. It fits my needs and probably no one else's, but here it is anyway.

`npm install`, then `node index.js 3000`.

### Super advanced usage

`node index.js PORT [STATUSCODE]`

```
rm@werq ~/ohhello> node index.js 3000 401
Oh, hello! Listening on port 3000, sending HTTP 401 to all requests.
```
