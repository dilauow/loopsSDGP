import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split

from MLCodeChunks.Preprocessor import TextPreprocessor
from MLCodeChunks.TraitModel import TraitModel
from MLCodeChunks.trainingData import TrainingData


class TrainingModel():
    def __init__(self):
        self.classifiers = []
        self.TraitM = TraitModel()


    def loadData(self):
        Tr = TrainingData()
        Tr.importToModel()
        # store them in model instances
        sentences = np.array(Tr.sentences)
        labels = [np.array(Tr.openness),np.array(Tr.consciensiosness), np.array(Tr.extraversion),np.array(Tr.agreebleness),np.array(Tr.nurotisicm)]
        # returns the sentences and targets of all the traits
        return sentences,labels

    def preprocessData(self):
        TP = TextPreprocessor()
        sentences,labels = self.loadData()
        preprocessedSentences = np.array(TP.feedPreprocessorAnArray(sentences))
        return preprocessedSentences
    def splitAndTokenize(self,preprocessedData):
        self.vectorizer = CountVectorizer(tokenizer=self.TraitM.custom_tokenizer)
        X_train, X_test, y_train, y_test = train_test_split(preprocessedData, labels, test_size=0.8, random_state=None)
        X_train_vectorized =  self.vectorizer.fit_transform(X_train)
        X_test_vectorized = self.vectorizer.fit_transform(X_train)
        return X_test_vectorized, X_train_vectorized,y_test,y_train

    def trainClassifires(self,vectorizedSentences,labels):
        for target in labels:
            clf = self.TraitM.randomForestTrain(vectorizedSentences,target)
            self.classifiers.append(clf)
    def testAllClassifiers(self,text,labels):
        counter =0
        for clf in self.classifiers:
            self.TraitM.testTheModel(clf,text,labels[counter])
            counter+= 1








