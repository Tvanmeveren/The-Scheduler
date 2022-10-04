//Add current date
let today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

// highlight timeblock by past, present, future
let currentHour = parseInt(moment().format("H"))
let Timing = $(".task")

for (i = 0; i < Timing.length; i++) {
    if (currentHour == Timing[i].getAttribute("value")) {
        $(Timing[i]).removeClass("future")
        $(Timing[i]).removeClass("past")
        $(Timing[i]).addClass("present")
    }
    else if (currentHour < Timing[i].getAttribute("value")) {
        $(Timing[i]).removeClass("past")
        $(Timing[i]).removeClass("present")
        $(Timing[i]).addClass("future")
    }
    else {
        $(Timing[i]).removeClass("present")
        $(Timing[i]).removeClass("future")
        $(Timing[i]).addClass("past")
    }
}
//save text entries to localStorage 

if (localStorage.getItem("Data") === null) {
    let Data = [
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
    localStorage.setItem("Data", JSON.stringify(Data));
}

let saveButton = $(".saveBtn")

for (i = 0; i < saveButton.length; i++) {
    $(saveButton[i].firstChild).on("click", function (e) {
       
        let textArea = e.target.parentElement.parentElement.childNodes[3].childNodes[1].value
       
        let textHour = e.target.parentElement.parentElement.childNodes[3].getAttribute('value')
        
        Data = JSON.parse(localStorage.getItem("Data"));
        
        Data[0][textHour] = textArea
    
        localStorage.setItem("Data", JSON.stringify(Data))
    })
}

let storeData = JSON.parse(localStorage.getItem("Data"))  
let textAreaArray = $(".description")

for (i=0; i<textAreaArray.length; i++){
    let textAreaHour = textAreaArray[i].parentElement.getAttribute("value")
    textAreaArray[i].textContent = storeData[0][textAreaHour]
}
