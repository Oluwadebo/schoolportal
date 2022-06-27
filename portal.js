var d = new Date();
dilay.innerHTML = d;

allStudent = [];
function signup(){
    if (localStorage.myStudent) {
        allStudent = JSON.parse(localStorage.myStudent)
    }
    let fName = firstname.value;
    let lName = lastname.value;
    let userAge = age.value;
    let userEmail = email.value;
    let userPassword = password.value;
    firstname.value = ""
    lastname.value = ""
    age.value = ""
    email.value = ""
    password.value = ""
    informatio = {
        firstname:fName,
        lastname: lName,
        age:userAge,
        email:userEmail,
        password:userPassword,
    }
    allStudent.push(informatio)
    localStorage.myStudent = JSON.stringify(allStudent)
    // console.log(allStudent)
    location.assign('signin.html')
}
function siup() {
    localStorage.assign('signin.html')
}
function signIN() {
    let userEmail = email.value;
    let userPassword = password.value;
    allStudent= JSON.parse(localStorage.getItem("myStudent"))
    for (let i = 0; i < allStudent.length; i++) {
        if (userEmail != allStudent[i].email) {
            rong.innerHTML = `Incorrect email address`
            rong.style.color = "red"
        }else if(userPassword != allStudent[i].password){
            rng.innerHTML = `Incorrect password`
            rng.style.color = "red"
        }else if (userEmail == allStudent[i].email && userPassword == allStudent[i].password) {
            rng.innerHTML = ""
            location.assign('dashboard.html')
            break
        }
    }

}
function sign() {
    allStudent = JSON.parse(localStorage.getItem("myStudent"))
    let t = ""
    for (let i = 0; i < allStudent.length; i++) {
        t += `<tr>`
        t += "<td>"+[i+1]+"</td><td>"+allStudent[i].firstname+"</td><td>"+allStudent[i].lastname+"</td><td>"+allStudent[i].age+"</td><td><button class='btn btn-danger' onclick='dele("+i+")'>delet</button></td><td><button class='btn btn-primary' onclick='edit("+i+")'>edit</button></td>"
        t += `</tr>` 
        console.log(allStudent[i])
    }
    display.innerHTML = t;
}
function dele(i){
    let answer = confirm("Are you sure, you want to delete")
    if (answer == true) {
        allStudent = JSON.parse(localStorage.getItem("myStudent"))
        allStudent.splice(i,1)
        console.log(allStudent);
        localStorage.myStudent = JSON.stringify(allStudent)
        location.reload()
    }else{
        alert("No changes was made")
    }
}
var edite;
function edit(i){
    frname.value = allStudent[i].firstname;
    laname.value = allStudent[i].lastname;
    age.value = allStudent[i].age;
    edite = i;
}
function update(){
    allStudent = JSON.parse(localStorage.getItem("myStudent"))
    allStudent.splice(edite,1,{
        firstname:frname.value,
        lastname:laname.value,
        age:age.value,
    })
    localStorage.myStudent = JSON.stringify(allStudent)
    window.location.reload()
}