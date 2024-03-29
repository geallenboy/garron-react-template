import { useEffect, useState } from 'react';

export default function useCountdown(date: any) {
  const [countdown, setCountdown] = useState<any>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const interval = setInterval(() => setNewTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  const setNewTime = () => {
    const startTime = date;
    const endTime: any = new Date();
    const distanceToNow = startTime - endTime;

    const getDays = Math.floor(distanceToNow / (1000 * 60 * 60 * 24));
    const getHours = `0${Math.floor(
      (distanceToNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )}`.slice(-2);
    const getMinutes = `0${Math.floor((distanceToNow % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2);
    const getSeconds = `0${Math.floor((distanceToNow % (1000 * 60)) / 1000)}`.slice(-2);

    setCountdown({
      days: getDays || '000',
      hours: getHours || '000',
      minutes: getMinutes || '000',
      seconds: getSeconds || '000'
    });
  };

  return countdown;
}
