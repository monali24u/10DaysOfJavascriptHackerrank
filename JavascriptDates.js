function getDayName(dateString) {
    let dayName = "";

    // Write your code here
    var day = new Date(dateString).toDateString().split(' ')[0];

    if(day == "Sun")
        {
            dayName = "Sunday";
        }
    else if(day == "Mon")
        {
            dayName = "Monday";
        }
    else if(day == "Tue")
        {
            dayName = "Tuesday";
        }
    else if(day == "Wed")
        {
            dayName = "Wednesday";
        }
    else if(day == "Thu")
        {
            dayName = "Thursday";
        }
    else if(day == "Fri")
        {
            dayName = "Friday";
        }
    else{
        dayName = "Saturday";
    }

    return dayName;
}
