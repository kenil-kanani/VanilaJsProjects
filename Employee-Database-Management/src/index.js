(async function () {
    const data = await fetch('./src/data.json');
    const res = await data.json();

    let employees = res;

    let selectedEmployeeId = employees[0].id;
    let selectedEmployee = employees[0];

    const employeeList = document.querySelector('.employees__names--list');
    const employeeInfo = document.querySelector('.employees__names--info');

    // Add employee Logic

    // Select Employee Logic
    employeeList.addEventListener('click', (e) => {
        if (e.target.tagName === 'SPAN' && selectedEmployeeId !== e.target.id) {
            selectedEmployeeId = e.target.id;
            renderEmployees();
            renderSingleEmployee();
        }
    })

    const renderEmployees = () => {
        employeeList.innerHTML = ""

        employees.forEach(emp => {
            const employee = document.createElement('span');
            employee.classList.add("employees__names--item");

            if (parseInt(selectedEmployeeId, 10) === emp.id) {
                employee.classList.add('selected');
                selectedEmployee = emp;
            }

            employee.setAttribute('id', emp.id);
            employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">D</>`;

            employeeList.append(employee);
        })
    }

    // Render Single employee
    const renderSingleEmployee = () => {

    }

    renderEmployees();
})();