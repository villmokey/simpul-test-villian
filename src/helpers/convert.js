export const epochToHour = (epoch) => {
  const dt = new Date(epoch);
  const hr = dt.getUTCHours();
  const m = "0" + dt.getUTCMinutes();

  return hr + ":" + m.substr(-2);
};
