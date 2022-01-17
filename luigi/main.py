import luigi

class HelloLuigi(luigi.Task):
    def output(self):
        return luigi.LocalTarget('output/hello-luigi.txt')

    def run(self):
        with self.output().open("w") as outfile:
            outfile.write("Hello Luigi!\n")

# example second step that relies on the output of HelloLuigi
class Step2(luigi.Task):
    def requires(self):
        return HelloLuigi()

    def output(self):
        return luigi.LocalTarget('output/step2_output.txt')

    def run(self):
        with self.input().open('r') as infile:
            lines = infile.readlines()
            lines.append('this is a test\n')

            with self.output().open("w") as outfile:
                outfile.writelines(lines)
