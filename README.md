<h1 align="center">Screens API</h1>

<br>

<p align="center">
  <b>An api for taking screenshots of any website with custom dimensions
  </b>
  <br>
</p>

<p align="center">
  <img width="150px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1658183164/yassi/mgkhs4y9ydmoyjyozulf.svg" align="center" alt="nodejs" />
  &nbsp; &nbsp; &nbsp;
  <img width="200px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1662120635/yassi/r923h19buxqfs5ouzzf6.svg" align="center" alt="express" />
  &nbsp; &nbsp; &nbsp;
  <img width="100px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1662905754/yassi/dzvmfxeai0y1ovwgaryo.png" align="center" alt="express" />
  <br>
</p>

<br>
<br>

![📟](https://res.cloudinary.com/ydevcloud/image/upload/v1656874185/asm9cp84cbuuqmarw9wq.png)

**_I made a old version of this app using [Node.js](https://nodejs.org/) (backend) & [NuxtJS](https://nuxtjs.org) (frontend) see more in [repository](https://github.com/Ysn4Irix/webselfie)_**

## ❯ Usage

Requires Node.js 15.0 or higher download & install for [Windows](https://nodejs.org/en/download/) or [Linux](https://nodejs.org/en/download/)

You can make a `GET` request to [https://screens.ysnirix.live/api/alive](https://screens.ysnirix.live/api/alive) to check the api status

```sh
curl --request GET \
  --url 'https://screens.ysnirix.live/api/alive'
```

```json
# Example response
{
  "message": "🎉I'm alive",
  "error": false,
  "results": {
    "upTime": "7 minutes, 46 seconds"
  }
}
```

You can make a `POST` request to [https://screens.ysnirix.live/api/screenshot](https://screens.ysnirix.live/api/screenshot) to take a screenshot on the specified url & dimensions values :

-   url: the website url
-   width: the image width
-   height: the image height

```sh
curl -X POST \
  'https://screens.ysnirix.live/api/screenshot' \
  --header 'Accept: application/json' \
  --header 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.26 Safari/537.36' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "url": "https://youtube.com",
  "height": "600",
  "width": "800"
}'
```

```json
# Example response
{
  "message": "🎉 Done",
  "error": false,
  "code": 200,
  "results": {
    "base64": // the image in base64 format
  }
}
```

### Development

Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

-   rename .env.example to .env add replace PORT (optional)

```sh
# start the dev server
npm run dev

# format
npm run format
```

### Production

```sh
# start the production server
npm start
```

<br>

![🙌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/connect.png)

## ❯ About

#### Author

**Ysn4Irix**

-   [GitHub Profile](https://github.com/Ysn4irix)
-   [Instagram Profile](https://instagram.com/ysn.irix)

<br>

![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/license.png)

## ❯ License

Copyright © 2022-present, [Ysn4Irix](https://github.com/Ysn4Irix).
Released under the [MIT License](LICENSE).
