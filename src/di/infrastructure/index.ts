import {type QueryClient} from "@tanstack/query-core";
import {type Container} from "inversify";

import queryClient from "@/core/react-query";
import {type TypesMap} from "@/di/container.type";

const configure = (container: Container, types: TypesMap): void => {
  container.bind<QueryClient>(types.reactQuery).toConstantValue(queryClient);
}

export default configure;
