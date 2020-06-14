import { Command, flags } from "@oclif/command";
import { prompt } from "enquirer";
import * as chalk from "chalk";
import * as execa from "execa";
import * as fs from "fs";
import * as os from "os";

const HOME_DIR: string = os.homedir();
const PROJECT_DIR = HOME_DIR + "/Documents/github";
const getRepoName = (str: string) =>
  str.match(/^(https|git)(:\/\/|@)([^\/:]+)[\/:]([^\/:]+)\/(.+).git$/)![5];

const isGitUrl = (url: string): boolean => {
  const re = /(?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|\#[-\d\w._]+?)$/;
  return re.test(url);
};

export default class Clone extends Command {
  static description = " Cloning a repository";

  static examples = [
    `$ plaunch clone git@github.com/<user>/<project>
`,
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    url: flags.string({ char: "u", description: "remote url" }),
    location: flags.string({ char: "p", description: "location folder" }),
  };

  static args = [{ name: "url" }];
  static log: any;
  static perse: any;
  async run() {
    const { args, flags } = this.parse(Clone);

    if (flags.url && isGitUrl(flags.url)) {
      if (fs.existsSync(PROJECT_DIR) || fs.mkdirSync(PROJECT_DIR) || true) {
        try {
          const { stdout } = await execa("git", [
            "clone",
            flags.url,
            PROJECT_DIR + "/" + getRepoName(flags.url),
          ]);
          console.log(stdout);
          //stdout.pipe(process.stdout);
        } catch (error) {
          if (error.stderr.includes("already exist")) {
            const { answer } = await prompt({
              type: "confirm",
              name: "answer",
              message:
                "Project exist!, would you like me to open the folder with your favorite editor",
              initial: "y",
              format: (value) =>
                value ? chalk.cyan.bold("y") : chalk.green.cyan.bold("n"),
            });

            if (answer) {
              try {
                execa("code", [PROJECT_DIR + "/" + getRepoName(flags.url)]);
              } catch (error) {
                this.log(error);
              }
            }
          }
        }
      }
    } else {
      this.log("not a valid git url", flags.url);
    }
  }
}
