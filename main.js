

function calculat() {

    const todayDate =  new Date() ;
    let currentYear = todayDate.getFullYear()
    let currentMonth = todayDate.getMonth() + 1
    let currentDay = todayDate.getDate()

    let inputDay = document.getElementById("textBox1").value ;
    let inputMonth = document.getElementById("textBox2").value ;
    let inputYear = document.getElementById("textBox3").value ;
    let inputDate = new Date(inputYear, inputMonth-1, inputDay);
    let realInputDay = inputDate.getDate()

    if (inputDay==""){
        document.getElementById("emptyError1").style.display = "block";
    }

    if (inputMonth==""){
        document.getElementById("emptyError2").style.display = "block";
    }

    if (inputYear==""){
        document.getElementById("emptyError3").style.display = "block";
    }

    if (Number(inputDay)>31) {
        document.getElementById("errorInvalid1").style.display = "block";
    }

    if (Number(inputMonth)>12) {
        document.getElementById("errorInvalid2").style.display = "block";
    }
    
    if (Number(inputYear)>currentYear) {
        document.getElementById("errorInvalid3").style.display = "block";
    }

    if (realInputDay != inputDay 
        &&Number(inputDay)<=31 
        && Number(inputMonth)<12 
        && Number(inputYear)<currentYear 
        && inputYear !="" 
        && inputMonth !="" 
        && inputDay !="" ) {
        document.getElementById("errorInvalidDate").style.display = "block"
    }

    let numOfYears ;
    let numOfMonths ;
    let numOfDays ;


    const monthDays = currentYear % 4 == 0 ? [31 , 29, 31, 30, 31, 30, 31, 31, 30, 31, 30 , 31] : [31 , 28, 31, 30, 31, 30, 31, 31, 30, 31, 30 , 31]

    if (currentMonth < Number(inputMonth)) {
        if (currentDay >= Number(inputDay)) {
            numOfYears = currentYear -1 -Number(inputYear)
            numOfMonths = 12 - Number(inputMonth) + currentMonth
            numOfDays = currentDay - Number(inputDay)
        }
        if (currentDay < Number(inputDay)) {
            numOfYears = currentYear -1 -Number(inputYear)
            numOfMonths = 12 - Number(inputMonth) + currentMonth - 1
            numOfDays = monthDays[currentMonth-2]- Number(inputDay) + currentDay
        }
    }
    if (currentMonth > Number(inputMonth)) {
        if (currentDay >= inputDay) {
            numOfYears = currentYear -Number(inputYear);
            numOfMonths = currentMonth - Number(inputMonth);
            numOfDays = currentDay - Number(inputDay);
        }
        if (currentDay < inputDay) {
            numOfYears = currentYear -Number(inputYear);
            numOfMonths = currentMonth - Number(inputMonth) - 1;
            numOfDays = monthDays[currentMonth-2] - Number(inputDay) + currentDay;
        }
    }

    if (currentMonth == Number(inputMonth)) {
        if (currentDay >= inputDay) {
            numOfYears = currentYear -Number(inputYear);
            numOfMonths = currentMonth - Number(inputMonth);
            numOfDays = currentDay - Number(inputDay);
        }
        if (currentDay < inputDay) {
            numOfYears = currentYear -Number(inputYear) - 1;
            numOfMonths = 11
            numOfDays = monthDays[currentMonth-2] - Number(inputDay) + currentDay;
        }
    }
    

    if (realInputDay == inputDay 
        &&Number(inputDay)<=31 
        && Number(inputMonth)<=12 
        && Number(inputYear)<currentYear 
        && inputYear !="" 
        && inputMonth !="" 
        && inputDay !="" ) {
            document.getElementById("yearsValue").innerHTML = numOfYears;
            document.getElementById("monthsValue").innerHTML = numOfMonths;
            document.getElementById("daysValue").innerHTML = numOfDays;
        }
      
}