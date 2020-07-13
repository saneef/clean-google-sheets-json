# clean-google-sheets-json

## Usage

1. Prepare your Google Sheet. Clark’s article, [‘How to use Google Sheets as a JSON Endpoint’](https://www.freecodecamp.org/news/cjn-google-sheets-as-json-endpoint/) will guide you on how to get the JSON endpoint.
2. Check out this project locally, and run `yarn install` or `npm install` inside the directory.
3. Run `$ ./cli.js <json-end-point-from-step-1>`, and you should get JSON saved as `output.json` in the same folder.

### ⚠️ Note

Currently only supports sheets with first rows as headers. Like CSV.

### References

- [Sample Google Sheet](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9hqMO9iJEgIne_9o-nLTtMR-dG2rWtZiONp2DMo6fhYM0FedwoXE34hbV1R07KfwbXl-WkXbQM9qZ/pubhtml)
- [Sample Sheet JSON endpoint](https://spreadsheets.google.com/feeds/cells/1v6HjlEZAi5Vhkgrcd96JsN34zOpS_aouienqPAVuZAk/1/public/full?alt=json)
- Sample output:

```json
{
  "updated": "2020-07-13T12:59:10.010Z",
  "title": "Sheet1",
  "cols": 3,
  "rows": 9,
  "data": [
    {
      "Date": "01/01/2018",
      "Title": "Monday",
      "Numbers": "0"
    },
    {
      "Date": "02/01/2018",
      "Title": "Tuesday",
      "Numbers": "1"
    },
    {
      "Date": "03/01/2018",
      "Title": "Wednesday",
      "Numbers": "2"
    },
    {
      "Date": "04/01/2018",
      "Title": "Thursday",
      "Numbers": "3"
    },
    {
      "Date": "05/01/2018",
      "Title": "Friday",
      "Numbers": "4"
    },
    {
      "Date": "06/01/2018",
      "Title": "Saturday",
      "Numbers": "5"
    },
    {
      "Date": "07/01/2018",
      "Title": "Sunday",
      "Numbers": "6"
    },
    {
      "Date": "08/01/2018",
      "Title": "Monday",
      "Numbers": "7"
    }
  ]
}
```
