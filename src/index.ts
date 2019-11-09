export default function get(path: string, data: Record<string, any>, defaultData?: any): ReturnType<any> {
  let i = 0;
  const segments = path.match(/[(\d+)+]|([a-zA-Z0-9-_#]+)/g) || [];
  const length = segments.length;

  if (segments.length === 0 || !Boolean(data))  {
    return returnHandler();
  }

  while (i < length && Boolean(data)) {
    data = data[segments.shift() as any];
    i++;
  }

  function returnHandler() {
    return (length === i && data) || (defaultData !== undefined ? defaultData : data);
  }

  return returnHandler();
}
