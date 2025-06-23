'use client'

import { useEffect, useState } from "react"
import type { BeforeInstallPwaPromptEvent } from "@/lib/types";

export default function PwaInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPwaPromptEvent | null>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstall(true)
    }

    window.addEventListener('beforeinstallprompt', handler)
    return () => window.addEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const {outcome} = await deferredPrompt.userChoice;
    console.log(`PWA Install: ${outcome}`)
    setShowInstall(false)
  }

  if(!showInstall) return null

  return (
    <div className="flex justify-center">
    <button 
    onClick={handleInstallClick}
    className="p-2 border border-border rounded-md hover:bg-bghover transition-colors flex items-center justify-center">アプリをインストール</button>
    </div>
  )
}