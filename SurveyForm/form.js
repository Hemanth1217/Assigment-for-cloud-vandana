// const form = document.getElementById("survey-form");
// const popup = document.getElementById("popup");
// const popupContent = document.getElementById("popup-content");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     // Gather form data
//     const firstName = document.getElementById("first-name").value;
//     const lastName = document.getElementById("last-name").value;
//     // const lastName = document.getElementById("last-name").value;
//     const dob = document.getElementById("dob").value;
//     const country = document.getElementById("country").value;
//     const male = document.getElementById("male").checked ? "Male" : "";
//     const female = document.getElementById("female").checked ? "Female" : "";
//     const profession = document.getElementById("profession").value;
//     const email = document.getElementById("email").value;
//     const mobile = document.getElementById("mobile").value;

//     // Create the content for the popup
//     const popupContentHTML = `
//     <p>First Name: ${firstName}</p>
//     <p>Last Name: ${lastName}</p>
//     <p>Date of Birth: ${dob}</p>
//     <p>Country: ${country}</p>
//     <p>Gender: ${male} ${female}</p>
//     <p>Profession: ${profession}</p>
//     <p>Email: ${email}</p>
//     <p>Mobile Number: ${mobile}</p>
//     `;

//     // Display the popup
//     popupContent.innerHTML = popupContentHTML;
//     popup.style.display = "flex";

//     // Reset the form
//     form.reset();
// });

// function resetForm() {
//     form.reset();
// }

// function closePopup() {
//     popup.style.display = "none";
// }
const form = document.getElementById("survey-form");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Gather form data
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const male = document.getElementById("male").checked ? "Male" : "";
    const female = document.getElementById("female").checked ? "Female" : "";
    const PreferNotToSay = document.getElementById("PreferNotToSay").checked ? "PreferNotToSay" : "";
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Create the content for the popup, including the "Close" button
    const popupContentHTML = `
    <p>First Name: ${firstName}</p>
    <p>Last Name: ${lastName}</p>
    <p>Date of Birth: ${dob}</p>
    <p>Country: ${country}</p>
    <p>Gender: ${male} ${female} ${PreferNotToSay}</p>
    <p>Profession: ${profession}</p>
    <p>Email: ${email}</p>
    <p>Mobile Number: ${mobile}</p>
    <button id="close-popup-btn" onclick="closePopup()">Close</button>
    `;

    // Display the popup
    popupContent.innerHTML = popupContentHTML;
    popup.style.display = "flex";

    // Reset the form
    form.reset();
});

function resetForm() {
    form.reset();
}

function closePopup() {
    popup.style.display = "none";
}

