import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const ABEOKUTA = [7.1527, 3.3509]

function RegionMap() {
  const containerRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return
    const map = L.map(containerRef.current, {
      center: ABEOKUTA,
      zoom: 13,
      zoomControl: false,
      scrollWheelZoom: false,
    })

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map)

    L.marker(ABEOKUTA, {
      icon: L.divIcon({
        className: 'map-pin-wrap',
        html: '<span class="map-pin"></span>',
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      }),
    }).addTo(map)

    mapRef.current = map
    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="h-64 w-full"
      role="img"
      aria-label="Map showing Abeokuta, Ogun State, Nigeria"
    />
  )
}

export default RegionMap