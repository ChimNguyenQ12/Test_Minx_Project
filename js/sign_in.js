function login()
{
    let a= document.getElementById("usn").value
    let b= document.getElementById("pass").value
    if(a== 123&& b==123)
    {
        alert("Oke");
    }
    else{
        alert("Login fail")
    }
    alert("Username:"+a);
    alert("Password:"+b);
}