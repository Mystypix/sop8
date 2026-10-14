const PRAGUE_TIME_ZONE = 'Europe/Prague';

function partsInPrague(value: Date) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: PRAGUE_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(value).reduce<Record<string, string>>((parts, part) => {
    if (part.type !== 'literal') parts[part.type] = part.value;
    return parts;
  }, {});
}

/** Return the date as a YYYY-MM-DD calendar value in Prague. */
export function concertDateKey(value: string | Date): string {
  // Keep date-only values intact. Tina datetime values are ISO timestamps;
  // date-only strings are useful for already-normalized markup values.
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const parts = partsInPrague(value instanceof Date ? value : new Date(value));
  return `${parts.year}-${parts.month}-${parts.day}`;
}

/** Sort and compare a concert's Prague-local date and time consistently. */
export function concertDateTimeKey(date: string | Date, time?: string | null): string {
  return `${concertDateKey(date)}T${time?.slice(0, 5) || '00:00'}`;
}

export function pragueNowKey(now = new Date()): string {
  const parts = partsInPrague(now);
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
}

export function formatConcertDate(value: string | Date): string {
  const [year, month, day] = concertDateKey(value).split('-');
  return `${Number(day)}. ${Number(month)}. ${year}`;
}
