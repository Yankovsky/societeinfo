const fs = require('fs')
// Exported from https://docs.google.com/spreadsheets/d/1nJyQOtgQAENUGVMGYuOD8QYMmqc9zoRpzLbM_XjVoUQ/edit#gid=821503827
const data = JSON.parse(fs.readFileSync('./naf.json'))
const processed = data.reduce((memo, item) => ({
  ...memo,
  [item.level5_code]: item,
}), {})
fs.writeFileSync('./naf-dict.json', JSON.stringify(processed, null, 2))