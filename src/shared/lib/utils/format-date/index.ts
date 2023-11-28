export const formatDate = (selectDate: Date, formatMonth = false): {} => {
  const date = selectDate.getDate();
  const month = selectDate.toLocaleString('default', { month: 'long' }) ?? '';
  const weekDay = selectDate.toLocaleString('default', { weekday: 'long'});
  const hasFormatMonth = formatMonth ? month[month.length - 1] === 'ь' && month.slice(0, month.length - 1) + 'я' : month;

  return {
    date,
    month: hasFormatMonth,
    weekDay
  }
}
