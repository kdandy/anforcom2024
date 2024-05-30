function isDatePast(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()

  if (date < now) {
    return true
  } else {
    return false
  }
}

export { isDatePast }
