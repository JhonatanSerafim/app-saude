import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Admin Consulta Fácil'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
