let f_Name = document.getElementById("userFname");
let l_Name = document.getElementById("userLname");
// console.log(f_Name.value);

let Locat = document.getElementById("userLocation");
let qualification = document.getElementById("userQualif");
let other_Qualification = document.getElementById("if_other_qualif");
let passed_out = document.getElementById("year_of_pass");

let otherSkill = document.getElementById("other_skil");
let Exp = document.getElementById("exp_years");
let mail = document.getElementById("userMail");
let mobile = document.getElementById("userMobile");
let resume = document.getElementById("userResume");

let forTable = document.getElementById("forTable");
let localStorageData = "";

let newArr = [];
let index = 0;
let masterArr = {};

let userForm_Submit = document.getElementById("userForm");
userForm_Submit.addEventListener("submit", function submitted(e) {
  e.preventDefault();

  // form Validation

  if(f_Name.value==="" || f_Name.value.length <= 2){
      document.getElementById("firstName").innerHTML=`
    ** First name can not be empty \n or less than 3 words`
      return false;
  }
  if(!isNaN(f_Name.value)){
      alert("Name can not starts with number");
  }

  if(l_Name.value==="" || l_Name.value.length <= 2){
      document.getElementById("lastName").innerHTML=`
    ** Last name can not be empty \n or less than 3 words`
      return false;
   }
   if(!isNaN(l_Name.value)){
      alert("Last Name can not starts with number");
  }

  let forGender=document.querySelector('input[mahi="gender"]:checked');
  if(!forGender){
      document.getElementById("forGender").innerHTML=`
       ** Please select Your Gender`;
      return false;
  }

   if(Locat.value==="" || Locat.value.length <= 2){
      document.getElementById("forLocation").innerHTML=`
      ** Please Enter Your Location`;
      return false;
   }
   if(!isNaN(Locat.value)){
      alert("Location can not starts with number");
  }
   let selQua=qualification.options[qualification.selectedIndex].value;
   if(selQua=="Select"){
      document.getElementById("forQuali").innerHTML=`
      ** Please Select your qualification`;
      return false;
   }

   let YOP=passed_out.options[passed_out.selectedIndex].value;
   if(YOP=="Select"){
      document.getElementById("forYOP").innerHTML=`
      ** Please year of pass`;
      return false;
   }

  
   if( mobile.value===""){
      document.getElementById("forMobile").innerHTML=`
      ** Please enter your mobile number`;
              return false;
   }
   if(mobile.value.length <10 || mobile.value.length > 10){
      alert("Mobile number should contain 10 numbers");
      return false;
   }
   if(resume.value===""){
      document.getElementById("forResume").innerHTML=`
      ** Please Select your resume`;
      return false;
   }


  localStoreFunction();

  userForm_Submit.reset();
});
let userApply;

function localStoreFunction() {
  let gender = document.querySelector('input[mahi="gender"]:checked');
  let techArr = [];

  let techSkills = document.getElementsByName("userTechskil");
  for (let i = 0; i < techSkills.length; i++) {
    if (techSkills[i].checked) {
      techArr.push(techSkills[i].value);
    }
  }

  masterArr = {
    f_Name: f_Name.value,
    l_Name: l_Name.value,
    gender: gender.value,
    location: Locat.value,
    qualification: qualification.value,
    other_Qual: other_Qualification.value,
    passout: passed_out.value,
    Techskil: techArr,
    Other_skill: otherSkill.value,
    Exp: Exp.value,
    Email: mail.value,
    Mobile: mobile.value,
    resume: resume.value,
  };

  newArr.push(masterArr);
  localStorage.setItem("form_details", JSON.stringify(newArr));
}

/// registered data

