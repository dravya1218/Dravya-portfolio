export const EMAIL_ADDRESS = 'dravyavasava28@gmail.com'
export const MAILTO_HREF = `mailto:${EMAIL_ADDRESS}`
export const GMAIL_COMPOSE_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL_ADDRESS)}`

function isLikelyDesktopBrowser() {
  const userAgent = navigator.userAgent || ''

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|SamsungBrowser/i.test(
      userAgent
    )
  ) {
    return false
  }

  if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) {
    return false
  }

  if (window.matchMedia('(pointer: coarse)').matches) {
    return false
  }

  if (window.matchMedia('(hover: none)').matches) {
    return false
  }

  if (window.matchMedia('(max-width: 900px)').matches) {
    return false
  }

  return true
}

function openNativeMail() {
  const userAgent = navigator.userAgent || ''

  if (/Android/i.test(userAgent)) {
    window.location.href =
      `intent://compose?to=${encodeURIComponent(EMAIL_ADDRESS)}#Intent;` +
      'scheme=mailto;package=com.google.android.gm;end'

    window.setTimeout(() => {
      if (document.visibilityState === 'visible') {
        window.location.href = MAILTO_HREF
      }
    }, 800)

    return
  }

  window.location.href = MAILTO_HREF
}

export function handleEmailClick(event) {
  event.preventDefault()

  if (isLikelyDesktopBrowser()) {
    const composeWindow = window.open(
      GMAIL_COMPOSE_HREF,
      '_blank',
      'noopener,noreferrer'
    )

    if (!composeWindow) {
      window.location.href = MAILTO_HREF
    }

    return
  }

  openNativeMail()
}
