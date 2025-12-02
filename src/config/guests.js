// Guest configuration - Add new guests here!
// Format: 'url-slug': { name: 'ឈ្មោះ', title: 'លោក/អ្នកស្រី', suffix: 'និង ភរិយា/និង ប្តី' }

export const guests = {
  'mr-makara-san': {
    name: 'មករា',
    title: 'លោក',
    suffix: 'និង ភរិយា'  // and wife
  },
  'mr-lichhorng-san': {
    name: 'លីឈង',
    title: 'លោក',
    suffix: 'និង ភរិយា'
  },
  'mr-thearith-san': {
    name: 'ធារិទ្ធ',
    title: 'លោក',
    suffix: ''  // no suffix
  },
  'mrs-sokha': {
    name: 'សុខា',
    title: 'អ្នកស្រី',
    suffix: 'និង ប្តី'  // and husband
  },
  'lok-chumteav-dara': {
    name: 'តារា',
    title: 'លោកជំទាវ',
    suffix: ''
  }
}

// Wedding event configuration
export const weddingConfig = {
  title: 'សិរីមង្គលអាពាហ៍ពិពាហ៍',
  groomName: 'ង៉ុយទ្រី លីហួរ',
  brideName: 'ជិន ស្រីរតន៍',
  eventDate: '2026-01-25 16:00:00',
  startDate: '2026-01-25',
  startTime: '16:00',
  endDate: '2026-01-25',
  endTime: '21:00',
  location: 'ភ្នំពេញ',
  mapUrl: 'https://goo.gl/maps/m6QhfxtiAx7g51yy6',
  coverImage: 'https://theapka.com/storage/01J4TYS7MK4C29A1T4EDG4V9JZ.jpg',
  scheduleBackground: 'https://theapka.com/storage/01J4TYV5XJP7PKF7RPH3KE6238.jpg',
  thankYouBackground: 'https://theapka.com/storage/01J4TYXR517E73RV2PRB75Y5ME.jpg'
}

// Helper function to get guest by slug
export function getGuest(slug) {
  return guests[slug] || null
}

// Check if guest exists
export function guestExists(slug) {
  return slug in guests
}

// Format full guest name with title and suffix
export function formatGuestName(guest) {
  if (!guest) return ''
  let fullName = `${guest.title} ${guest.name}`
  if (guest.suffix) {
    fullName += ` ${guest.suffix}`
  }
  return fullName
}
