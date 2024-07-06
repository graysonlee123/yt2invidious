;(function openInInvidious() {
  const currentURL = window.location
  const currentSearch = currentURL.search
  const searchParams = new URLSearchParams(currentSearch)
  const videoID = searchParams.get('v')

  if (typeof videoID !== 'string' || videoID === '') {
    alert('No valid YouTube video ID found.')
    return
  }

  console.log({ videoID })
})()
