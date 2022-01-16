import luigi

class HelloLuigi(luigi.Task):
    def output(self):
        return luigi.LocalTarget('output/hello-luigi.txt')

    def run(self):
        with self.output().open("w") as outfile:
            outfile.write("Hello Luigi!")