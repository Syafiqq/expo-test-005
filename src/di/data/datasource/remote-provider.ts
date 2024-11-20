import {type AxiosInstance} from "axios";
import {type Container} from "inversify";

import axiosInstance from "@/data/datasource/remove/impl/axios/axios";
import {type TypesMap} from "@/di/container.type";

const configure = (container: Container, types: TypesMap): void => {
  container.bind<AxiosInstance>(types.axios).toConstantValue(axiosInstance);
}

export default configure;
