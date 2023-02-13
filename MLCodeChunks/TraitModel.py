from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split

from Preprocessor import TextPreprocessor
from trainingData import TrainingData

import numpy as np

class TraitModel:
    def custom_tokenizer(self,sentence):
        return [sentence]

    def sentence2VectorConverter(self,sentenceArr):
        vectorizer = CountVectorizer(tokenizer=self.custom_tokenizer)
        vectorizedSentences = vectorizer.fit_transform(sentenceArr)
        return vectorizedSentences,vectorizer
    def randomForestTrain(self,vectorizedSentence,labels):
        clf = RandomForestClassifier(n_estimators=100)
        clf.fit(vectorizedSentence, labels)
        return clf

    def testTheModel(self,clf,sentence,vectorizer,y_test):

        # prediction = clf.predict(vecSentence)
        # print("Prediction:", prediction)
        XVecTest = vectorizer.transform(sentence)

        y_pred = clf.predict(XVecTest)
        counter = 0
        for i in range(len(y_pred)) :
            if(y_pred[i] == y_test[i]):
                counter+= 1
        # evaluate the accuracy
        print( f" Accuracy: {counter/len(y_test)*100}")


# import the data to the system
Tr = TrainingData()
Tr.importToModel()

# store them in model instances
sentences = np.array(Tr.sentences)
labels = np.array(Tr.extraversion)

# preprocess and restore
TP = TextPreprocessor()
sentences = np.array(TP.feedPreprocessorAnArray(sentences))



X_train, X_test, y_train, y_test = train_test_split(sentences, labels, test_size=0.8, random_state=None)

cTraitModel = TraitModel()
vectroizedState,vectorizer = cTraitModel.sentence2VectorConverter(X_train)

cTrainedClf = cTraitModel.randomForestTrain(vectroizedState,y_train)

cTraitModel.testTheModel(cTrainedClf,X_test,vectorizer,y_test)


