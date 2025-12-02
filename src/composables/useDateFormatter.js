import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/km'
import { format, setHours, setMinutes, setSeconds } from 'date-fns'
import { km } from 'date-fns/locale'

// Set Khmer locale for dayjs
dayjs.locale('km')

// Convert number to Khmer numerals
export function convertToKhmerNumerals(number) {
  const khmerNumerals = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
  return number.toString().split('').map(digit => khmerNumerals[digit] || digit).join('')
}

// Replace all numbers in text with Khmer numerals
export function replaceNumbersWithKhmer(text) {
  return text.split('').map(char => {
    const digit = parseInt(char, 10)
    return isNaN(digit) ? char : convertToKhmerNumerals(digit)
  }).join('')
}

// Date formatter composable
export function useDateFormatter(eventDate = null, showTime = false) {
  const formattedDate = ref('')
  const dateValue = eventDate ?? "2026-01-25 16:00:00"

  onMounted(() => {
    dayjs.locale('km')
    const dayjsDate = dayjs(dateValue)
    
    // Format date
    let formatted = dayjsDate.format('ថ្ងៃdddd ទី DD ខែ MMMM ឆ្នាំ YYYY')
    
    // Convert to Khmer numerals
    const dayInKhmer = convertToKhmerNumerals(dayjsDate.date())
    const yearInKhmer = convertToKhmerNumerals(dayjsDate.year())
    
    formatted = formatted
      .replace(dayjsDate.date(), dayInKhmer)
      .replace(dayjsDate.year(), yearInKhmer)
    
    // Optional time display
    if (showTime) {
      const dateObj = new Date(dateValue)
      const timeInKhmer = format(dateObj, 'ម៉ោង h:mm b', { locale: km })
      const timeInKhmerNumerals = replaceNumbersWithKhmer(timeInKhmer)
      formattedDate.value = `${formatted} ${timeInKhmerNumerals}`
    } else {
      formattedDate.value = formatted
    }
  })

  return { formattedDate }
}

// Time formatter composable
export function useTimeFormatter(time) {
  const formattedTime = ref('')

  onMounted(() => {
    const [hour, minute, second] = time.split(':').map(Number)
    
    const tempDate = new Date()
    const updatedDate = setSeconds(
      setMinutes(setHours(tempDate, hour), minute),
      second || 0
    )
    
    const formatted = format(updatedDate, 'ម៉ោង h:mm b', { locale: km })
    
    // Convert formatted time to Khmer numerals
    formattedTime.value = replaceNumbersWithKhmer(formatted)
  })

  return { formattedTime }
}

