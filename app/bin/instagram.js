/**
 * Load ACCESS_TOKEN from .env file
 */
require('dotenv').config();

const fs = require('fs');
const path = require('path');
const Instagram = require('instagram-web-api')
const { INSTAGRAM_LOGIN, INSTAGRAM_PASSWORD } = process.env

const client = new Instagram({
  username: INSTAGRAM_LOGIN,
  password: INSTAGRAM_PASSWORD
});

/**
 * Save processed data to this file
 */
const outputFile = path.resolve(__dirname, '..', 'frontend', 'data', 'instagram-photos.json');

/**
 * Initial function
 */
const main = async ({ argv }) => {};

/**
 * Send API request to Instagram to get last medias
 */
const getMedia = async () => {
  await client.login();

  const photos = await client.getPhotosByUsername({ username: INSTAGRAM_LOGIN });
  const items = photos.user.edge_owner_to_timeline_media.edges;

  const response = items.map(({ node }) => {

    const link = `https://www.instagram.com/p/${node.shortcode}/`;
    const imageUrl = node.thumbnail_src;

    return {
      link,
      imageUrl
    }
  });

  return response;
};

/**
 * Save processed data to file
 */
const saveToFile = async (data = {}) => {
  /**
   * Wrap <data> => {data: <data>}
   */
  data = {data};

  /**
   * Prepare pretty printed json object
   */
  let dataToPrint = JSON.stringify(data, null, 2);

  /**
   * Save data to file
   */
  await fs.writeFileSync(outputFile, dataToPrint);

  console.log(`JSON data saved to ${outputFile}`);
};

/**
 * Main process chain
 */
main(process)
  .then(getMedia)
  .then(saveToFile)
  .then(process.exit)
  .catch(err => {
    console.error(err);
    process.exit(1)
  });
