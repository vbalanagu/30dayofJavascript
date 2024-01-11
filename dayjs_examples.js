const dayjs = require('dayjs');

//Get date in the format with anti meridiem
dayjs().format('YYYY-MM-DD hh:mm:ss A');
//output: 2024-01-11 10:37:39 AM

//Get what day is given specific date
dayjs('2019-10-01').format('dddd');
//Output: Tuesday

//Get Last year date 
dayjs().subtract(1, 'year').format('YYYY-MM-DD hh:mm:ss A');
//Ouput:2023-01-11 10:42:33 AM

//Get Start of year for a specific year
dayjs().startOf('year').subtract(2, 'year').format('YYYY-MM-DD hh:mm:ss A');
//Output: 2022-01-01 12:00:00 AM

//Get End of year for a specific year
dayjs().endOf('year').subtract(1, 'year').format('M/D/YY hh:mm A');
//Output: 12/31/23 11:59 PM

//Get Last year
dayjs().year()-1;
//output: 2023

//Get year in two digit format for a specific year
dayjs("12-25-1995").format('YY')-3;
//output: 92

//To display relative time
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime);
dayjs('1999-01-01').from('2000-01-01');
//Output: a year ago

//Time from now
dayjs('1999-01-01').fromNow();
//Output: 25 years ago

//Tme from now without the suffix
dayjs('1999-01-01').fromNow(true);
//Output: 25 years

//Time to now
dayjs('1999-01-01').toNow();
//Ouput: in 22 years