export const now = () => {
  return moment().tz(moment.tz.guess());
};

export const parseDate = date => {
  return moment(date).tz(moment.tz.guess());
};

export const diff = (date1, date2) => {
  return moment(date2).preciseDiff(moment(date1));
};

export const formatTime = (date) => {
  return parseDate(date).format('h:mm A')
}

export const getTimeHeightStyle = (startDate, endDate) => {

    let startDateParsed = parseDate(startDate);
    let startEM = ((((startDateParsed.format('HH') * 60) + parseInt(startDateParsed.format('mm')))) * 6) / 60;

    let endDateParsed = parseDate(endDate);
    let endEm = (((((endDateParsed.format('HH') * 60) + parseInt(endDateParsed.format('mm')))) * 6) / 60) - startEM;

    return `top:${startEM }em; height:${endEm }em;`;
}