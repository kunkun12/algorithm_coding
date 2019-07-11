var path = require('path')
var fs = require('fs')
function readGraph(filename, g, weight) {

  return new Promise((resolve) => {
    var lineReader = require('readline').createInterface({
      input: fs.createReadStream(path.resolve(__dirname, filename))
    })
    let isFirst = true;
    lineReader.on('line', function(line) {
      if (!isFirst) {
        if (weight) {
          let data = line.match(/(\d+)\s+(\d+)\s(\.?\d+)/).slice(1, 4).map(Number)
          g.addEge(data[0], data[1], data[2])
        } else {
          let data = line.match(/(\d+)\s+(\d+)/).slice(1, 3).map(Number)
          g.addEge(data[0], data[1])
        }

      } else {
        isFirst = false;
      }
    });
    lineReader.on('close', () => resolve())
  })

}



//readGraph()
exports.readGraph = readGraph
