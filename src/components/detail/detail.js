import React, { useState, useEffect } from "react";
import "./detail.css";
// import {
//   LineChart,
//   ResponsiveContainer,
//   Legend,
//   Tooltip,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
// } from "recharts";
// const pdata = [
//   {
//     name: "MongoDb",
//     student: 11,
//     fees: 120,
//   },
//   {
//     name: "Javascript",
//     student: 15,
//     fees: 12,
//   },
//   {
//     name: "PHP",
//     student: 5,
//     fees: 10,
//   },
//   {
//     name: "Java",
//     student: 10,
//     fees: 5,
//   },
//   {
//     name: "C#",
//     student: 9,
//     fees: 4,
//   },
//   {
//     name: "C++",
//     student: 10,
//     fees: 8,
//   },
// ];
const Detail = (props) => {
  // console.log(props.results.length);
  const [company, setCompany] = useState("BSE");
  const [results, setResults] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const handleChange = (e) => {
    setCompany(e.target.value);
  };
  const getdata = (company) => {
    fetch(`https://stockmarket-3fs7.onrender.com/` + company)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        // console.log(actualData);
        setResults(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    setResults(props.results);
  }, [props.results]);
  useEffect(() => {
    getdata(company);
  }, [company]);
  useEffect(() => {
    console.log(results);
    let x = results[0] ? results[0].Low : 100000.0;
    let y = results[0] ? results[0].High : 0.0;
    for (let i = 0; i < Math.min(1234, results.length); i++) {
      x = Math.min(x, results[i].Low);
      y = Math.max(y, results[i].High);
    }
    console.log(x, y);
    setMin(x);
    setMax(y);
  }, [results]);
  return (
    <div>
      <div class="right">
        <div class="title">Market</div>
        <div class="description">Browse stocks that are always available</div>

        <div>
          {/* <label for="dog-names">Choose a Company Name:</label> */}
          <select name="com-names" id="com-names" onChange={handleChange}>
            <option value="NSE">NSE</option>
            <option value="ASHOKLEY">ASHOKLEY</option>
            <option value="BSE">BSE</option>
            <option value="CIPLA">CIPLA</option>
            <option value="EICHERMOT">EICHERMOT</option>
            <option value="RELIANCE">RELIANCE</option>
            <option value="TATASTEEL">TATASTEEL</option>
          </select>
        </div>
        <div class="row">
          <div class="half">
            <div class="sub-title">
              <h1>{results[0] ? results[1234].Close : "Fetching"}</h1>
            </div>
            <h2>
              {" "}
              {results[0]
                ? results[1234].Close - results[1134].Adj_Close
                : "Fetching"}
            </h2>
            <div class="sub-title">
              <h3>12 Jan 2023 </h3>
            </div>
          </div>
          <div class="half">
            <div class="sub-title">
              <div className="Day">Day Range</div>
              <div className="Range">
                <span style={{ color: "red" }}>
                  {results[0] ? parseInt(results[1234].Low) : "Fetching"}
                </span>
                <span style={{ color: "green" }}>
                  {results[0] ? parseInt(results[1234].High) : "Fetching"}
                </span>
              </div>
              <div className="Line">.</div>
            </div>
            <div class="sub-title">
              <div className="Day">52 Week Range</div>
              <div className="Range">
                <span style={{ color: "red" }}>{parseInt(min)}</span>
                <span style={{ color: "green" }}>{parseInt(max)}</span>
              </div>
              <div className="Line">.</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="half">
            <div class="sub-title">Today Gainers</div>
            <div class="stock">
              <div class="stock-logo apple">
                <i class="fa fa-inverse fa-apple"></i>
              </div>
              <div class="stock-info">
                <div class="stock-name">Open</div>
                {/* <div class="stock-fullname"></div> */}
              </div>
              <div class="stock-value">
                + {results[0] ? results[1234].Open : "Error"} %
              </div>
            </div>
            <div class="stock">
              <div class="stock-logo facebook">
                <i class="fa fa-inverse fa-facebook"></i>
              </div>
              <div class="stock-info">
                <div class="stock-name">Previous Close</div>
                {/* <div class="stock-fullname">Facebook, Inc.</div> */}
              </div>
              <div class="stock-value">
                + {results[0] ? results[1134].Adj_Close : "Error"} %
              </div>
            </div>
            <div class="stock">
              <div class="stock-logo amazon">
                <i class="fa fa-inverse fa-amazon"></i>
              </div>
              <div class="stock-info">
                <div class="stock-name">Day High</div>
                {/* <div class="stock-fullname">Amazon.com, Inc.</div> */}
              </div>
              <div class="stock-value">
                {" "}
                + {results[0] ? results[1234].High : "Error"} %
              </div>
            </div>
          </div>
          <div class="half">
            <div class="sub-title">Popular this week</div>
            <div class="stock">
              <div class="stock-logo twitter">
                <i class="fa fa-inverse fa-twitter"></i>
              </div>
              <div class="stock-info">
                <div class="stock-name">DayLow</div>
                {/* <div class="stock-fullname">Twitter Inc.</div> */}
              </div>
              <div class="stock-value">
                + {results[0] ? results[1234].Low : "Error"} %
              </div>
            </div>
            <div class="stock">
              <div class="stock-logo paypal">
                <i class="fa fa-inverse fa-paypal"></i>
              </div>
              <div class="stock-info">
                <div class="stock-name">52 Week High </div>
                {/* <div class="stock-fullname">Paypal Holdings Inc.</div> */}
              </div>
              <div class="stock-value">{min}</div>
            </div>
            <div class="stock">
              <div class="stock-logo google">
                <i class="fa fa-inverse fa-google"></i>
              </div>
              <div class="stock-info">
                <div class="stock-name">52 Week Low</div>
                {/* <div class="stock-fullname">Alphabet Inc.</div> */}
              </div>
              <div class="stock-value">{max}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
