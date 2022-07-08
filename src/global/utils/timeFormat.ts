export const formatDateTime = (dateTime: string) => {

    const dateTimeFormatted = dateTime.replace(/T/, ' ').replace(/\..+/, '').replace(/-/g, '/');

    const [date, time] = dateTimeFormatted.split(' ');

    return [date, time];
};

export const formatDate = (dateTime: string) => {
    const dateTimeFormatted = dateTime.replace(/T/, ' ').replace(/\..+/, '').replace(/-/g, '/');

    const [date, _] = dateTimeFormatted.split(' ');

    return date;
}

export const formatTime = (time: string): string => {
    return time.slice(0, 5);
};
