import {
  addWeeks,
  endOfYear,
  isAfter,
  isBefore,
  setDate,
  setMonth,
  startOfDay,
  startOfYear
} from 'date-fns';
import { useEffect, useState } from 'react';

export default function useHolidaySeason() {
  const [isHolidaySeason, setHolidaySeason] = useState(false);

  useEffect(() => {
    const today = new Date();
    /**
     * holiday season decor often starts at december first "this year" and last to new year eve plus 1 week later "next year".
     * this "this year" + "last year" situation can be solve by:
     * spliting holiday season of one year into 2 range, beginning of the year range and ending of the year range
     */

    // beginning of the year range
    const decemberFirst = startOfDay(setDate(setMonth(today, 11), 1));
    const decemberLast = endOfYear(today);

    // ending of the year range
    const januaryFirst = startOfYear(today);
    const januaryFirstPlus1Week = addWeeks(januaryFirst, 1);

    setHolidaySeason(
      (isAfter(today, decemberFirst) && isBefore(today, decemberLast)) ||
        (isAfter(today, januaryFirst) && isBefore(today, januaryFirstPlus1Week))
    );
  }, []);

  return isHolidaySeason;
}
