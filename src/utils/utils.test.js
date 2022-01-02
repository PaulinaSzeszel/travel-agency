import { formatTime } from './formatTime';

describe('utils', () => {
  describe('formatTime', () => {

    it('TEST 33: should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });

    it('TEST 34: should return null if arg is not number', () => {
      expect(formatTime('abc')).toBe(null);
      expect(formatTime(() => {})).toBe(null);
    });

    it('TEST 35: should return null if arg is lower than zero', () => {
      expect(formatTime(-1)).toBe(null);
      expect(formatTime(-3)).toBe(null);
    });

    it('TEST 36: should return time in hh:mm:ss if arg is proper', () => {
      expect(formatTime(122)).toBe('00:02:02');
      expect(formatTime(3793)).toBe('01:03:13');
      expect(formatTime(120)).toBe('00:02:00');
      expect(formatTime(3604)).toBe('01:00:04');
    });
  });
});