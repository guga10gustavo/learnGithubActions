// index.js
const { faker } = require('@faker-js/faker');

// Gerar um nome completo
const name = faker.person.fullName();
console.log(`Nome Completo: ${name}`);

// Gerar um endereço de email
const email = faker.internet.email();
console.log(`Email: ${email}`);

// Gerar um endereço físico
const address = faker.location.streetAddress();
console.log(`Endereço: ${address}`);

// Gerar uma empresa com nome e descrição
const company = faker.company.name();
const companyDescription = faker.company.catchPhrase();
console.log(`Empresa: ${company}`);
console.log(`Descrição da Empresa: ${companyDescription}`);

// Gerar um número de telefone
const phoneNumber = faker.phone.number();
console.log(`Número de Telefone: ${phoneNumber}`);

// Gerar um texto lorem
const loremText = faker.lorem.paragraph();
console.log(`Texto Lorem: ${loremText}`);

// Gerar uma data futura
const futureDate = faker.date.future();
console.log(`Data Futura: ${futureDate.toDateString()}`);

// Gerar uma pessoa aleatória com informações variadas
const person = {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
    phoneNumber: faker.phone.number(),
    company: faker.company.name(),
    companyDescription: faker.company.catchPhrase(),
    text: faker.lorem.paragraph(),
    futureDate: faker.date.future().toDateString()
};

console.log('Pessoa Aleatória:', person);
