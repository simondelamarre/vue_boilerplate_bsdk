
/**
 * Request Model can be directly provided by any OAS api documentation
 * In this case this is a basic extraction from this address
 * https://apim.bige.dev/gateway/api/3/swagger
 * this model is pretty simple due to the example api that just store ID,name
 * @param {number} ID
 * @param {string} name
 */

export declare type Example = {
  ID: number;
  name: string;
}

/**
 * This is a default query request that retrieve the API documentation logic...
 */
export const ExampleRequest: ExampleQuery = {
  "offset": 0,
  "limit": 100,
  "skip": 0,
  "order": "name DESC",
  "where": {
  },
  "fields": {
    "ID": true,
    "name": true
  }
}

/**
 * This sample scheme can be exported to use it on different OAS3 standard APIs
 */
export declare type ExampleQuery = {
  offset: number;
  limit: number;
  skip: number;
  order: string;
  where: { [key: string]: any };
  fields: Partial<ExampleFields>;
}
export declare type ExampleFields = {
  ID: boolean;
  name: boolean;
}
export declare type ExampleModel = {
  ID: number;
  name: string;
}