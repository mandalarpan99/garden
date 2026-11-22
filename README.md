# A Garden for Two

A responsive English-language memory capsule built with React and Vite.

## Run it

Use Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

The build produces `dist/`. Upload that directory to a static host to share the finished site. The site requires no backend.

## Make it yours

| What to change | Where |
| --- | --- |
| Username, password, demo hint, headlines, memories, letter and flower notes | `src/content.js` |
| Theme colors and typography | Theme variables at the top of `src/styles.css` |
| Spacing, layout and responsive behavior | Named section blocks in `src/styles.css` |
| Markup for each section | `src/sections/` |
| Photos | `public/images/` |
| Browser title and page description | `index.html` |

The sample memories are suggestions. Replace them with real moments, reorder the entries or add more entries with unique IDs. Place a photo in `public/images/`, change the matching `image('')` to `image('your-photo.jpg')`, and add a short description in `alt`. Empty image names display flower illustrations. The hero image uses the same folder.

The demo username is **myflower**, and the password is **bloom**. Change both values and clear the hint before gifting. The garden locks again when the page is refreshed or when the visitor uses **Lock the garden**.

The lock is a browser-only surprise gate. The deployed source and assets can be inspected, including the credentials. Use a dedicated, non-sensitive phrase and avoid real birth dates or reused passwords. For private photos or notes, use a host with authenticated access and grant access to the intended recipient.

## Album, surprise cards and music

- Edit `album.photos` in `src/content.js` to add your own pictures. Copy photos into `public/images/`, set the entries to `image('your-photo.jpg')`, and edit each title, caption and alt description. The album includes four flower illustrations as placeholders.
- Edit `surprises.cards` to personalize the tap-to-open cards. Use unique IDs when adding entries.
- The original instrumental loop is off until someone taps **Play music**. To replace it, place an MP3 in `public/audio/`, then update `music.source` in `src/content.js`.

## Bloom garden, date ideas and click sounds

- Edit `bloom` and `wishes` in `src/content.js` to personalize the seed names, final note and date ideas. A date choice stays on the open page and clears on reload.
- Set `effects.enabledByDefault` to `false` to start with click sounds muted. The on-page switch controls click effects independently of the background music. Effects are synthesized in the browser after a tap or click.
