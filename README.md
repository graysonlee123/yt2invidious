# YT2Invidious

**YT2Invidious** generates a string of text that you can use as a [Bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet). This string of text contains a script that opens a YouTube video in a configured [Invidious](https://invidious.io/) instance.

## Prerequisits

- Node & NPM

## Usage

After downloading, follow these steps.

1. Install dependencies.

```zsh
npm i
```

2. Add dotenv file. Replace `<your-invidious-url>` with the URL of your Invidious instance. Make sure to include the trailing slash.

```zsh
echo 'YT2INVIDIOUS_DESTINATION="<your-invidious-url>"' > .env
```

3. Generate the bookmarklet.

```zsh
npm start
```

This will generate a file named `output.txt`.

4. Copy the contents of `output.txt`, and paste them into the URL field of a bookmark.

5. Try it out!
