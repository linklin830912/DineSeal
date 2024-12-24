export type FormattedDate = {
    month: string,
    day: number,
    year: number,
    hours: number,
    minutes: number,
    AMPM: string
}
export function mapStringToDate(dateString: string): FormattedDate { 
    const dateTimeString = dateString;

    const dateObj = new Date(dateTimeString);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const year = dateObj.getUTCFullYear();
    const month = monthNames[dateObj.getUTCMonth()];
    const day = dateObj.getUTCDate();

    const hours = (dateObj.getUTCHours()>12 ? dateObj.getUTCHours()-12 : dateObj.getUTCHours()) ;
    const minutes = dateObj.getUTCMinutes();
    
    return {
        year: year,
        month: month,
        day: day,
        hours: hours,
        minutes: minutes,
        AMPM: dateObj.getUTCHours()>12 ? 'PM' : 'AM'
    }

}