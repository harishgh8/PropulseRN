## Demo

Check out the [Demo](https://propulse-nursing.vercel.app/), hosted on Vercel.

## Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `npm install`   | Installs dependencies                        |
| `npm run dev`   | Starts local dev server at `localhost:3000`  |
| `npm run build` | Build your production site to `./next/`      |
| `npm run start` | Preview your build locally, before deploying |

## Update Site Metadata

```js
env: {
  siteTitle: "Your Company",
  siteDescription: "Your company description.",
  siteKeywords: "your company keywords",
  siteUrl: "https://propulse-nclex.vercel.app/,
  siteImagePreviewUrl: "/images/preview.jpeg",
  twitterHandle: "@your_handle"
}
```

## Update Colors

You can update the colors in tailwind.config.js file.

## Update Favicon

Update the manifest.json file and the icons under the public/images/icons folder.
