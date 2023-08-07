const findTheOldest = function (array) {
    return array.reduce((person1, person2) => {
      const person1Age = getAge(person1.yearOfBirth, person1.yearOfDeath);
      const person2Age = getAge(
        person2.yearOfBirth,
        person2.yearOfDeath
      );
      return person1Age > person2Age ? person1 : person2;
    });
  };
  
  const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  
// Do not edit below this line
module.exports = findTheOldest;
