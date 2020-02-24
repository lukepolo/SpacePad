export const now = () => {
  return moment().tz(moment.tz.guess());
};

export const parseDate = date => {
  return moment(date).tz(moment.tz.guess());
};

export const humanizeDiff = (date1, date2) => {
  return moment
    .duration(moment(date2).diff(moment(date1), "minutes"), "minutes")
    .humanize();
};

export const formatTime = date => {
  return parseDate(date).format("h:mm A");
};
