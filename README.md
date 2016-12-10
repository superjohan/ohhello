# Oh, Hello

`ohhello` is a simple app that responds with `HTTP 200` (default) to any incoming request, and prints some info about it. It fits my needs and probably no one else's, but here it is anyway.

### If you want to install the app globally

`npm install -g`, then `ohhello 3000`.

### If you don't want to install the app, thank you very much

`npm install`, then `node index.js 3000`.

## Super advanced usage

`ohhello PORT [STATUSCODE]`

```
rm@remember ~> ohhello 3000 401
Oh, hello! Listening on port 3000, sending HTTP 401 to all requests.
```
