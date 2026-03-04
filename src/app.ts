import * as http from 'http';
import {getFilterEpisodes, getListEpisodes} from "./controllers/podscasts-controller";
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    const baseUrl = request.url?.split("?")[0];

    if (request.method === HttpMethods.GET && baseUrl === Routes.LIST_EPISODES) {
        await getListEpisodes(request, response);
    };
    if (request.method === HttpMethods.GET && baseUrl === Routes.FILTER_EPISODES) {
        await getFilterEpisodes(request, response);
    };
}