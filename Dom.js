document.getElementById('student-form').addEventListener('submit', addStudent);

function addStudent(event) {
    event.preventDefault(); // Stop page reload

    let studentName = document.getElementById('student-name').value;

    if (studentName === '') {
        alert('Please enter a student name');
        return;
    }

    // Create list item
    let li = document.createElement('li');
    li.classList.add('student-item');

    // Student name text
    let span = document.createElement('span');
    span.textContent = studentName;

    // Edit button
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('btn-edit');
    editButton.addEventListener('click', function () {
        editStudent(li, span);
    });

    // Delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn-delete');
    deleteButton.addEventListener('click', function () {
        deleteStudent(li);
    });

    // Add all to li
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    // Add to list
    document.getElementById('student-list').appendChild(li);

    // Clear textbox
    document.getElementById('student-name').value = '';
}

function deleteStudent(studentElement) {
    studentElement.remove();
}

function editStudent(studentElement, studentNameElement) {
    let newName = prompt('Enter the new name:', studentNameElement.textContent);

    if (newName !== null && newName !== '') {
        studentNameElement.textContent = newName;
    }
}

// Highlight toggle function
function changeListStyle() {
    let students = document.querySelectorAll('.student-item');
    students.forEach(student => {
        student.classList.toggle('highlight');
    });
}

// Create highlight button dynamically
let changeStyleButton = document.createElement('button');
changeStyleButton.textContent = 'Highlight Students';
changeStyleButton.addEventListener('click', changeListStyle);
document.body.appendChild(changeStyleButton);
