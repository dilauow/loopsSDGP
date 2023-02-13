from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
import pandas
import numpy as np

# Define a custom tokenizer that returns the input string as is
def custom_tokenizer(sentence):
    return [sentence]

# Define the input sentences and labels
sentences = []
labels = []

# Vectorize the sentences using the custom tokenizer
vectorizer = CountVectorizer(tokenizer=custom_tokenizer)
X = vectorizer.fit_transform(sentences)

# Train a Random Forest classifier
clf = RandomForestClassifier(n_estimators=100)
clf.fit(X, labels)

# Predict the class for a new sentence
new_sentence = ["I keep to myself and avoid social situations."]
X_new = vectorizer.transform(new_sentence)
prediction = clf.predict(X_new)
print("Prediction:", prediction)
