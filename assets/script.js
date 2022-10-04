//Add current date
let today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

// highlight timeblock by past, present, future
let currentHour = parseInt(moment().format("H"))
let pageTime = $(".task")

for (i = 0; i < pageTime.length; i++) {
    if (currentHour == pageTime[i].getAttribute("value")) {
        $(pageTime[i]).removeClass("future")
        $(pageTime[i]).removeClass("past")
        $(pageTime[i]).addClass("present")
    }
    else if (currentHour < pageTime[i].getAttribute("value")) {
        $(pageTime[i]).removeClass("past")
        $(pageTime[i]).removeClass("present")
        $(pageTime[i]).addClass("future")
    }
    else {
        $(pageTime[i]).removeClass("present")
        $(pageTime[i]).removeClass("future")
        $(pageTime[i]).addClass("past")
    }
}
//save text entries to localStorage 

if (localStorage.getItem("taskData") === null) {
    let taskData = [
        {
            "9": "",
            "10": "",
            "11": "",
            "12": "",
            "13": "",
            "14": "",
            "15": "",
            "16": "",
            "17": "",
        }
    ];
    localStorage.setItem("taskData", JSON.stringify(taskData));
}

let saveButton = $(".saveBtn")

for (i = 0; i < saveButton.length; i++) {
    $(saveButton[i].firstChild).on("click", function (e) {
       
        let textArea = e.target.parentElement.parentElement.childNodes[3].childNodes[1].value
       
        let textHour = e.target.parentElement.parentElement.childNodes[3].getAttribute('value')
        
        taskData = JSON.parse(localStorage.getItem("taskData"));
        
        taskData[0][textHour] = textArea
    
        localStorage.setItem("taskData", JSON.stringify(taskData))
    })
}

let storeTaskData = JSON.parse(localStorage.getItem("taskData"))  
let textAreaArray = $(".description")

for (i=0; i<textAreaArray.length; i++){
    let textAreaHour = textAreaArray[i].parentElement.getAttribute("value")
    textAreaArray[i].textContent = storeTaskData[0][textAreaHour]
}
