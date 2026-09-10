import { toCsv, toExcelXml, type ExportTable } from "@/lib/export";

describe("export", () => {
  const table: ExportTable = {
    headers: ["Name", "Count"],
    rows: [
      ["Alpha", 1],
      ["Beta, Inc.", 2],
      ['Quote "test"', 3],
    ],
  };

  it("escapes CSV cells containing commas and quotes", () => {
    const csv = toCsv(table);

    expect(csv).toContain('"Beta, Inc."');
    expect(csv).toContain('"Quote ""test"""');
  });

  it("prepends a UTF-8 BOM for Excel compatibility", () => {
    expect(toCsv(table).charCodeAt(0)).toBe(0xfeff);
  });

  it("emits a SpreadsheetML workbook with escaped cells", () => {
    const xml = toExcelXml(table);

    expect(xml).toContain('<?xml version="1.0"?>');
    expect(xml).toContain("<Workbook");
    expect(xml).toContain("<Worksheet");
    expect(xml).toContain("Beta, Inc.");
    expect(xml).toContain("&quot;");
  });
});

it("neutralizes spreadsheet formulas in text while preserving numeric values", () => {
  const csv = toCsv({ headers: ["=header"], rows: [["=1+1"], ["  +SUM(A1)"], ["@SUM(A1)"], [-5], ["line\rbreak"]] });
  expect(csv).toContain("'=header");
  expect(csv).toContain("'=1+1");
  expect(csv).toContain("'  +SUM(A1)");
  expect(csv).toContain("'@SUM(A1)");
  expect(csv).toContain("\r\n-5\r\n");
  expect(csv).toContain('"line\rbreak"');
});
