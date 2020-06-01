plaunch
=======

A simple CLI for improving your productivity 😏

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/plaunch.svg)](https://npmjs.org/package/plaunch)
[![CircleCI](https://circleci.com/gh/uneducatedengineer/plaunch/tree/master.svg?style=shield)](https://circleci.com/gh/uneducatedengineer/plaunch/tree/master)
[![Codecov](https://codecov.io/gh/uneducatedengineer/plaunch/branch/master/graph/badge.svg)](https://codecov.io/gh/uneducatedengineer/plaunch)
[![Downloads/week](https://img.shields.io/npm/dw/plaunch.svg)](https://npmjs.org/package/plaunch)
[![License](https://img.shields.io/npm/l/plaunch.svg)](https://github.com/uneducatedengineer/plaunch/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g plaunch
$ plaunch COMMAND
running command...
$ plaunch (-v|--version|version)
plaunch/1.0.0 darwin-x64 node-v12.12.0
$ plaunch --help [COMMAND]
USAGE
  $ plaunch COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`plaunch hello [FILE]`](#plaunch-hello-file)
* [`plaunch help [COMMAND]`](#plaunch-help-command)

## `plaunch hello [FILE]`

describe the command here

```
USAGE
  $ plaunch hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ plaunch hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/uneducatedengineer/plaunch/blob/v1.0.0/src/commands/hello.ts)_

## `plaunch help [COMMAND]`

display help for plaunch

```
USAGE
  $ plaunch help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```
