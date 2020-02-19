// Declaring variable name ordered from Sunday

const maleNames = [
    "Kwame",
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi"
  ];
  const femNames = [
    "Ama",
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua"
  ];
  // function collects the data from input fields
function getFormData() {
    let form = document.forms[0];
    let day, month, year, gender;
  
    gender = form.gender.value;
  
    day = parseInt(form.day.value);
    month = parseInt(form.month.value);
    year = parseInt(form.year.value);
  
    return [gender, day, month, year];
  }
  /**
   * function calculates the day of the week from a specific date.
   */
  function calWeekDay(birthDate) {
    let [dayOfMonth, monthOfYear, yearOfBirth] = birthDate;
    let zeroBasedCentury, yearOfCentury;
  
    // Count Jan & Feb  as months 13 and 14 of the previous year.
    if (monthOfYear <= 2) {
      monthOfYear += 12;
      yearOfBirth -= 1;
    }
            
    // Split the array year into year code and century c
    zeroBasedCentury = parseInt(yearOfBirth / 100);
    yearOfCentury = yearOfBirth % 100;
  
    let dayOfWeek =
      (dayOfMonth +
        parseInt(
          2.6 * (monthOfYear + 1) +
            yearOfCentury +
            parseInt(yearOfCentury / 4) +
            parseInt(zeroBasedCentury / 4) +
            5 * zeroBasedCentury
        )) %
      7;
  
    // return dayOfWeek 
    // dayOfWeek = (0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday)
    return dayOfWeek;
  }
  
  /**
   * Initialize AkanName function.
   * The function calls the calcWeekDay function 
   * derives the user gender
   * from the Akan Nam defined at the top
   */
  function AkanName() {
    let formData = getFormData();
    let userBirthDate, userGender, dayOfWeek;
  
    [userGender, ...userBirthDate] = formData;
    dayOfWeek = calWeekDay(userBirthDate);
  
    if (userGender === "Male") {
      alert("Your Akan Name is: " + maleNames[dayOfWeek]);
    } else {
      alert("Your Akan Name is: " + femNames[dayOfWeek]);
    }
    // clear the input fields 
    return false;
  }