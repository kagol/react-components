import moment from 'moment';

const DATE_ROW_COUNT = 6;

/**
 * 获取某一周的周数组
 * @param {某个日期} date 
 * @param {第几周} num 
 * @param {数组的值的格式} format 
 */
export function getWeekArr(date, num, format) {
    let weekArr = [];
    let dateMoment = date;
    if(!moment.isMoment(date)){
        dateMoment = moment(date);
    }
    let index = dateMoment.format('d');
    let firstDay = -index+num*7;
    let lastDay = 7-index+num*7;
    for(let day=firstDay;day<lastDay;day++){
        let weekItem = moment(dateMoment).add(day, 'days');
        let formatWeekItem = weekItem;
        if(format){
            formatWeekItem = weekItem.format(format);
        }
        weekArr.push(formatWeekItem);
    }
    return weekArr;
}

/**
 * 获取一个月的第一天
 * @param {某个日期} date 
 */
export function getFirstDayOfMonth(date, monthNum, yearNum) {
    let dateMoment = date;
    if(!moment.isMoment(date)){
        dateMoment = moment(date);
    }
    let year = moment(dateMoment).add(yearNum, 'years').add(monthNum, 'months').format('YYYY');
    let month = moment(dateMoment).add(yearNum, 'years').add(monthNum, 'months').format('MM');
    // let month = dateMoment.format('MM');
    let day = '01';
    let firstDayOfMonth = year+'-'+month+'-'+day;
    return firstDayOfMonth;
}

/**
 * 获取日历数组
 * @param {某个日期} date 
 */
export function getCalendarArr(date, monthNum=0, yearNum=0) {
    let calendarArr = [];
    let firstDayOfMonth = getFirstDayOfMonth(date, monthNum, yearNum);
    for(let row=0;row<DATE_ROW_COUNT;row++){
        let rowArr = getWeekArr(firstDayOfMonth, row);
        calendarArr.push(rowArr);
    }
    return calendarArr;
}

export const WEEK_ARR = ['日', '一', '二', '三', '四', '五', '六'];

export const DEFAULT_FORMAT = 'YYYY-MM-DD';