import nltk
nltk.download('omw-1.4')
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
import numpy as np
from trainingData import TrainingData

nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')


class TextPreprocessor:
    lemmatizer = ""
    def __init__(self):

        self.lemmatizer= WordNetLemmatizer()

    def preprocess_text(self,text):
        # Tokenize text
        words = word_tokenize(text)

        # Remove stop words
        stop_words = set(stopwords.words("english"))
        words = [word for word in words if word.lower() not in stop_words]

        # Lemmatize words

        words = [self.lemmatizer.lemmatize(word) for word in words]

        # Join words back into a sentence
        completeSentences =  " ".join(words)
        return completeSentences
    def feedPreprocessorAnArray(self,array):
        preprocessedArray = []
        for sent in array:
            preprocessedArray.append(self.preprocess_text(sent))

        return preprocessedArray



# Tr = TrainingData()
# Tr.importToModel()
#
# sentences = np.array(Tr.sentences)
# prepro = TextPreprocessor()
# print(prepro.feedPreprocessorAnArray(sentences))
