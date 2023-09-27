import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

export function useDuration(time: number, unit: duration.DurationUnitType) {
    return dayjs.duration(time, unit);
}