const getCellData = (cell) => cell?.gs$cell;

const getKeys = (entries) => {
  const keys = [null];

  entries.forEach((entry) => {
    const { row, col, $t } = getCellData(entry);

    if (row === "1") {
      const colNum = Number.parseInt(col);
      keys[colNum] = $t;
    }
  });

  return keys;
};

const processEntries = (entries, cols, rows) => {
  const data = Array.from({ lenght: rows }).map((row) => ({}));
  const keys = getKeys(entries);

  entries.forEach((entry) => {
    const { row, col, $t } = getCellData(entry);
    if (row === "1") return;
    const obj = {};
    const colNum = Number.parseInt(col);
    const rowNum = Number.parseInt(row);

    data[rowNum] = {
      ...data[rowNum],
      [keys[colNum]]: $t,
    };
  });

  return data.filter((c) => c != null);
};

const transformJson = (obj) => {
  const cleanObj = {};
  cleanObj.updated = obj?.feed?.updated.$t;
  cleanObj.title = obj?.feed?.title?.$t;
  cleanObj.cols = Number.parseInt(obj?.feed?.gs$colCount.$t);
  cleanObj.rows = Number.parseInt(obj?.feed?.gs$rowCount.$t);

  const cells = obj?.feed?.entry;

  if (cells) {
    cleanObj.data = processEntries(cells, cleanObj.cols, cleanObj.rows);
  }
  return cleanObj;
};

module.exports = transformJson;
