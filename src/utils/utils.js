export const formatMonth = (month) => {
  let formattedMonth;

  if (("" + month).length > 2) {
    switch (month) {
      case "January":
        formattedMonth = 0;
        break;
      case "February":
        formattedMonth = 1;
        break;
      case "March":
        formattedMonth = 2;
        break;
      case "April":
        formattedMonth = 3;
        break;
      case "May":
        formattedMonth = 4;
        break;
      case "June":
        formattedMonth = 5;
        break;
      case "July":
        formattedMonth = 6;
        break;
      case "August":
        formattedMonth = 7;
        break;
      case "September":
        formattedMonth = 8;
        break;
      case "October":
        formattedMonth = 9;
        break;
      case "November":
        formattedMonth = 10;
        break;
      case "December":
        formattedMonth = 11;
        break;
    }
  } else {
    switch (month) {
      case 0:
        formattedMonth = "January";
        break;
      case 1:
        formattedMonth = "February";
        break;
      case 2:
        formattedMonth = "March";
        break;
      case 3:
        formattedMonth = "April";
        break;
      case 4:
        formattedMonth = "May";
        break;
      case 5:
        formattedMonth = "June";
        break;
      case 6:
        formattedMonth = "July";
        break;
      case 7:
        formattedMonth = "August";
        break;
      case 8:
        formattedMonth = "September";
        break;
      case 9:
        formattedMonth = "October";
        break;
      case 10:
        formattedMonth = "November";
        break;
      case 11:
        formattedMonth = "December";
        break;
    }
  }

  return formattedMonth
};

export const formatDay = (day) => {

      return (''+day).length === 2 ? day : + day.slice(1,2);
}
