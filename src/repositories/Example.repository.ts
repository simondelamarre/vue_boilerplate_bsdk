import { ExampleQuery, ExampleModel } from "../models/Example.datamodel";

export default {
  async get(params: { [key: string]: any }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    const response = await window.APIM.gates.example.endpoint['get:example/'].call(params, query, body, null);
    return response;
  },
  async count(params: { [key: string]: any }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    const response = await window.APIM.gates.example.endpoint['get:example/'].call(params, query, body, null);
    return response;
  },
  async post(params: { [key: string]: any }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    const response = await window.APIM.gates.example.endpoint['post:example/'].call(params, query, body, null);
    return response;
  },
  async put(params: { ID: number }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    const response = await window.APIM.gates.example.endpoint['put:example/{id}'].call(params, query, body, null);
    return response;
  },
  async patch(params: { ID: number }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    const response = await window.APIM.gates.example.endpoint['patch:example/{id}'].call(params, query, body, null);
    return response;
  },
  async delete(params: { ID: number }, query: Partial<ExampleQuery>, body: Partial<ExampleModel>) {
    const response = await window.APIM.gates.example.endpoint['put:example/{id}'].call(params, query, body, null);
    return response;
  },
};
