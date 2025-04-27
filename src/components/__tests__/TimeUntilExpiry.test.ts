import { describe, expect, it } from 'vitest';

import { calculateTimeUntilText } from '../../utils/timeUntil';

describe('TimeUntilExpiry', () => {
  const day = 1000 * 60 * 60 * 24;
  const month = day * 30;

  it('shows "Expired" for past dates', () => {
    const pastDate = new Date(Date.now() - day);
    const result = calculateTimeUntilText(pastDate);
    expect(result).toBe('Expired');
  });

  it('shows days for dates within a week', () => {
    const threeDaysLater = new Date(Date.now() + 3 * day);
    const result = calculateTimeUntilText(threeDaysLater);
    expect(result).toBe('3 days');
  });

  it('shows days for dates within a month', () => {
    const twoWeeksLater = new Date(Date.now() + 15 * day);
    const result = calculateTimeUntilText(twoWeeksLater);
    expect(result).toBe('15 days');
  });

  it('shows months for dates within a year', () => {
    const threeMonthsLater = new Date(Date.now() + 3 * month);
    const result = calculateTimeUntilText(threeMonthsLater);
    expect(result).toBe('3 months');
  });

  it('shows years for dates beyond a year', () => {
    const twoYearsLater = new Date(Date.now() + 2 * 365 * day);
    const result = calculateTimeUntilText(twoYearsLater);
    expect(result).toBe('2 years');
  });

  it('handles singular forms correctly', () => {
    const oneYearLater = new Date(Date.now() + 365 * day);
    const result = calculateTimeUntilText(oneYearLater);
    expect(result).toBe('1 year');
  });

  it('maintains the original time span regardless of current date', () => {
    const tenYearsLater = new Date(Date.now() + 10 * 365 * day);
    const result = calculateTimeUntilText(tenYearsLater);
    expect(result).toBe('10 years');
  });
});
