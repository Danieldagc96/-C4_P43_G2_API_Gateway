const { gql } = require("apollo-server");

const contagioTypeDefs = gql`
  type Contagio {
    idPersona: Int!
    fechaDiagnostico: String!
    estadoEnfermedad: String!
    ubicacionCaso: String!
    estadoRecuperacion: String!
    fechaRecuperacion: String
    fechaMuerte: String
  }
  input ContagioInput {
    idPersona: Int!
    fechaDiagnostico: String!
    estadoEnfermedad: String!
    ubicacionCaso: String!
    estadoRecuperacion: String!
    fechaRecuperacion: String
    fechaMuerte: String
  }
  extend type Query {
    contagioByIdPersona(idPersona: Int!): [Contagio]
  }
  extend type Mutation {
    createContagio(contagio: ContagioInput!): Contagio
  }
`;
