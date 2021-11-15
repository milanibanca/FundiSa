
  $("#btnLogin").click(function(){
    let username = ["ict031@gmail.com","Example@gmail.com"],
    password = ["a","examplepassword"],
    uName = $("#username").val(),
    uPassword = $("#password").val(),
    index = username.indexOf(uName),
    success = $("#success"),
    danger = $("#danger");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!uName.match(mailformat))
    {
        danger.show();
        danger.text("Email wrong")
        
    }
       else
       {
        danger.hide()
        if(password[index] == uPassword){
           // success.show();
           // success.text(`Welcome ${uName}`);
           localStorage.setItem("username",username[index]);
           localStorage.setItem("password",uPassword);
            location.replace("dashboard.htm");
            danger.hide();
          }else{
            success.hide();
            danger.show();
            danger.text("You're doing something wrong")
          }
       } 
    
   
  })
  function logIn() {

    document.getElementById('log_box').style.display='block';
    document.getElementById('username').focus();
    document.getElementById('video').style.display='none';
    
  }

  function signUp() {

    document.getElementById('reg_box').style.display='block';
    document.getElementById('regName').focus();
    document.getElementById('video').style.display='none';
    
  }

  $("#btnNext").click(function(){
    disName = $("#regName").val(),
    disSurname = $("#regSurname").val(),
    disEmail = $("#regEmail").val(),
    disCourse =$("#courses").val();  
    

    localStorage.setItem("name",disName),
    localStorage.setItem("surname", disSurname),
    localStorage.setItem("email",disEmail),
    localStorage.setItem("course", disCourse);

    location.replace("dashboard.htm");
 

   
  })

  function regSubmit() {
    disName = $("#regName").val(),
    disSurname = $("#regSurname").val(),
    disEmail = $("#regEmail").val(),
    disCourse =$("#courses").val();  
    

    localStorage.setItem("name",disName),
    localStorage.setItem("surname", disSurname),
    localStorage.setItem("email",disEmail),
    localStorage.setItem("course", disCourse),
    localStorage.setItem("status","loggedIn");
    //lert("This works"+localStorage.getItem("surname"));
    document.getElementById("regName").value = "";
    document.getElementById("regSurname").value = "";
    document.getElementById("regEmail").value = "";
    document.getElementById("courses").value = "";

    location.replace("dashboard.htm");
 

  }

  function dashLoad() {
    let status = localStorage.getItem("status");
    if(status = null)
    {
      alert("Log In first");
      //location.replace("index.html");
    }
    //localStorage.setItem("name",disName),
   // localStorage.setItem("surname", disSurname),
    //localStorage.setItem("email",disEmail),
    //localStorage.setItem("course", disCourse);
  }