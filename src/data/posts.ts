// The Writing section stays out of the navigation until there are enough posts.
export const WRITING_MIN_POSTS = 10;

export const postCount = Object.keys(import.meta.glob('../posts/*.md')).length;

export const showWriting = postCount >= WRITING_MIN_POSTS;
