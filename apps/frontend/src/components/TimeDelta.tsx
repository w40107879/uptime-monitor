import { FC, useCallback, useEffect, useState } from "react";
import { DateTime } from "luxon"

const TimeDelta: FC<{ dt: DateTime }> = ({ dt }) => {
    const compute = useCallback(() => dt.toRelative(), [dt]);
    const [str, setStr] = useState(compute());
  
    useEffect(() => {
      const handler = () => setStr(compute());
      const timer = setInterval(handler, 1000);
      return () => clearInterval(timer);
    }, [dt, compute]);
  
    return <>{str}</>;
  };

export default TimeDelta;