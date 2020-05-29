
function login (arr){
    let submit= document.getElementById("submit");
    submit.addEventListener("click", (e) =>{
        e.preventDefault();
   let name= document.getElementById("id").value
   let pass= document.getElementById("pass").value
      for(let i =0;i< arr.length;i++){
         if( name===arr[i].username && pass === arr[i].password){
         alert("ok");
    return true;
}
         else{
          continue;
            }
        }
alert("gg");
});
    }
let getData = async() =>{
    let data = await fetch("https://5ed1024f4e6d7200163a045c.mockapi.io/api/c4e/users?fbclid=IwAR30m_KStYj2WRceoB0enVRbOpaW2h1QjQDoHSbgUbBQX3W-TvOoFBgoc28");
    let data1 = await data.json();
    login(data1);
}
getData();

    // let c= "admin";
    // let d=123;
    // if(a==c&&b==d)
    // { 
    //    alert("Đăng nhập thành công")
    //   window.location.href = "https://www.w3schools.com/"; 
    // }
    // else
    // alert("Đăng nhập thất bại");