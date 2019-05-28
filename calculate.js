var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03, 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69,
    61.68, 70.44, 70.54, 90.0, 71.11, 80.01
];
var first = " ";
var second = " ";
var third = " ";
var fourth = " ";
var fifth = " ";
var sixth = " ";
var seventh = " ";
var eighth = " ";
var ninth = " ";
var tenth = " ";
var eleventh = " ";

function setHistogram(grades) {
    for (var i = 0; i < grades.size(); i++) {
        if (grades[i] >= document.getElementsByName("A+")) {
            first = first + "O";
        } else if (grades[i] >= document.getElementsByName("A")) {
            second = second + "O";
        } else if (grades[i] >= document.getElementsByName("A-")) {
            third = third + "O";
        } else if (grades[i] >= document.getElementsByName("B+")) {
            fourth = fourth + "O";
        } else if (grades[i] >= document.getElementsByName("B")) {
            fifth = fifth + "O";
        } else if (grades[i] >= document.getElementsByName("B-")) {
            sixth = sixth + "O";
        } else if (grades[i] >= document.getElementsByName("C+")) {
            seventh = seventh + "O";
        } else if (grades[i] >= document.getElementsByName("C")) {
            eighth = eighth + "O";
        } else if (grades[i] >= document.getElementsByName("C-")) {
            ninth = ninth + "O";
        } else if (grades[i] >= document.getElementsByName("D")) {
            tenth = tenth + "O";
        } else {
            eleventh = eleventh + "O";
        }
    }
}
document.getElementById("A+").innerHTML = first;
document.getElementById("A").innerHTML = second;
document.getElementById("A-").innerHTML = third;
document.getElementById("B+").innerHTML = fourth;
document.getElementById("B").innerHTML = fifth;
document.getElementById("B-").innerHTML = sixth;
document.getElementById("C+").innerHTML = seventh;
document.getElementById("C").innerHTML = eighth;
document.getElementById("C-").innerHTML = ninth;
document.getElementById("D").innerHTML = tenth
document.getElementById("F").innerHTML = eleventh;