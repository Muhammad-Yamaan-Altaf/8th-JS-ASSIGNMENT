                // ! CHAPTERS 43 - 48 
                    // * Q.1
var link = document.getElementById("myLink");
link.addEventListener("click", function(event) {
    event.preventDefault();
    alert("You clicked the link!");
});
                    // * Q.2
var mobileImages = document.querySelectorAll('.mobile-image');
        mobileImages.forEach(function(image) {
            image.addEventListener('click', function() {
                var mobileId = image.id;
                alert('You clicked on ' + mobileId);
            });
        });
                    // * Q.3
var students = [
            { name: "Muhammad", rollNumber: "101", class:"12" },
            { name: "Yamaan", rollNumber: "102", class:"12" },
            { name: "Altaf", rollNumber: "103", class:"11" },
            { name: "Ali", rollNumber: "104", class:"12" },
            { name: "Ahmed", rollNumber: "105", class:"10" },
            { name: "Rayyan", rollNumber: "106", class:"10" },
            { name: "Layyan", rollNumber: "107", class:"11" },
            { name: "Kamal", rollNumber: "108", class:"10" },
            { name: "Jamal", rollNumber: "109", class:"11" },
            { name: "Hamid", rollNumber: "110", class:"12" },

        ];
        var table = document.getElementById("studentTable");

        function populateStudentTable() {
            students.forEach(function(student) {
                var row = table.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = student.name;
                cell2.innerHTML = student.rollNumber;
                cell3.innerHTML = student.class;

                var deleteButton = document.createElement("button");
                deleteButton.innerHTML = "Delete";
                deleteButton.onclick = function() {
                    var rowIndex = this.parentNode.parentNode.rowIndex;
                    table.deleteRow(rowIndex);
                };
                cell4.appendChild(deleteButton);
            });
        }
        populateStudentTable();                  
   // Q.4
   var image = document.getElementById("myImage");
   var originalSrc = image.src;

   image.addEventListener("mouseover", function() {
       image.src = "./pics/car2.jpeg"; 
   });

   image.addEventListener("mouseout", function() {
       image.src = "./pics/car1.jpeg"; 
   });

                    // *Q.5
var counterValue = 0;
var counterElement = document.getElementById("counter");
function increaseCounter() {
    counterValue++;
    counterElement.textContent = counterValue;
        }
function decreaseCounter() {
    counterValue--;
    counterElement.textContent = counterValue;
        }
var increaseButton = document.getElementById("increaseButton");
var decreaseButton = document.getElementById("decreaseButton");
    increaseButton.addEventListener("click", increaseCounter);
    decreaseButton.addEventListener("click", decreaseCounter);