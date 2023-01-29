class Telephone {
  constructor() {
    this.observers = new Set();
    this.phoneNumbers = new Set();
  }

  // this adds observers

  addObserver(observer) {
    this.observers.add(observer);
  }

  //  this removes observers

  removeObserver(observer) {
    this.observers.delete(observer);
  }

  //  this notifies observers when a number is dialed or printed

  notifyObserver(context) {
    for (let observer of this.observers) {
      observer.dial(context);
    }
  }

  // this adds phone_number

  addPhoneNumber(phone_number) {
    this.phoneNumbers.add(phone_number);
  }

  // this removes phone number
  removePhoneNumber(phone_number) {
    this.phoneNumbers.delete(phone_number);
  }

  // this dials a number and checks if the number is in the database
  dialPhoneNumber(phone_number) {
    if (this.phoneNumbers.has(phone_number)) {
      this.notifyObserver(phone_number);
    } else {
      console.log("This phone number is not registered in the database");
    }
  }
}

//   this prints the phone number
class PrintNumber {
  constructor() {
    this.observerName = "Chinyere";
  }

  dial(phone_number) {
    console.log(
      `This is the registered number: ${phone_number} and ${this.observerName} is printing ${phone_number}`
    );
  }
}

//   this class dials the phone number
class DialNumber {
  constructor() {
    this.observerName = "Adanma";
  }

  dial(phone_number) {
    console.log(`${this.observerName} is now dialing ${phone_number}`);
  }
}

const telephone = new Telephone();
const printing = new PrintNumber();
const dialing = new DialNumber();
telephone.addObserver(printing);
telephone.addObserver(dialing);
telephone.addPhoneNumber("2347023232");
telephone.dialPhoneNumber("2347023232");
