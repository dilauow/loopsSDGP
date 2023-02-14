import csv

class TrainingData:
    sentences = []
    openness =[]
    consciensiosness = []
    extraversion = []
    agreebleness =[]
    nurotisicm = []


    def exportToCSV(self):

        # Open the .txt file for reading
        with open('aTrait.txt', 'r') as file:
            lines = file.readlines()

        with open('oceanTraits.csv', 'a', newline='') as file:
            # Create a CSV writer object
            writer = csv.writer(file)

            # Write the header row to the .csv file
            writer.writerow(['sentence', 'O','C','E','A','N'])

            # Write the contents of the list of lines to the .csv file, with a value of 0 in the second column
            for line in lines:
                writer.writerow([line.strip(), 0,0,0,1,0])

    def importToModel(self):

        with open("oceanTraits.csv") as file:
            reader = csv.reader(file)
            next(reader)  # Skip the header row
            for row in reader:
                self.sentences.append(row[0])
                self.openness.append(int(row[1]))
                self.consciensiosness.append(int(row[2]))
                self.extraversion.append(int(row[3]))
                self.agreebleness.append(int(row[4]))
                self.agreebleness.append(int(row[5]))


#
Tr = TrainingData()
Tr.exportToCSV()
# Tr.importToModel()
# print(len(Tr.sentences))
# print(len(Tr.extraversion))

