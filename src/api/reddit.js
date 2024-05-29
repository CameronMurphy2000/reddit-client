export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
    try {
        const response = await fetch(`${API_ROOT}${subreddit}.json`);
        if (!response.ok) {
            throw new Error('Failed to fetch subreddit posts');
        }
        const json = await response.json();
        return json.data.children.map((post) => post.data);
    } catch (error) {
        console.error('Error fetching subreddit posts:', error);
        return [];
    }
};

export const getSubreddits = async () => {
    try {
        const response = await fetch(`${API_ROOT}/subreddits.json`);
        if (!response.ok) {
            throw new Error('Failed to fetch subreddits');
        }
        const json = await response.json();
        return json.data.children.map((subreddit) => subreddit.data);
    } catch (error) {
        console.error('Error fetching subreddits:', error);
        return [];
    }
};

export const getPostComments = async (permalink) => {
    try {
        const response = await fetch(`${API_ROOT}${permalink}.json`);
        if (!response.ok) {
            throw new Error('Failed to fetch post comments');
        }
        const json = await response.json();
        return json[1].data.children.map((comment) => comment.data);
    } catch (error) {
        console.error('Error fetching post comments:', error);
        return [];
    }
};
