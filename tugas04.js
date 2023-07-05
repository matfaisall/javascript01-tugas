let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// a.mengubah nama, email, hobby
const changeData = {
  ...data,
  name: "Muhammad Faisal",
  email: "muh.faisal572@gmail.com",
  hobby: ["makan", "tidur", "code"],
};

// const changeData = {
//   ...(data.name = "Muhammad Faisal"),
//   ...(data.email = "muh.faisal572@gmail.com"),
//   ...(data.hobby = ["makan", "minum", "tidur"]),
// };

console.log(changeData);

// b.mengambil data
const { address } = { ...data };
const { street, city } = { ...address };
console.log(`jalan ${street}, kota ${city}`);
