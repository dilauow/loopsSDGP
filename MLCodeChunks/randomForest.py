import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.model_selection import train_test_split


X = np.array([    "I enjoy spending time with my friends and family.",    "I prefer to keep to myself and avoid social situations.",    "I am often in a bad mood and easily get frustrated.",    "I am a detail-oriented and organized person.",    "I am always up for trying new things and taking risks."])
y = np.array([    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1]
])

# split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# convert X_train to numerical representation
sentences = X.tolist()  # Convert numpy array to list of strings
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(sentences)

# Convert the vectorized sentences back to strings
new_sentences = vectorizer.inverse_transform(X)

for i, sentence in enumerate(new_sentences):
    print(f"Original sentence: {sentences[i]}")
    print(f"Vectorized sentence: {' '.join(sentence)}")


# --------------------------------------------

# vectorizer = CountVectorizer(token_pattern=r"(?u)\b\w+\b")
# X_train = vectorizer.fit_transform(X_train)
# X_test = vectorizer.fit_transform(X_test)

#
# # train one classifier for each label
# classifiers = []
# for i in range(y_train.shape[1]):
#     clf = RandomForestClassifier()
#     clf.fit(X_train, y_train[:, i])
#     classifiers.append(clf)
#
# # Make predictions for each binary label set
# y_pred = clf.predict(X_test)
#
# # Evaluate the accuracy of the model
# accuracy = np.mean(np.all(y_pred == y_test, axis=1))
# print("Accuracy: {:.2f}%".format(accuracy * 100))