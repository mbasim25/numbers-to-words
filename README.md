# Number to Words CLI Tool

The **Number to Words CLI Tool** is a command-line utility that converts numeric input into its corresponding words representation. This tool is designed to provide an easy way to convert numbers to their textual representation.

## Features

- Convert a numeric input to its words representation.
- Handles integers within the range of 0 to 100000.
- Scalable solution that can handle numbers up to a quadrillion.
- Provides accurate conversion using a predefined mapping of numbers to words.
- Includes comprehensive tests using the Jest testing framework.
- Minimal dependencies – only uses Jest for testing.

## Installation

To use the **Number to Words CLI Tool**, you'll need to have [Node.js](https://nodejs.org/) installed on your system and make sure that the version is 18 or higher.

## Usage

1. Open a terminal window.
2. Run the CLI tool with the following command:

   ```sh
   node ./src/numbers-to-words <number>
   ```

   or you can run the scalable solution using the following command:

   ```sh
   node ./src/scalable-solution <number>
   ```

## Running Tests

This project includes comprehensive tests using the Jest testing framework. To run the tests, follow these steps:

1. Open a terminal window.
2. Install the required testing package using the following command:

   ```sh
   npm i
   ```

3. Run the tests using the following command:

   ```sh
   npm test
   ```
