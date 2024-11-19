import {type Database} from "@nozbe/watermelondb";
import {type Container} from "inversify";

import database from "@/data/datasource/local/impl/watermelon";
import {type TypesMap} from "@/di/container.type";

const configure = (container: Container, types: TypesMap): void => {
  container.bind<Database>(types.watermelon).toConstantValue(database);
}

export default configure;
