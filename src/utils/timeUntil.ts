export function calculateTimeUntilText(dateExpired: Date): string {
  console.log(dateExpired);
  const timeDiff = dateExpired.getTime() - Date.now();
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  // If the expiry date is in the past, return 'Expired'
  if (daysDiff < 0) return `${formatDays(Math.abs(daysDiff))} ago`;

  return formatDays(daysDiff);
}

export function formatDays(daysDiff: number): string {
  // If this is more than a year, show years.
  // If this is exactly a year, show '1 year'.
  if (daysDiff / 365 > 1 || daysDiff / 365 === 1) {
    const years = Math.floor(daysDiff / 365);
    const months = Math.floor((daysDiff % 365) / 30);
    if (months === 12) {
      return `${years + 1} years`;
    }
    if (months === 0) {
      return years > 1 ? `${years} years` : '1 year';
    }
    return `${years} years, ${months} months`;
  }

  // If this is more than a month, show months.
  // If this is exactly a month, show '1 month'.
  if (daysDiff / 30 > 1) {
    const months = Math.floor(daysDiff / 30);
    const days = daysDiff % 30;
    if (days === 0) {
      return `${months} months`;
    }

    if (months === 1) {
      return '1 month';
    }

    return `${months} months, ${days} days`;
  }

  // If this is more than a day, show days.
  // If this is exactly a day, show '1 day'.
  return daysDiff > 1 ? `${daysDiff} days` : '1 day';
}
