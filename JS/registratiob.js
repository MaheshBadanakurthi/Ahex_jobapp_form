

window.addEventListener('load',function (){
    
    let result=JSON.parse(localStorage.getItem('form_details'));
    // console.log(result[0].f_Name)
 
    let forTable=document.getElementById("forTable");

    for(let i=0; i<result.length;i++){
        let forRow=forTable.insertRow()
        let cell1=forRow.insertCell();
        let cell2=forRow.insertCell();
        let cell3=forRow.insertCell();
        let cell4=forRow.insertCell();
        let cell5=forRow.insertCell();
        let cell6=forRow.insertCell();
        let cell7=forRow.insertCell();
        let cell8=forRow.insertCell();
        let cell9=forRow.insertCell();
        let cell10=forRow.insertCell();
        let cell11=forRow.insertCell();
        let cell12=forRow.insertCell();
        let cell13=forRow.insertCell();
        let cell14=forRow.insertCell();
        let cell15=forRow.insertCell();
        let cell16=forRow.insertCell();
        
        cell1.innerHTML=result[i].f_Name;
        cell2.innerHTML=result[i].l_Name;
        cell3.innerHTML=result[i].gender;
        cell4.innerHTML=result[i].location;
        cell5.innerHTML=result[i].qualification;
        cell6.innerHTML=result[i].other_Qual;
        cell7.innerHTML=result[i].passout;
        cell8.innerHTML=result[i].Techskil;
        cell9.innerHTML=result[i].Other_skill;
        cell10.innerHTML=result[i].applyFor;
        cell11.innerHTML=result[i].Exp;
        cell12.innerHTML=result[i].Email;
        cell13.innerHTML=result[i].Mobile;
        cell14.innerHTML=result[i].resume;
        cell15.innerHTML=`<button onclick="editFun(this)"> <i class="fa-solid fa-pen"  data-bs-toggle="modal" data-bs-target="#myModal" ></i>   </button> <i class="fa-solid fa-trash-can fontIcon deleting" onclick="forDel(this)" ></i> `;
    }

});


// edit functionality
let row;
function editFun(td){
    row = td.parentNode.parentNode;
    document.getElementById("tofname").value=row.cells[0].innerHTML;
    document.getElementById("tolname").value=row.cells[1].innerHTML;
    document.getElementById("gender").value=row.cells[2].innerHTML;
    document.getElementById("toloc").value=row.cells[3].innerHTML;
    document.getElementById("forQuali").value=row.cells[4].innerHTML;
    document.getElementById("toOQ").value=row.cells[5].innerHTML;
    document.getElementById("yop").value=row.cells[6].innerHTML;
    // document.getElementById("tofname").value=row.cell1[7].innerHTML;
    document.getElementById("OTskil").value=row.cells[8].innerHTML;
    document.getElementById("toApplying").value=row.cells[9].innerHTML;
    document.getElementById("forexp").value=row.cells[10].innerHTML;
    document.getElementById("forMail").value=row.cells[11].innerHTML;
    document.getElementById("forMobile").value=row.cells[12].innerHTML;
    document.getElementById("forResume").value=row.cells[13].innerHTML;
}
  
// updating Functionality
function toUpdating(){
   console.log("update function working ")

   row.cells[0].innerHTML=document.getElementById("tofname").value;
   row.cells[1].innerHTML=document.getElementById("tolname").value;
   row.cells[2].innerHTML=document.getElementById("gender").value;
   row.cells[3].innerHTML=document.getElementById("toloc").value;
   row.cells[4].innerHTML=document.getElementById("forQuali").value;
   row.cells[5].innerHTML=document.getElementById("toOQ").value;
   row.cells[6].innerHTML=document.getElementById("yop").value;

   row.cells[8].innerHTML=document.getElementById("OTskil").value;
   row.cells[9].innerHTML=document.getElementById("toApplying").value;
   row.cells[10].innerHTML=document.getElementById("forexp").value;
   row.cells[11].innerHTML=document.getElementById("forMail").value;
   row.cells[12].innerHTML=document.getElementById("forMobile").value;
   row.cells[13].innerHTML=document.getElementById("forResume").value;

   let modalFormDetails={
    f_Name: row.cells[0].innerHTML,
    l_Name:row.cells[1].innerHTML,
    gender:row.cells[2].innerHTML,
    location:row.cells[3].innerHTML,
    qualification:row.cells[4].innerHTML,
    other_Qual:row.cells[5].innerHTML,
    passout:row.cells[6].innerHTML,

    applyFor:row.cells[8].innerHTML,
    Other_skill:row.cells[9].innerHTML,
    Exp:row.cells[10].innerHTML,
    Email:row.cells[11].innerHTML,
    Mobile:row.cells[12].innerHTML,
    resume:row.cells[13].innerHTML
   }
   let ls=JSON.parse(localStorage.getItem("form_details"))
   ls[row.rowIndex-1]=modalFormDetails;
   localStorage.setItem("form_details",JSON.stringify(ls))
};


// delete  functionality.
function forDel(rowDel) {
    let ok= confirm("Are you sure to delete this row")
     if(ok == true){
 
     var specificIndex = rowDel.parentNode.parentNode.rowIndex;
     document.getElementById("forTable").deleteRow(specificIndex);
 //    localStorage.clear();
 let a=localStorage.getItem("form_details");
 // console.log(typeof a); // its a string
 let b= JSON.parse(a) // converting into Object form
 // console.log(b);
 let forObjDel=b.splice(specificIndex-1,1)
 console.log(forObjDel);
 
     localStorage.setItem("form_details",JSON.stringify(b))

     } 
   }






//    let modalFormDetails={
//        f_Name:  document.getElementById("tofname").value,
//        l_Name: document.getElementById("tolname").value,
//        gender:document.getElementById("gender").value,
//        location:document.getElementById("toloc").value,
//        qualification:document.getElementById("forQuali").value,
//        other_Qual:document.getElementById("toOQ").value,
//        passout:document.getElementById("yop").value,
//     //    Techskil:mytechArr,
//        applyFor:  document.getElementById("applyingFor").value,
//        Other_skill:document.getElementById("OTskil").value,
//        Exp:document.getElementById("forexp").value,
//        Email:document.getElementById("forMail").value,
//        Mobile:document.getElementById("forMobile").value,
//        resume:document.getElementById("forResume").value
//    }

// //    console.log(modalFormDetails);
//   let ls=JSON.parse(localStorage.getItem("form_details"))
//   console.log(ls);
// //    console.log(ls[specificIndex-1]);
// //    let x=specificIndex-1;
// //    ls[specificIndex-1]=modalFormDetails;

//    console.log(ls);
//    localStorage.setItem("form_details",JSON.stringify(ls));
   
  










//  let forupdating=document.getElementById("forupdating")
//  forupdating.addEventListener("click", ()=>{
//     console.log("update function working ")
//     let modalFormDetails={
//         f_Name:  document.getElementById("tofname").value,
//         l_Name: document.getElementById("tolname").value,

//         location:document.getElementById("toloc").value,
//         qualification:document.getElementById("forQuali").value,
//         other_Qual:document.getElementById("toOQ").value,
//         passout:document.getElementById("yop").value,
//         Other_skill:document.getElementById("OTskil").value,

//         Exp:document.getElementById("forexp").value,
//         Email:document.getElementById("forMail").value,
//         Mobile:document.getElementById("forMobile").value,
//         resume:document.getElementById("forResume").value
//     }

//     console.log(modalFormDetails);
//    let ls=JSON.parse(localStorage.getItem("form_details"))
//    console.log(ls);
//  })



