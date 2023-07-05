/* 
Buat variabel dengan nama biodata dan tipe data object dengan value dan tipe data
sebagai berikut:
● name (string)
● age(number)
● hobbies (array) minimal 3 elements
● IsMaried (boolean)
● schoolList (Array of Object) with key name, yearIn, yearOut, and major (if any,
if no set “null” ) minimal 3 elements
● skills (Array of Object) with key skillName and level (beginner, advanced,
expert) minimal 2 elements
● interestInCoding (Boolean)
*/

const biodata = {
  name: "Muhammad Faisal",
  age: 90,
  hobies: ["sleep", "eat", "code"],
  isMaried: false,
  schoolList: [
    {
      name: "Paket A",
      yearIn: "2005",
      yearOut: "2011",
      major: null,
    },
    {
      name: "Paket B",
      yearIn: "2011",
      yearOut: "2014",
      major: null,
    },
    {
      name: "Paket A",
      yearIn: "2015",
      yearOut: "2018",
      major: "IPS",
    },
    {
      name: "Universitas Muhammadiyah Ponorogo",
      yearIn: "2018",
      yearOut: "2022",
      major: "informatics engineering",
    },
  ],
  skills: [
    {
      skillName: "HTML",
      level: "advanced",
    },
    {
      skillName: "CSS",
      level: "advanced",
    },
    {
      skillName: "Javascript",
      level: "advanced",
    },
  ],
  interestInCoding: true,
};
