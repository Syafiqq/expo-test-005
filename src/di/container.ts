import {Container} from 'inversify';

import {Types} from "./container.type";
import cacheProvider from "./data/datasource/cache-provider";
import localProvider from "./data/datasource/local-provider";
import remoteProvider from "./data/datasource/remote-provider";
import repositoryProvider from "./data/repository";
import useCaseProvider from "./domain/use-case";

const container = new Container();

cacheProvider(container, Types);
localProvider(container, Types);
remoteProvider(container, Types);
repositoryProvider(container, Types);
// eslint-disable-next-line react-hooks/rules-of-hooks
useCaseProvider(container, Types);

export default container;
