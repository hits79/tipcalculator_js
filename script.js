// custom function
function calculateTip() {
    
    // storing the data value of bill amount
    var billAmount = document.getElementById("billAmount").value;
    // storing the data value of service quality
    var serviceQuality = document.getElementById("serviceQuality").value;
    // storing the data value of total people
    var numPeople = document.getElementById("totalPeople").value;
    
    
    // quick validation if people enter nothing
    if(billAmount === "" || serviceQuality == 0) {
        window.alert("Please enter value!");
        //kills the function
        return;
    }
    
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        // hides each on displaying
        document.getElementById("each").style.display = "none";
    } else {
        // shows the each 
        document.getElementById("each").style.display = "block";
    }
    
    // math
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    // display tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// hide tip amount value on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// clicking the button calls the function

document.getElementById("calculate").onclick = function() { calculateTip(); };