function regis_data() {
  console.log("Showing regis data");

  let regTable = document.getElementById("userTable");
  // to clear the table every time you click on regis data.
  let rowCount = document.getElementById("userTable").rows.length;
  for (let i = rowCount - 1; i > 0; i--) {
    document.getElementById("userTable").deleteRow(i);
  }

let lsRegis=localStorage.getItem("form_details")
  let lsresult = JSON.parse(lsRegis);
  // console.log(result[0].f_Name)
  console.log(lsresult);

  for (let i = 0; i < lsresult.length; i++) {
    let forRow = regTable.insertRow();
    let cell1 = forRow.insertCell();
    let cell2 = forRow.insertCell();
    let cell3 = forRow.insertCell();
    let cell4 = forRow.insertCell();
    let cell5 = forRow.insertCell();
    let cell6 = forRow.insertCell();
    let cell7 = forRow.insertCell();
    let cell8 = forRow.insertCell();
    let cell9 = forRow.insertCell();
    let cell10 = forRow.insertCell();
    let cell11 = forRow.insertCell();
    let cell12 = forRow.insertCell();
    let cell13 = forRow.insertCell();
    let cell14 = forRow.insertCell();
    let cell15 = forRow.insertCell();

    cell1.innerHTML = lsresult[i].f_Name;
    cell2.innerHTML = lsresult[i].l_Name;
    cell3.innerHTML = lsresult[i].gender;
    cell4.innerHTML = lsresult[i].location;
    cell5.innerHTML = lsresult[i].qualification;
    cell6.innerHTML = lsresult[i].other_Qual;
    cell7.innerHTML = lsresult[i].passout;
    cell8.innerHTML = lsresult[i].Techskil;
    cell9.innerHTML = lsresult[i].Other_skill;
    cell10.innerHTML = lsresult[i].Exp;
    cell11.innerHTML = lsresult[i].Email;
    cell12.innerHTML = lsresult[i].Mobile;
    cell13.innerHTML = lsresult[i].resume;
    cell14.innerHTML = `<button type="button" onclick= "editFun(this)" class="btn btn-success editbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i class="fa-solid fa-pen">  </i>  </button> <button type="button" class="btn btn-danger"> <i class="fa-solid fa-trash-can fontIcon deleting" onclick="toDel(this)"> </i></button> `;
  }
}

let row;
 function editFun(td) {
   console.log("edit function is working");
   row = td.parentNode.parentNode;
//  console.log(row.rowIndex);
 let lsGet=JSON.parse(localStorage.getItem("form_details"))
 let a=row.rowIndex-1;
   document.getElementById("modal_fname").value = lsGet[a].f_Name;
   document.getElementById("modal_lname").value = lsGet[a].l_Name;
   if ( lsGet[a].gender== "Male") {
     document.getElementById("modal_gender_male").checked = true;
   } else {
     document.getElementById("modal_gender_female").checked = true;
   }
   document.getElementById("modal_location").value =  lsGet[a].location;
  document.getElementById("modal_qualif").value =  lsGet[a].qualification;
  document.getElementById("modal_OQualif").value =  lsGet[a].other_Qual;
   document.getElementById("modal_yop").value =  lsGet[a].passout;
  
 // for technical skills
//  console.log( lsGet[a].Techskil);
  toArr=lsGet[a].Techskil.toString().split(",");
  // to make all check boxes turn unchecked by default
  var inputs = document.getElementsByTagName('input');
  for (var i=0; i<inputs.length; i++)  {
    if (inputs[i].type == 'checkbox')   {
      inputs[i].checked = false;
    }
  }
// to tick only user selected skill
  for (i = 0; i < toArr.length; i++) {
    let d = toArr[i].split(" ").join("_");
    //  console.log(d);
    document.getElementById(d).checked=true;
    }
   document.getElementById("modal_Oskills").value =  lsGet[a].Other_skill;
   document.getElementById("modal_exp").value = lsGet[a].Exp;
   document.getElementById("modal_mail").value =  lsGet[a].Email;
   document.getElementById("modal_mobile").value =  lsGet[a].Mobile;
   document.getElementById("modal_resume").value =  lsGet[a].resume;
 }
// delete functionality
function toDel(forRowDel) {
  let ok = confirm("Are you sure to delete this row");
  if (ok == true) {
    var userIndex = forRowDel.closest('tr').rowIndex;
    document.getElementById("userTable").deleteRow(userIndex);
   
    let lsget = localStorage.getItem("form_details");
    let lsObj = JSON.parse(lsget); // converting into Object form
    lsObj.splice(userIndex - 1, 1);

    localStorage.setItem("form_details", JSON.stringify(lsObj));
  }
}


