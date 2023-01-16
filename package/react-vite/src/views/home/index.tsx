
import { useCallback } from 'react';


export default function Home() {
  const getChart = useCallback((chart) => {
    console.log(chart);
  }, []);
  const getContainer = useCallback((container) => {
    console.log(container);
  }, []);
  return (
    <div className={'home'}>
      home
    </div>
  );
}
