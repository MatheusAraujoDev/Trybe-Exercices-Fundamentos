//Para os exercícios a seguir, use o seguinte código:
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.

}

customerInfo(order);


const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
    
}

orderModifier(order);







/*Exercício 1. Complete a função customerInfo() para que seu retorno seja similar a 
"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, 
Nº: 389, AP: 701".*/
const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const rafaelAndrade = order.name;
  const phoneNumber = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;

    console.log(`Olá ${deliveryPerson}, entrega para: ${rafaelAndrade}, Telefone: ${phoneNumber}, R. ${street}, Ṇ°: ${number}, AP: ${apartment}`);  
  }
  customerInfo(order);



/*Exercício 2. Complete a função orderModifier() para que seu retorno seja similar a 
"Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."*/
const orderModifier = (order) => {
  const person = order.name = 'Luiz Silva'
  const pizzas = Object.keys(obj.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const newTotal = order.payment.total = '50';
  
  console.log(`Olá ${person}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${newTotal},00.`);
}
orderModifier(order);
