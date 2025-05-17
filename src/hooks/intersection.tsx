import { useEffect, useState } from 'react'
// Hook que recibe un array de IDs de secciones y devuelve el ID de la sección que está actualmente visible (activa) en pantalla
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Crear un IntersectionObserver para detectar cuando una sección entra en el viewport
    const observer = new IntersectionObserver(
      entries => {
        // Buscar la primera sección que esté intersectando (visible)
        const visibleSection = entries.find(entry => entry.isIntersecting)

        if (visibleSection) setActiveId(visibleSection.target.id)
      },
      {
        // Ajusta cuándo se considera visible la sección, con márgenes negativos para centrar la detección
        rootMargin: '-50% 0px -49% 0px',
        threshold: 0.1 // Umbral para que el observer dispare cuando al menos 10% del elemento es visible
      }
    )

    // Observar cada elemento con el ID recibido
    sectionIds.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    // Limpiar el observer al desmontar o cambiar las secciones
    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
