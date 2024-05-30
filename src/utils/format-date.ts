export function formatDate(isoDateString: string) {
  const options = { year: 'numeric', month: 'long', day: '2-digit' }
  const date = new Date(isoDateString)
  return date.toLocaleDateString('id-ID', options as never)
}
