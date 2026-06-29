'use client'

import { useEffect, useState } from 'react'

export default function IOSInstallHint() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    const dismissed = sessionStorage.getItem('pwa-hint-dismissed')

    if (isIOS && !isStandalone && !dismissed) {
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  function dismiss() {
    sessionStorage.setItem('pwa-hint-dismissed', '1')
    setVisible(false)
  }

  return (
    <div
      style={{ zIndex: 2147483647 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white text-[#821186] rounded-xl shadow-2xl p-4 flex items-start gap-3 pointer-events-auto"
    >
      <span className="text-2xl select-none">⬆️</span>
      <div className="flex-1 text-sm">
        <p className="font-bold mb-1">Install this app</p>
        <p>
          Tap <strong>Share</strong> then <strong>&ldquo;Add to Home Screen&rdquo;</strong> to
          install OnlineMD on your device.
        </p>
      </div>
      <button
        onClick={dismiss}
        className="min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-400 active:text-gray-700 text-xl rounded-lg -mr-2 -mt-1"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  )
}
