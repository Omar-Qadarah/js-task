function Employee(name, email, department){
    this.name=name;
    this.email=email;
    this.department=department;
    let salary=Math.floor(Math.random()*(901)+100);
    this.salary=salary;
}
const employees=JSON.parse(localStorage.getItem("employees"))|| [];
const name=document.getElementById("name");
const email=document.getElementById("email");
const department=document.getElementById("department");
const employee=document.getElementById("employee"); //form
const total=document.getElementById("total");
const table=document.getElementById("table-body");

employee.addEventListener("submit", function(event){
    event.preventDefault();
    const nameV= document.getElementById("name").value.trim();
    if (nameV === ""){return;}
    const emailV= document.getElementById("email").value.trim().toLowerCase();
    if (emailV === ""){return;}
    const departmentV= document.getElementById("department").value.trim();
    if (departmentV === ""){return;}
    const newEmp=new Employee(nameV, emailV, departmentV);
    employees.push(newEmp);
    localStorage.setItem("employees", JSON.stringify(employees));
    name.value="";
    department.value="";
    email.value="";
    renderEmployees();
})

function renderEmployees() {
    table.innerHTML="";
    let totalV=0;
    for (const emp of employees){
        const tr=document.createElement("tr");
        const fields=[emp.name, emp.email, emp.department, emp.salary];
        for (const value of fields){
            const td=document.createElement("td");
            td.textContent=value;
            tr.appendChild(td);
        }
            table.appendChild(tr);
            totalV+=emp.salary;
    }
    total.textContent=totalV;
}
renderEmployees();