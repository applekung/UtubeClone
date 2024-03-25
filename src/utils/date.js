import dayjs from 'dayjs'

export function getTimeDifference(compareDate) {
  const now = dayjs()

  const yearsDiff = now.diff(compareDate, 'year')
  if (yearsDiff !== 0) {
    return yearsDiff === 1 ? `${yearsDiff} year ago` : `${yearsDiff} years ago`
  }

  const monthsDiff = now.diff(compareDate, 'month')
  if (monthsDiff !== 0) {
    return monthsDiff === 1
      ? `${monthsDiff} month ago`
      : `${monthsDiff} months ago`
  }

  const daysDiff = now.diff(compareDate, 'day')
  if (daysDiff !== 0) {
    return daysDiff === 1 ? `${daysDiff} day ago` : `${daysDiff} days ago`
  }

  const hoursDiff = now.diff(compareDate, 'hour')
  if (hoursDiff !== 0) {
    return hoursDiff === 1 ? `${hoursDiff} hour ago` : `${hoursDiff} hours ago`
  }

  return 'just now'
}
