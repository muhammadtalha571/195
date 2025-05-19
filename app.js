function generatePassword(length = 6) {
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let specialChars = '@#$%^&*!?';
    let allChars = lowercase + numbers + specialChars;
  
    let password = '';
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    return password;
  }
  
  console.log(generatePassword()); 
  document.write(generatePassword())   





// function generatePassword(length = 6) {
//     const lowercase = 'abcdefghijklmnopqrstuvwxyz';
//     const numbers = '0123456789';
//     const specialChars = '@#$%^&*!?';
//     const allChars = lowercase + numbers + specialChars;
  
//     let password = '';
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * allChars.length);
//       password += allChars[randomIndex];
//     }
  
//     return password;
//   }
  

//   let userInput = prompt("Enter password length (default is 6):");
  
//   let passwordLength = parseInt(userInput);
  
 
//   if (isNaN(passwordLength) || passwordLength <= 0) {
//     passwordLength = 6;
//   }
  
//   const password = generatePassword(passwordLength);
//   console.log("Generated Password:", password);
  