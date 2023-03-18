import { getPosts } from "./PostsService"

export const getTimeService = async () => {
    return await getPosts("betting/millisecond");
}