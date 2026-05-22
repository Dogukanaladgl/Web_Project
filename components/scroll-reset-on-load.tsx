"use client"

import { useEffect } from "react"

/** F5 / yenilemede tarayıcının eski kaydırma konumunu geri yüklemesini engeller */
export function ScrollResetOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }

    const scrollToTop = () => {
      window.scrollTo(0, 0)
    }

    scrollToTop()

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) scrollToTop()
    }

    window.addEventListener("pageshow", onPageShow)
    return () => window.removeEventListener("pageshow", onPageShow)
  }, [])

  return null
}
