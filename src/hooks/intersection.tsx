import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visibleSection = entries.find(entry => entry.isIntersecting)
        if (visibleSection) {
          setActiveId(visibleSection.target.id)
        }
      },
      {
        rootMargin: '-50% 0px -49% 0px',
        threshold: 0.1
      }
    )

    sectionIds.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
