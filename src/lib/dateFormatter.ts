export function dateFormatter(rawDate: string) {
  const [year, month, day] = rawDate.split('-')
  if (!month || !day) {
    console.error('入力形式が非対応です')
  }
  return  `${month}月${day}日`
}