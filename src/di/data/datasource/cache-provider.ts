import {type Container} from "inversify";
import {type MMKV} from "react-native-mmkv";

import {storage} from "@/data/datasource/cache/impl/mmkv";
import {type TypesMap} from "@/di/container.type";

const configure = (container: Container, types: TypesMap): void => {
  container.bind<MMKV>(types.mmkv).toConstantValue(storage);
}

export default configure;
