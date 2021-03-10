import { ExampleQuery, ExampleModel, ExampleRequest } from "../models/Example.model";

export default {
  async get(params: { [key: string]: any }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    try {
      query = Object.assign(ExampleRequest, query);
      const response = await window.APIM.gates.example.endpoint['get:/example'].call(params, query, body, null);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  async count(params: { [key: string]: any }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    try {
      query = Object.assign(ExampleRequest, query);
      const response = await window.APIM.gates.example.endpoint['get:/example/count'].call(params, query, body, null);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  async post(params: { [key: string]: any }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    try {
      const response = await window.APIM.gates.example.endpoint['post:/example'].call(params, query, body, null);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  async put(params: { id: number }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    try {
      const response = await window.APIM.gates.example.endpoint['put:/example/{id}'].call(params, query, body, null);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  async patch(params: { id: number }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    try {
      const response = await window.APIM.gates.example.endpoint['patch:/example/{id}'].call(params, query, body, null);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  async delete(params: { id: number }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    try {
      console.log('delete params ', params, " and body ", body);
      const response = await window.APIM.gates.example.endpoint['delete:/example/{id}'].call(params, query, body, null);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  async needUserLogged(params: { [key: string]: any }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    try {
      query = Object.assign(ExampleRequest, query);
      const response = await window.APIM.gates.example.endpoint['get:/example/userLogged'].call(params, query, body, null);
      return response;
    } catch (err) {
      return err;
    }
  },
};
