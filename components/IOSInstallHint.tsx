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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white text-[#821186] rounded-xl shadow-lg p-4 flex items-start gap-3 z-50">
      <span className="text-2xl">⬆️</span>
      <div className="flex-1 text-sm">
        <p className="font-bold mb-1">Install this app</p>
        <p>
          Tap <strong>Share</strong> then <strong>&quot;Add to Home Screen&quot;</strong> to install
          OnlineMD on your device.
        </p>
      </div>
      <button
        onClick={dismiss}
        className="text-gray-400 hover:text-gray-600 text-lg leading-none -mt-1"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  )
}
