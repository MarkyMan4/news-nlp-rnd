# create a json file with word counts
# this is the get data in the format needed for wordcloud

import json
import pandas as pd
import nltk
from nltk.corpus import stopwords

df = pd.read_csv('data/articles.csv')

words = []

content = df.iloc[5]['content']

# remove stopwords
words += [word for word in nltk.word_tokenize(content) if len(word) > 3 and word not in stopwords.words('english')]

# get counts of each word
counts = {}

for word in words:
    if word not in counts:
        counts.update({word: 1})
    else:
        counts[word] += 1

# format counts as needed for react-wordcloud
formatted_counts = []

for word, count in counts.items():
    formatted_counts.append({
        'text': word,
        'value': count
    })

with open('data/word_counts.json', 'w') as f:
    json.dump(formatted_counts, f)
