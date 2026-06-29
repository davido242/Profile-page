'use client'

import { useEffect, useState } from 'react'

export default function IOSInstallHint() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    const dismissed = localStorage.getItem('pwa-hint-dismissed')

    if (isIOS && !isStandalone && !dismissed) {
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  function dismiss() {
    localStorage.setItem('pwa-hint-dismissed', '1')
    setVisible(false)
  }

  return (
    <div
      style={{ zIndex: 2147483647 }}
      className="fixed bottom-0 left-0 right-0 bg-white text-gray-800 shadow-[0_-4px_24px_rgba(0,0,0,0.15)] pointer-events-auto"
    >
      {/* top bar */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1">
        <p className="font-bold text-[#821186] text-sm">Add to Home Screen</p>
        <button
          onTouchEnd={(e) => { e.stopPropagation(); dismiss() }}
          onClick={dismiss}
          className="w-[44px] h-[44px] flex items-center justify-center text-gray-400 text-lg"
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>

      {/* steps */}
      <ol className="px-4 pb-5 space-y-2 text-sm">
        <li className="flex items-center gap-3">
          <span className="w-6 h-6 rounded-full bg-[#821186] text-white text-xs flex items-center justify-center font-bold shrink-0">1</span>
          <span>Tap the <strong>Share</strong> button <span className="inline-block bg-gray-100 rounded px-1">⬆</span> at the bottom of Safari</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="w-6 h-6 rounded-full bg-[#821186] text-white text-xs flex items-center justify-center font-bold shrink-0">2</span>
          <span>Scroll down and tap <strong>&ldquo;Add to Home Screen&rdquo;</strong></span>
        </li>
        <li className="flex items-center gap-3">
          <span className="w-6 h-6 rounded-full bg-[#821186] text-white text-xs flex items-center justify-center font-bold shrink-0">3</span>
          <span>Tap <strong>&ldquo;Add&rdquo;</strong> — the app icon will appear on your home screen</span>
        </li>
      </ol>
    </div>
  )
}
