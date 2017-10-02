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
    let startDateParsedHours = startDateParsed.format('HH') * 6;
    let startDateParsedMinutes = startDateParsed.format('mm');

    let endDateParsed = parseDate(endDate);
    let endDateParsedHours = (endDateParsed.format('HH') * 6) - startDateParsedHours;
    let endDateParsedMinutes = endDateParsed.format('mm');

    // todo - n eed to convert to percetnage then * by 6
    console.info(
        `top:${startDateParsedHours}.${startDateParsedMinutes}em; height:${endDateParsedHours}.${endDateParsedMinutes}em;`
    )
    return `top:${startDateParsedHours}.${startDateParsedMinutes}em; height:${endDateParsedHours}.${endDateParsedMinutes}em;`;
}