// updating Functionality
function toUpdating() {
  console.log("update function working ");
  let modal_gender = document.querySelector('input[mahi="modal_gender"]:checked');


  let modal_techskill = [];
  let techSkills = document.getElementsByName("modal_techSkil");
  for (let i = 0; i < techSkills.length; i++) {
    if (techSkills[i].checked) {
      modal_techskill.push(techSkills[i].value);
    }
  }
  console.log(modal_techskill);
   
  row.cells[0].innerHTML = document.getElementById("modal_fname").value;
  row.cells[1].innerHTML = document.getElementById("modal_lname").value;
  row.cells[2].innerHTML = modal_gender.value;
  row.cells[3].innerHTML = document.getElementById("modal_location").value;
  row.cells[4].innerHTML = document.getElementById("modal_qualif").value;
  row.cells[5].innerHTML = document.getElementById("modal_OQualif").value;
  row.cells[6].innerHTML = document.getElementById("modal_yop").value;
  row.cells[7].innerHTML = modal_techskill;

  row.cells[8].innerHTML = document.getElementById("modal_Oskills").value;
  row.cells[9].innerHTML = document.getElementById("modal_exp").value;
  row.cells[10].innerHTML = document.getElementById("modal_mail").value;
  row.cells[11].innerHTML = document.getElementById("modal_mobile").value;
  row.cells[12].innerHTML = document.getElementById("modal_resume").value;

  let modalFormDetails = {
    f_Name: row.cells[0].innerHTML,
    l_Name: row.cells[1].innerHTML,
    gender: row.cells[2].innerHTML,
    location: row.cells[3].innerHTML,
    qualification: row.cells[4].innerHTML,
    other_Qual: row.cells[5].innerHTML,
    passout: row.cells[6].innerHTML,
    Techskil:modal_techskill,
    Other_skill: row.cells[8].innerHTML,
    Exp: row.cells[9].innerHTML,
    Email: row.cells[10].innerHTML,
    Mobile: row.cells[11].innerHTML,
    resume: row.cells[12].innerHTML,
  };
  let ls = JSON.parse(localStorage.getItem("form_details"));
  ls[row.rowIndex - 1] = modalFormDetails;
  localStorage.setItem("form_details", JSON.stringify(ls));
  
}
// update functionality closed.

// new csv functionality
let csvFile=document.getElementById("inputCSV");
// let csvTbl=document.getElementById("csvTable");

csvFile.addEventListener('change',()=>{
  let csvArr=[];
  let csvFR=new FileReader();
  // console.log(csvFR);
    csvFR.onloadend=e=>{
      // console.log("working");
      let csvReader=csvFR.result.split("\n");
      // console.log(csvReader);
      let csvHeaders=csvReader[0].split(",");
    //  console.log(csvHeaders);
      for(let i=1;i<csvReader.length;i++){
        let csvObj={};
        let mb=csvReader[i].split(",")
       for(let j=0;j<csvHeaders.length;j++){
        csvObj[csvHeaders[j]]=mb[j]
       }
       csvArr.push(csvObj);
       
      }
      // console.log(csvArr);
      localStorage.setItem("csv_details",JSON.stringify(csvArr));

      //checking CSV table start

      console.log("mahesh working");
      let csvTbl=document.getElementById("csvTable");
    
    let lsCSV_values=JSON.parse(localStorage.getItem("csv_details"));
        // console.log(lsCSV_values);
    let lsKeys=Object.keys(lsCSV_values[0]);
    //for taking headers form object, to set heading in table.
        // console.log(lsKeys.length);

        // seaarch bar for CSV
    let forSearch=` <div class="d-flex csvSearch">
    <input class="form-control me-2" type="search" placeholder="Search here" aria-label="Search" onkeyup="searching()" id="searchBar">
      
    </div>`;
    
    let csvheaderTr=`<tr>`;
    for(let i=0;i<lsKeys.length;i++){
      // for table values 
      csvheaderTr+=`<th>`+ lsKeys[i]+`</th>`
      // console.log(csvheaderTr);
    }
    csvheaderTr+=`</tr>`;
    
        let toTableRow='';
          // let csvReader=csvFR.result;
          for(let i=0;i<lsCSV_values.length;i++){
            //taking local storage length bcoz we want only number of row ls contains.
           toTableRow += `<tr>`;
          for(let j=0;j<lsKeys.length;j++){
            // taking header length  bcoz below values have same length
            let toAccess_csvValues=lsKeys[j];
            toTableRow+=`<td>`+lsCSV_values[i][toAccess_csvValues]+`</td>`;
            // lsCSV_values[0][f_name] nxt  lsCSV_values[0][l_name] nxt lsCSV_values[0][gender] continue like this.
            // lsCSV_values[1][f_name] nxt  lsCSV_values[1][l_name] nxt lsCSV_values[1][gender] continue like this.
          }
          toTableRow+=`</tr>`;

        }
        document.getElementById("forSearchbar").innerHTML=forSearch;
        csvTbl.innerHTML=csvheaderTr+toTableRow;
       
      // checking end
    }
csvFR.readAsText(csvFile.files[0]);
 });



