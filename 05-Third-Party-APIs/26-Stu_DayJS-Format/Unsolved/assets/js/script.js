// Use Day.js to format the date and assign to the declared variable.
var todaysDate = dayjs();

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
var gradDate = dayjs('January 1 1999')
$('#1a').text(todaysDate.format('MMM DD, YYYY'));

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
var dayOfWeek = dayjs('1/1/2027').day();
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

$('#2a').text("Day of week is " + dayOfWeek + " which is on a " + weekdays[dayOfWeek]);

// TODO: 3. What is the current time in the format: hours:minutes:seconds
dayOfWeek=dayjs('2023-09-05').format('dddd, MMMM D YYYY, h:mm:ss a');
$('#3a').text(dayOfWeek);

// TODO: 4. What is the current Unix timestamp?
var UnixDay = dayjs('2023-09-05').unix();
$('#4a').text(UnixDay);

// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var UnixTimestamp = dayjs('1318781876').format('dddd, MMMM D YYYY, h:mm:ss a')
$('#5a').text(UnixTimestamp);

// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)

const date1 = dayjs('May 4, 2027');
const date2 = dayjs();
$('#6a').text(date1.diff(date2, 'y'));