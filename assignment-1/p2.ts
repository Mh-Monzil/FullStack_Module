{
  //

  interface Person {
    address?: {
      city: string;
      street: string;
    };
    phone?: string;
  }

  const getAddressCity = (person: Person): string | undefined => {
    return person?.address?.city;
  };

  const person1: Person = {
    address: {
      city: "Dhaka",
      street: "road 12",
    },
    phone: "1234566"
  };

  console.log(getAddressCity(person1));

  //
}
