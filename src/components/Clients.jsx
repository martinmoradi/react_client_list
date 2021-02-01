import React from "react";
import faker from "faker";
import Client from "./Client";


const Clients = () => {
  const clientsList = Array.from({ length: 100 }, () => ({
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    avatar: faker.image.image(),
    job: faker.company.bs()
  }));

  return (
    <ul>
      {clientsList.map((clientData) => (
        <Client data={clientData} key={clientData.id} />
      ))}
    </ul>
  );

};

export default Clients;
