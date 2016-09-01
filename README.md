# tao-test-taker-generator
A command line tool to generate large sets of test takers

## Installation

 This requires a recent version of node.js (>= 6.0.0).

 ```sh
 git clone https://github.com/oat-sa/tao-test-taker-generator.git
 cd tao-test-taker-generator
 npm install -g
 ```

## Usage

```sh
Usage: taoUserGenerator [options]

  Options:

    -h, --help             output usage information
    -n, --number <number>  Number of test takers
```

For example,


```sh
taoUserGenerator -n 5000 > testTakers.csv
```


## License

Licensed under the [GNU General Public License version 2.0](https://www.gnu.org/licenses/gpl-2.0.txt)
