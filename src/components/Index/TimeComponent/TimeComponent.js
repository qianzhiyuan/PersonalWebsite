import React, {useState, useEffect} from 'react';
import {Moment} from '../../../assets/js/moment'

function TimeComponent() {
  const [time, setTime] = useState(Moment().format('LTS'));

  useEffect(() => {
    setTimeout(() => {
      setTime(Moment().format('LTS'))
    }, 1000)
  });

  return (
    <div>
      <p>时间是： {time}</p>
    </div>
  );
}

export default TimeComponent;
