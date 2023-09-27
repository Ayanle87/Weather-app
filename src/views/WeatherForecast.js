"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = require("react");
var react_2 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
require("bootstrap/dist/css/bootstrap.min.css");
require("./WeatherForecast.css");
function WeatherForecast(props) {
    var _a = (0, react_1.useState)(null), forecastData = _a[0], setForecastData = _a[1];
    (0, react_1.useEffect)(function () {
        if (props.query !== "") {
            fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(props.query, "&appid=bbd0b562e01a0ef44cef0350bd9ba80d&units=metric&lang=sv"))
                .then(function (response) { return response.json(); })
                .then(function (result) {
                if (result.cod === "200") {
                    console.log("result: ", result);
                    setForecastData(result);
                }
            })["catch"](function (error) { return console.error(error); });
        }
    }, [props.query]);
    return (react_2["default"].createElement("div", { className: "d-flex flex-wrap justify-content-center text-center ", id: "Card" }, forecastData &&
        forecastData.list
            .filter(function (item, index) { return index % 8 === 0; }) // Data för varje dag
            .slice(1, 5) //Datum 4 kommande dagar
            .map(function (item) { return (react_2["default"].createElement(Card_1["default"], { key: item.dt, style: {
                width: "18rem",
                margin: "0.5rem"
            }, bg: "light", text: "dark" },
            react_2["default"].createElement(Card_1["default"].Body, null,
                react_2["default"].createElement(Card_1["default"].Title, null, new Date(item.dt * 1000).toLocaleDateString()),
                react_2["default"].createElement(Card_1["default"].Text, null,
                    "Temperatur:",
                    " ",
                    item.main.temp ? Math.floor(item.main.temp) : "",
                    "\u00B0C"),
                react_2["default"].createElement(Card_1["default"].Text, null,
                    "K\u00E4nns som:",
                    " ",
                    item.main.feels_like ? Math.floor(item.main.feels_like) : "",
                    "\u00B0C")))); })));
}
exports["default"] = WeatherForecast;
//# sourceMappingURL=WeatherForecast.js.map