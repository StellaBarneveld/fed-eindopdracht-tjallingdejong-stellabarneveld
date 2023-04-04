import React from "react";

const [data, setData] = useState([]);

useEffect(() => {
  localStorage.setItem('dataKey', JSON.stringify(data));
}, [data]);