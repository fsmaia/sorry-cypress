import mongodb, { MongoClientOptions } from 'mongodb';
import {
  MONGODB_AUTH_MECHANISM,
  MONGODB_DATABASE,
  MONGODB_PASSWORD,
  MONGODB_URI,
  MONGODB_USER,
} from '@src/config';

let db: mongodb.Db;
let client: mongodb.MongoClient;

export const init = async () => {
  if (db && client) {
    return;
  }

  const options: MongoClientOptions = {
    useNewUrlParser: true,
  };

  if (MONGODB_AUTH_MECHANISM != undefined) {
    options.authMechanism = MONGODB_AUTH_MECHANISM;
    options.auth = { user: MONGODB_USER, password: MONGODB_PASSWORD };
  }

  client = await mongodb.connect(MONGODB_URI, options);
  console.log('Successfully connected to MongoDB server');

  db = client.db(MONGODB_DATABASE);

  db.collection('runs').createIndex({ runId: 1 }, { unique: true });
  db.collection('instances').createIndex({ instanceId: 1 }, { unique: true });
  db.collection('projects').createIndex({ projectId: 1 }, { unique: true });
};

export const getMongoDB = () => db;
