import {Env} from "@env";
import {Database} from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import {migrations, schema} from "@/data/datasource/local/impl/watermelon.d";

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  dbName: Env.APP_DATABASE_NAME,
  jsi: false,
  onSetUpError: _ => {
    // TODO: Should notify the crashlytics
  }
})

const database = new Database({
  adapter,
  modelClasses: [
  ],
})

export default database;
