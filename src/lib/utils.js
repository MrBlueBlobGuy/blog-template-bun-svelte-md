export function formatDate(date, dateStyle = 'medium', locales='en'){
    return new Intl.DateTimeFormat(locales, { dateStyle }).
    format(new Date(date))
}