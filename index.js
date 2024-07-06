/**
 * Extracts a YouTube video ID from a string input.
 *
 * Expects the input to be a URL string.
 *
 * @param {string} url The string to extract from.
 * @return {string} Video ID, or an empty string on failure.
 */
function extractVideoQueryParam(input) {
  if (typeof input !== 'string') return ''
  if (!URL.canParse(input)) return ''

  const url = new URL(input)
  const search = url.search

  const searchParams = new URLSearchParams(search)
  const videoID = searchParams.get('v')

  if (typeof videoID !== 'string') return ''

  return videoID
}

/**
 * Prompts user to input video id manually.
 *
 * Will return an empty string if user does not provide an input.
 *
 * @returns {string} User's input.
 */
function promptForVideoURL() {
  const promptResults = prompt('Paste a YouTube video URL to open it in Invidious.')

  return typeof promptResults === 'string' ? promptResults : ''
}

/**
 * Get video ID.
 *
 * First, attempts to parse video ID from the window's current location. If no
 * video ID was found, then it will prompt the user to manually paste a URL.
 *
 * @return {string} Video ID, or an empty string on failure.
 */
function getVideoID() {
  const currentURL = window.location.href
  let videoID = extractVideoQueryParam(currentURL)

  if (videoID === '') {
    console.log('No valid YouTube video ID found for current page. Prompting for manual entry...')

    const promptedURL = promptForVideoURL()

    if (typeof promptedURL !== 'string' || promptedURL === '') {
      alert('Missing or empty URL provided; exiting script.')
      throw new Error('Missing or empty URL was provided by user.')
    }

    videoID = extractVideoQueryParam(promptedURL)
  }

  return videoID
}

/**
 * Executes the script.
 */
function run() {
  let videoID = getVideoID()

  if (videoID === '') {
    alert('Could not parse video ID; exiting script.')
    throw new Error('Could not parse video ID.')
  }

  const destinationURL = 'YT2INVIDIOUS_DESTINATIONwatch?v=' + videoID
  window.location.href = destinationURL
}

/**
 * Execute.
 */
run()
