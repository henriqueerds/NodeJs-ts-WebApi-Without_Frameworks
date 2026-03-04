import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast-models";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (podcast?: string): Promise<Podcast[]> => {
    const data = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(data);
    if (podcast) {
        jsonFile = jsonFile.filter((p: Podcast) => p.podcastName === podcast);
    }
    return jsonFile;
};