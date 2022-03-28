import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "xga1s33v",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "skAtQAdtoKR5LlCX5HH1sKvH8ftPquZwsbh1QOty4fiLoKVw5qP7KlPoTsq3PZbzPfTiI9UwdpZkN3NXESt482pEa3dXIg2ceXA07guWq02mXUJM66XUg5k0Yjkn5gKbgJUW4tjnUBVcDhkFUckRwO3DUKX4q6PcBmPwnlbBTz30Mycva7v8",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)