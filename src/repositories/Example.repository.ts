import { ExampleQuery, ExampleModel, ExampleRequest } from "../models/Example.model";

export default {
  async get(params: { [key: string]: any }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    try {
      query = Object.assign(ExampleRequest, query);
      const response = await window.APIM.gates.example.endpoint['get:example/'].call(params, query, body, null);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  async count(params: { [key: string]: any }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    try {
      query = Object.assign(ExampleRequest, query);
      const response = await window.APIM.gates.example.endpoint['get:example/'].call(params, query, body, null);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  async post(params: { [key: string]: any }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    try {
      const response = await window.APIM.gates.example.endpoint['post:example/'].call(params, query, body, null);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  async put(params: { ID: number }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    try {
      const response = await window.APIM.gates.example.endpoint['put:example/{id}'].call(params, query, body, null);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  async patch(params: { ID: number }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    try {
      const response = await window.APIM.gates.example.endpoint['patch:example/{id}'].call(params, query, body, null);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  async delete(params: { ID: number }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    try {
      const response = await window.APIM.gates.example.endpoint['put:example/{id}'].call(params, query, body, null);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
};
