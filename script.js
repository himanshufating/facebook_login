function submit(){
    var pwd=document.getElementById("password").value;
    if(pwd.length<10)
    {
        document.getElementById("message").innerHTML="Password lenght must be at least 10";
        return false;
    }
    var txt=/^(?=.*[!@#$%^&*])(?=.*[0-9])/;
    if(txt.test(pwd)==false)
    {
        document.getElementById("message").innerHTML="Password must contain specail charcter and number";
        return false;
    }
    else
    {
        document.getElementById("message").innerHTML="Password is Strong";
    }
}