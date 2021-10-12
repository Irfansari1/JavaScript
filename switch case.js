// write the text according to the class types of the days
var text;
var day = "MONDAY"
switch (day) {
    case "MONDAY":
    case "WEDNESDAY":
    case "THURSDAY":
    case "SATURDAY":
        text = "in class";
        break;
    case "TUESDAY":
    case "FRIDAY":
        text = "TW WS";
        break;
    case "SUNDAY":
        text = "Self Study";
        break;
    default:
        break;
}   
console.log(text);