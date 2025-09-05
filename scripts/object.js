/*const student = {
    firstName: "Shared",
    lastName: "Ordaz",
    school: "BYU Pathway",
    class: "WDD131"
  };
*/

  //OBJECT AND FUNCTION
  function printName(){
  let footer = document.querySelector('footer');
  let b = document.createElement('b');

  b.style.color = 'white';

  //b.textContent = `Student: ${student.firstName} ${student.lastName} - Assigment of ${student.class} at ${student.school}`;

  footer.append(b);
  }
  printName();