// csv functionality working do not delete

// let csvTbl=document.getElementById("csvTable");
// const x=document.getElementById("inputCSV");
// x.addEventListener("change",()=>{
//   const fr= new FileReader();
//   fr.onloadend=e=>{

//     let r=fr.result.split("\n").map(e=>{
//       return e.split(",")
//     });
//     console.log(r);
//     console.log(fr.result.split("\n"));
//     r.forEach(elem => {
//       let m=elem.map(e=>{
//         return `<td>${e}</td>`;
//       }).join("");
//       // we should use join to to avoid commas in it.
//       console.log(m);
//       const ce= document.createElement("tr");
//      ce.innerHTML=m;
//       csvTbl.append(ce)
//     })
//     // console.log(r);
//   }
//   fr.readAsText(x.files[0]);
// })





// starting of XLS file reader
let selectedFile;

document.getElementById("inputXLS").addEventListener("change",(event)=>{
   selectedFile=event.target.files[0];
   console.log(selectedFile);
})

document.getElementById("xlsButton").addEventListener("click",()=>{
  let xlsFileReader=new FileReader();
  xlsFileReader.readAsBinaryString(selectedFile);
  xlsFileReader.onload=(event)=>{
    // console.log(event.target.result);
    let xlsData=event.target.result;
    let xlsWork=XLSX.read(xlsData,{type:"binary"})
    console.log(xlsWork);
    xlsWork.SheetNames.forEach(sheet => {
let rowObject=XLSX.utils.sheet_to_row_object_array(xlsWork.Sheets[sheet]) ;

console.log(rowObject);
localStorage.setItem('xls_details',JSON.stringify(rowObject))
    });
    let xslLs=JSON.parse(localStorage.getItem("xls_details"))
console.log(xslLs);
let xlsHeader=Object.keys(xslLs[0]);
console.log(xlsHeader);
let headerTr=`<tr>`;
for(let i=0;i<xlsHeader.length;i++){
  headerTr+=`<th>`+ xlsHeader[i]+`</th>`
}
headerTr+=`</tr>`;

let xls_remaining_data='';
for(let i=0;i<xslLs.length;i++){
  xls_remaining_data+=`<tr>`;
  for(let j=0;j<xlsHeader.length;j++){
    let access_value=xlsHeader[j];
    xls_remaining_data+=`<td>`+xslLs[i][access_value]+`</td>`;
  }
  xls_remaining_data+=`</tr>`;

}
let xlsTbl=document.getElementById("xlsTable");
xlsTbl.innerHTML=headerTr + xls_remaining_data;

  }

})

const searching= ()=>{
  let  searchTable=document.getElementById("csvTable");
  let searchNames=document.getElementById("searchBar").value.toUpperCase();
  // console.log("U clicked",this.value,searchTable,searchNames);
let tblrow=searchTable.getElementsByTagName("tr")
console.log(tblrow);
for(let i=0;i<tblrow.length;i++){

  let tableData=tblrow[i].getElementsByTagName("td")[0];
  if(tableData){
    let tdText=tableData.textContent || tableData.innerHTML;
    // console.log(tdText);
    if(tdText.toUpperCase().indexOf(searchNames) > -1){
      tblrow[i].style.display="";
    }
    else
    tblrow[i].style.display='none';
  }
}

}



// const searching= ()=>{
//   let  searchTable=document.getElementById("csvTable");
//   let searchNames=document.getElementById("searchBar").value.toUpperCase();
//   // console.log("U clicked",this.value,searchTable,searchNames);
// let tblrow=searchTable.getElementsByTagName("tr")
// console.log(tblrow);
// let tdCount=searchTable.getElementsByTagName("td");
// console.log(tdCount);
// for(let i=0;i<tblrow.length;i++){
//   for(let j=0;j<tdCount.length;j++){
//     let randData=searchTable.getElementsByTagName('td')[j];
//     // console.log(randData);
//     if(randData){
//       let tableDataText=randData.textContent || randData.innerHTML
//       if(tableDataText.toUpperCase().indexOf(searchNames) > -1){
//         tblrow[i].style.display="";
//       }
//       else
//       tblrow[i].style.display="none";
//     }
//   }
// }
// }




