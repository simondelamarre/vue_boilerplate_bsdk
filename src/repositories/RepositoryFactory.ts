import ExampleRepository from '../repositories/Example.repository';

const repositories: { [key: string]: any } = {
  'example': ExampleRepository
}
export default {
  get: (name: string) => repositories[name]
};
