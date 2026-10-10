export const EMAIL_ADDRESS = 'dravyavasava28@gmail.com'
export const MAILTO_HREF = `mailto:${EMAIL_ADDRESS}`
export const GMAIL_COMPOSE_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL_ADDRESS)}`

function shouldUseNativeMailApp() {
  return (
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    window.matchMedia('(hover: none) and (pointer: coarse)').matches
  )
}

export function handleEmailClick(event) {
  if (shouldUseNativeMailApp()) {
    return
  }

  event.preventDefault()
  const composeWindow = window.open(GMAIL_COMPOSE_HREF, '_blank', 'noopener,noreferrer')

  if (!composeWindow) {
    window.location.href = MAILTO_HREF
  }
}
