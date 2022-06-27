var d = new Date();
dilay.innerHTML = d;

allStudent = [];
function signup(){
    if (localStorage.myStudent) {
        allStudent = JSON.parse(localStorage.myStudent)
    }else{}
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
    console.log(allStudent)
    location.assign('signin.html')
}
function siup() {
    localStorage.assign('signin.html')
}
function signIN() {
    let userEmail = email.value;
    let userPassword = password.value;
    let students= JSON.parse(localStorage.getItem("myStudent"))
    for (let i = 0; i < students.length; i++) {
        if (userEmail == students[i].email && userPassword == students[i].password) {
            location.assign('dashboard.html')
        }else{
            if (userEmail != students[i].email) {
                rong.innerHTML = `Incorrect email address`
                rong.style.color = "red"
            }else if(userPassword != students[i].password){
                rng.innerHTML = `Incorrect password`
                rng.style.color = "red"
            }
        }
    }

}
function sign() {
    let allStudent = JSON.parse(localStorage.getItem("myStudent"))
    let t = ""
    for (let i = 0; i < allStudent.length; i++) {
        t += `<tr>`
        t += `<td>${i+1}</td>
                <td>${allStudent[i].firstname}</td>
                <td>${allStudent[i].lastname}</td>
                <td>${allStudent[i].age}</td>
                <td><button onclick="dele(${i})" type="submit" class="btn btn-danger">delet</button></td>
                <td><button onclick="edit(${i})" type="submit" class="btn btn-primary">edit</button></td>`
        t += `</tr>` 
        console.log(allStudent[i])
    }
    display.innerHTML = t;
}
function dele(i){
    let answer = confirm("Are you sure, you want to delete")
    if (answer == true) {
        let allStudent = JSON.parse(localStorage.getItem("myStudent"))
        allStudent.splice((i,i))
        console.log(allStudent);
        localStorage.myStudent = JSON.stringify(allStudent)
        location.reload()
    }else{
        alert("No changes was made")
    }
}
function edit(i){
    let answer = confirm("Are you sure, you want to some changes")
    if (answer == true) {
        let allStudent = JSON.parse(localStorage.getItem("myStudent"))
        let fName = prompt("Enter your FirstName")
        let lName = prompt("Enter your LastName")
        let userAge = prompt("Enter your age")
        informatio = {
            firstname:fName,
            lastname: lName,
            age:userAge,
        }
        allStudent.splice((i,i,"informatio"))
        // fName = allStudent[i].firstname.value;
        // lName = allStudent[i].lastname.value;
        // userAge = allStudent[i].age.value;
        // let onformation =  `${fName} ${lName} ${userAge}`
        console.log(allStudent);
    }else{
        alert("No changes was made")
    } 
}