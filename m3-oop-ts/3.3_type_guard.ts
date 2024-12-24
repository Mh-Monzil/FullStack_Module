{
  //type guard

  //typeof --> type guard

    type Alphanumeric = string | number;

  const add = (
    param1: Alphanumeric,
    param2: Alphanumeric
  ): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 3)
  const result2 = add("2", "3")

  console.log(result1, result2);



  //in guard

  type NormalUser = {
    name: string
  }

  type AdminUser = {
    name: string;
    role: "admin"
  }

  const normalUser: NormalUser = {
    name: "Normal brother",
  }

  const adminUser: AdminUser = {
    name: "Admin brother",
    role: "admin"
  }


  const getUser = (user: AdminUser | NormalUser) => {
    if('role' in user) {
        console.log(`My name is ${user.role} and my role is ${user.role}`);
    }else {
        console.log(`My name is ${user.name}`);
    }
  }

  getUser(normalUser)
  getUser(adminUser)





  //
}
