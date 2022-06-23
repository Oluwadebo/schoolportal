// allStudent = [];
// function signup(){
//     if (localStorage.myStudent) {
//         allStudent = JSON.parse(localStorage.myStudent)
//     }else{}
//     let fName = firstname.value;
//     let lName = lastname.value;
//     let userEmail = email.value;
//     let userAge = age.value;
//     let userPassword = password.value;
//     firstname.value = ""
//     lastname.value = ""
//     age.value = ""
//     email.value = ""
//     password.value = ""
//     informatio = {
//         firstname:fName,
//         lastname: lName,
//         email:userEmail,
//         age:userAge,
//         password:userPassword,
//     }
//     allStudent.push(informatio)
//     localStorage.myStudent = JSON.stringify(allStudent)
//     console.log(allStudent)
//     location.replace('signin.html')
// }
// function siup() {
//     localStorage.replace('signin.html')
// }
// function signIN() {
//     let userEmail = email.value;
//     let userPassword = password.value;
//     let students= JSON.parse(localStorage.getItem("myStudent"))
//     for (let i = 0; i < students.length; i++) {
//         if (userEmail == students[i].email && userPassword == students[i].password) {
//             location.replace('dashboard.html')
//         }else{
//             //  alert("INCORRECT EMAIL OR INCORRECT PASSWORD")
//            location.reload()
//         }
//     }

// }
// function sign() {
//     let allStudent= JSON.parse(localStorage.getItem("myStudent"))
//     let t = ""
//     for (let i = 0; i < allStudent.length; i++) {
//         t += `<tr>`
//         t += `<td>${i+1}</td><td>${allStudent[i].firstname}</td><td>${allStudent[i].lastname}</td><td>${allStudent[i].age}</td>`
//         t += `</tr>` 
//         console.log(allStudent[i])
//     }
//     display.innerHTML = t;
// }