export function ageCalculator(year,month,day) {
     
      const today = new Date();
      let age = today.getFullYear() - year;

      const hasBirthdayOccurred = 
          today.getMonth() > (month - 1) || 
          (today.getMonth() === (month - 1) && today.getDate() >= day);
  
    
      if (!hasBirthdayOccurred) {
          age--;
          }
  
      return age;

}

const dia = new ageCalculator(2000,12,25)
console.log(dia);

// Ed would like a way to calculate an age from a given birth date.
//     * Export a function that will take 3 arguments - a **year**, a **month**, and a **day** - then return an accurate age.
//         * For example, `ageCalculator(2000, 12, 25)` should return the age of someone born on Christmas Day, 2000.