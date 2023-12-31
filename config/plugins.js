module.exports = ({
  env
}) => ({
/*
  upload: {
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: "DO00BB9MKXFCKGWBWKE2",
        secret: 'NTTzxMIKs+QdjXGjsPuG1279eU/DoWGN/evyeQJ61rE',
        endpoint: 'nyc3.digitaloceanspaces.com',
        space: "tatudev",
        directory: 'batumi',
      },
    },
  },
*/
  transformer: {
    enabled: true,
    config: {
      prefix: '/api/',
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      }
    }
  },
  'strapi-plugin-populate-deep': {
    config: { 
      defaultDepth: 4, // Default is 5
    }
  },


});
