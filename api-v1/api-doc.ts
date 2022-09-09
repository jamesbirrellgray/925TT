const apiDoc = {
  swagger: '2.0',
  basePath: '/v1',
  info: {
    title: 'Nine25 People Service.',
    version: '1.0.0'
  },
  definitions: {
    World: {
      type: 'object',
      properties: {
        name: {
          description: 'The name of this world.',
          type: 'string'
        }
      },
      required: ['name']
    }
  },
  paths: {}
};

export default apiDoc;