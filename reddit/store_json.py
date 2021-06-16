import json
import praw
from datetime import datetime

with open('secrets.json') as file:
    secrets = json.load(file)

    client_id = secrets['client_id']
    client_secret = secrets['client_secret']
    user_agent = secrets['user_agent']

reddit = praw.Reddit(
    client_id=client_id,
    client_secret=client_secret,
    user_agent=user_agent
)

posts = reddit.subreddit('worldnews').hot(limit=10)

json_data = []

for post in posts:
    json_data.append(
        {
            'id': post.id,
            'title': post.title,
            'date': datetime.fromtimestamp(post.created).strftime('%Y-%m-%dT%H:%M:%S'),
            'url': post.url,
            'score': post.score
        }
    )

with open('reddit/data/posts.json', 'w') as outfile:
    json.dump(json_data, outfile)
