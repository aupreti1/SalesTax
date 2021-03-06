//Setting the properties of SalesTaxesCreation
var SalesTaxesCreation = function (amount,item,price,type,tax,total) {
    this.amount = amount;
    this.item = item;
    this.type = type;
    this.price = price; 
    this.priceWithTax = this.priceWithTax()
    this.tax = this.salesTax();
    this.total = this.total();
  }

  //adding the new property priceWithTax to SalesTaxesCreation
  SalesTaxesCreation.prototype.priceWithTax = function (price) {

   var finalTax = 0;
   finalPrice = []
   
      for (var i = 0; i < this.item.length; i++) {
        var tax = 0
      //Setting the item exemptions
      if (this.item[i] === 'book' || this.item[i] === 'chocolate bar' || this.item[i] === 'chocolates' || this.item[i] === 'headache pills') {tax = 0}
      //If the item is not exempt it has a 10% tax applied to it
      else {tax +=  0.10}
      //If it is an imported item it has a 5% tax applied 
      if (this.type[i] === 'imported') {
        tax += .05
      }
      //Calculation to take the OG price added to the OG Price + tax fee which gives us the total prices
      //Total Price being the OG Price including Tax
      finalPrice.push(this.price[i] + this.price[i] * tax)
      console.log("This is final price" + finalPrice)
      //Rounding the total prices to 2 decimal places
      finalPrice = finalPrice.map(function(each_element) {
        return Number(each_element.toFixed(2));
      })

    }

    return finalPrice;
    
  }

  //adding the new property salesTax to SalesTaxesCreation
  SalesTaxesCreation.prototype.salesTax = function (item, price) {
    
   var tax = 0;
   var finalTax = 0;
   var priceWithTax = this.priceWithTax
  //Looping through the array and finding the total tax for each input
  for (var i = 0; i < this.price.length; i++) {
    tax += priceWithTax[i] - this.price[i]
  }
   //Rounding the total tax to 2 decimal places
   return (Math.round(tax*20)/20).toFixed(2);

  }
  
  
  //adding the new property salesTax to SalesTaxesCreation
  SalesTaxesCreation.prototype.total = function (item,price,tax) {
    var total = 0;
    var priceWithTax = this.priceWithTax
    //Looping through the array and calculating the final Total of the input with tax
    for (var i = 0; i < this.price.length; i++) {
      total += this.priceWithTax[i]
    }
    //Rounding the total tax to 2 decimal places
    return (Math.round(total*20)/20).toFixed(2);

  }
  
  
  //Receipt ONE--Structuring the way the receipt will print for each
  //Listing what item is in each input as well as the amount, OG price and if it is domestic or imported
  function receiptOne(amount,items,price,type) {
    var receiptOne = new SalesTaxesCreation(amount,items,price,type)
    console.log(receiptOne)
    var myObj = {}
    for (var i = 0; i < receiptOne.item.length; i++) {
      myObj.items += receiptOne.amount[i] + ' ' + receiptOne.item[i] + ': ' + receiptOne.priceWithTax[i] + ' '
    }
    myObj.salesTax = receiptOne.tax
    myObj.total = receiptOne.total
    return myObj;
   }
   receiptOne([1,1,1],['book','music cd','chocolate bar'],[12.49,14.99,0.85],['domestic','domestic','domestic'])
 

   //Receipt TWO
   function receiptTwo(amount,items,price,type) {
    var receiptTwo = new SalesTaxesCreation(amount,items,price,type)
    console.log(receiptTwo)
    var myObj = {}
    for (var i = 0; i < receiptTwo.item.length; i++) {
      myObj.items += receiptTwo.amount[i] + ' ' + receiptTwo.item[i] + ': ' + receiptTwo.priceWithTax[i] + ' '
    }
    myObj.salesTax = receiptTwo.tax
    myObj.total = receiptTwo.total
    return myObj;
   }
   receiptTwo([1,1],['chocolates','perfume'],[10.00,47.50],['imported', 'imported'])


  //Receipt THREE
  function receiptThree(amount,items,price,type) {
   var receiptThree = new SalesTaxesCreation(amount,items,price,type)
   console.log(receiptThree)
   var myObj = {}
   for (var i = 0; i < receiptThree.item.length; i++) {
     myObj.items += receiptThree.amount[i] + ' ' + receiptThree.item[i] + ': ' + receiptThree.priceWithTax[i] + ' '
   }
   myObj.salesTax = receiptThree.tax
   myObj.total = receiptThree.total
   return myObj;
  }
  receiptThree([1,1,1,1],['perfume','perfume','headache pills','chocolates'],[27.99,18.99,9.75,11.25],['imported','domestic','domestic','imported'])
