// document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // event.preventDefault(); // Prevent the form from submitting the traditional way
console.log("hello");
    // Collect form data
    const name = document.getElementById('name').value;
    const collegeName = document.getElementById('collegeName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Basic validation
//     if (name && email && collegeName && dob && gender && phone && address) {
//         // Display confirmation message
//         document.getElementById('confirmationMessage').classList.remove('hidden');
        
//         // Optionally, you can reset the form
//         document.getElementById('registrationForm').reset();
//     } else {
//         alert('Please fill out all fields.');
//     }
// });

document.getElementById('registrationForm').addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('hi');
    document.getElementById('registrationForm').style.display = 'none';
    sendOTP();

});
const generateOTP = () =>{
    return Math.floor(100000 + Math.random() * 900000).toString();
}
const sendOTP = () =>{
    const otp = generateOTP();
    console.log(otp);
   const param = {
    from_name: "Krishna Kant",
    message: otp,
    email_id:email
   };
   emailjs.send("service_6v0mrpe","template_58cczvc",param,
   { publicKey: 'FGJci8cPG8bwUOzOv',}
  )
  .then(Response =>{
      console.log("OTP sent successfully");
  })
  .catch(err => {
      console.log("Error has come", err);
  })
}
