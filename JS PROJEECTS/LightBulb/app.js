// I need to connect to the HTML DOC and add EventListeners for both buttons with different outcomes

function light (value)
    var pic;
    if(value == 0)
    {
        pic="lightOff.png";
    }
    else
    {
        pic="lightOn.png"
    }
    document.getElementById('bulb').src=pic;