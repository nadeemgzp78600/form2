document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("admissionForm");
    
    form.addEventListener("submit", function  (event) {
        event.preventDefault();
        
        // Retrieve form data
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const fName = document.getElementById("fName").value;
        const mName = document.getElementById("mName").value
        const age = document.getElementById("age").value;
        const adhar = document.getElementById("adhar").value
        const grade = document.getElementById("grade").value;
        const address = document.getElementById("address").value;
        const email = document.getElementById("email").value;

        // You can process and submit the form data here, e.g., send it to a server.
        
        // For now, let's just display the submitted data in an alert
        alert(`Form Submitted:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nFather Name:${fName}\nMother Name:${mName}\nAge: ${age}\nAdhar Number: ${adhar}\nGrade: ${grade}\nAddress: ${address}\nEmail: ${email}`);
    });
});
