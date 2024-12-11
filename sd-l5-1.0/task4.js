

export class FriendAge {
    constructor(name,year,month,day){
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
        const today = new Date();
        let age = today.getFullYear() - year;
  
        const hasBirthdayOccurred = 
            today.getMonth() > (month - 1) || 
            (today.getMonth() === (month - 1) && today.getDate() >= day);
    
      
        if (!hasBirthdayOccurred) {
            age--;
            }
            this.age = age;
    }
     returnAge(){
        return `${this.name} is ${this.age} today!`
    }

}

// const dia = new FriendAge("aana",2000,12,25)
// console.log(dia.returnAge());

// Ed would like a way to calculate the ages of his friends.
// * Export a class that will return a string containing a given friend's name and age. It should:
//     * Take 4 arguments - a **name**, a **year**, a **month**, and a **day** - and construct an object with those 4 properties.
//     * Have a public method named `returnAge()` that will return the following string: `<name> is <age> today!`