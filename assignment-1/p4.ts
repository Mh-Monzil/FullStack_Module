{
  //
  

  const addNumber = (mixedData: (number | string)[])  => {
    let total: number = 0;
    for (let i = 0; i < mixedData.length; i++) {
      if (typeof mixedData[i] === "number") {
        total = total + (mixedData[i] as number);
      }
    }
    return total
  };

  console.log(addNumber([1,'two', 3, 'four', 5]));

  //
}
