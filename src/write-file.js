const fs = require("fs");

const writeFile = (fileContent) => {
  fs.writeFile("./dist/index.html", fileContent, (err) => {
    if (err) {
      reject(err);
      // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
      return;
    }

    // if everything went well, resolve the Promise and send the successful data to the `.then()` method
    resolve({
      ok: true,
      message: "File created!",
    });
  });
};

module.exports = writeFile;