import React, { Component } from 'react';
import VegaLite from 'react-vega-lite';

const spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v2.json",
  repeat: {
    column: ["temp","humidity","pressure","wind_speed"]
  },
  "spec": {
    "layer": [
      {
        "mark": "line",
        "encoding": {
          "y": {
            //"aggregate": "mean",
            "field": {"repeat": "column"},
            "type": "quantitative"
          },
          "x": {
            //"timeUnit": "month",
            "field": "current_at",
            "type": "temporal",
            "title": "DateTime"
          },
          /*"detail": {
            "timeUnit": "year",
            "type": "temporal",
            "field": "current_at"
          },*/
          "opacity": {"value": 1}
        }
      },
      /*{
        "mark": "line",
        "encoding": {
          "y": {
            //"aggregate": "mean",
            "field": {"repeat": "column"},
            "type": "quantitative"
          },
          "x": {
            //"timeUnit": "month",
            "field": "current_at",
            "type": "temporal"
          }
        }
      }*/
    ]
  }
};

const data = {
  values: [
    {
      "current_at": "2018-08-03 16:00:00",
      "temp": 30.25,
      "pressure": 1026.5,
      "humidity": 40,
      "wind_speed": 1.76
    },
    {
      "current_at": "2018-08-03 19:00:00",
      "temp": 28.36,
      "pressure": 1026.35,
      "humidity": 47,
      "wind_speed": 1.76
    },
    {
      "current_at": "2018-08-03 22:00:00",
      "temp": 23.09,
      "pressure": 1027.69,
      "humidity": 70,
      "wind_speed": 2.01
    },
    {
      "current_at": "2018-08-04 01:00:00",
      "temp": 20.74,
      "pressure": 1028.29,
      "humidity": 76,
      "wind_speed": 2.06
    },
    {
      "current_at": "2018-08-04 04:00:00",
      "temp": 19.48,
      "pressure": 1028.39,
      "humidity": 80,
      "wind_speed": 3.42
    },
    {
      "current_at": "2018-08-04 07:00:00",
      "temp": 19.14,
      "pressure": 1029.57,
      "humidity": 84,
      "wind_speed": 3.46
    },
    {
      "current_at": "2018-08-04 10:00:00",
      "temp": 23.55,
      "pressure": 1030.38,
      "humidity": 65,
      "wind_speed": 2.48
    },
    {
      "current_at": "2018-08-04 13:00:00",
      "temp": 26.6,
      "pressure": 1029.77,
      "humidity": 54,
      "wind_speed": 2.01
    },
    {
      "current_at": "2018-08-04 16:00:00",
      "temp": 27.96,
      "pressure": 1029.13,
      "humidity": 46,
      "wind_speed": 2.3
    },
    {
      "current_at": "2018-08-04 19:00:00",
      "temp": 27.46,
      "pressure": 1028.63,
      "humidity": 40,
      "wind_speed": 2.46
    },
    {
      "current_at": "2018-08-04 22:00:00",
      "temp": 21.84,
      "pressure": 1029.27,
      "humidity": 56,
      "wind_speed": 1.86
    },
    {
      "current_at": "2018-08-05 01:00:00",
      "temp": 17.82,
      "pressure": 1029.95,
      "humidity": 89,
      "wind_speed": 1.51
    },
    {
      "current_at": "2018-08-05 04:00:00",
      "temp": 14.99,
      "pressure": 1029.58,
      "humidity": 96,
      "wind_speed": 1.27
    },
    {
      "current_at": "2018-08-05 07:00:00",
      "temp": 16.93,
      "pressure": 1029.52,
      "humidity": 92,
      "wind_speed": 1.06
    },
    {
      "current_at": "2018-08-05 10:00:00",
      "temp": 23.99,
      "pressure": 1029.23,
      "humidity": 56,
      "wind_speed": 1.96
    },
    {
      "current_at": "2018-08-05 13:00:00",
      "temp": 27.64,
      "pressure": 1027.64,
      "humidity": 47,
      "wind_speed": 1.62
    },
    {
      "current_at": "2018-08-05 16:00:00",
      "temp": 28.53,
      "pressure": 1025.6,
      "humidity": 43,
      "wind_speed": 1.76
    },
    {
      "current_at": "2018-08-05 19:00:00",
      "temp": 28,
      "pressure": 1024.21,
      "humidity": 41,
      "wind_speed": 1.77
    },
    {
      "current_at": "2018-08-05 22:00:00",
      "temp": 25.86,
      "pressure": 1024.03,
      "humidity": 45,
      "wind_speed": 2.96
    },
    {
      "current_at": "2018-08-06 01:00:00",
      "temp": 20.99,
      "pressure": 1024.02,
      "humidity": 60,
      "wind_speed": 2.22
    },
    {
      "current_at": "2018-08-06 04:00:00",
      "temp": 16.23,
      "pressure": 1022.93,
      "humidity": 81,
      "wind_speed": 1.15
    },
    {
      "current_at": "2018-08-06 07:00:00",
      "temp": 17.49,
      "pressure": 1021.93,
      "humidity": 75,
      "wind_speed": 1.11
    },
    {
      "current_at": "2018-08-06 10:00:00",
      "temp": 25.57,
      "pressure": 1020.97,
      "humidity": 49,
      "wind_speed": 1.52
    },
    {
      "current_at": "2018-08-06 13:00:00",
      "temp": 28.88,
      "pressure": 1020.45,
      "humidity": 41,
      "wind_speed": 1.86
    },
    {
      "current_at": "2018-08-06 16:00:00",
      "temp": 31.13,
      "pressure": 1018.83,
      "humidity": 35,
      "wind_speed": 2.51
    },
    {
      "current_at": "2018-08-06 19:00:00",
      "temp": 29.05,
      "pressure": 1017.8,
      "humidity": 31,
      "wind_speed": 2.4
    },
    {
      "current_at": "2018-08-06 22:00:00",
      "temp": 20.72,
      "pressure": 1017.79,
      "humidity": 43,
      "wind_speed": 2.19
    },
    {
      "current_at": "2018-08-07 01:00:00",
      "temp": 18.41,
      "pressure": 1017.44,
      "humidity": 61,
      "wind_speed": 2.52
    },
    {
      "current_at": "2018-08-07 04:00:00",
      "temp": 16.3,
      "pressure": 1016,
      "humidity": 75,
      "wind_speed": 1.16
    },
    {
      "current_at": "2018-08-07 07:00:00",
      "temp": 18.44,
      "pressure": 1015.58,
      "humidity": 69,
      "wind_speed": 1.19
    },
    {
      "current_at": "2018-08-07 10:00:00",
      "temp": 29.34,
      "pressure": 1014.39,
      "humidity": 42,
      "wind_speed": 1.76
    },
    {
      "current_at": "2018-08-07 13:00:00",
      "temp": 29.96,
      "pressure": 1012.85,
      "humidity": 36,
      "wind_speed": 2.67
    },
    {
      "current_at": "2018-08-07 16:00:00",
      "temp": 31.27,
      "pressure": 1011.77,
      "humidity": 33,
      "wind_speed": 3.95
    },
    {
      "current_at": "2018-08-07 19:00:00",
      "temp": 27.1,
      "pressure": 1011.65,
      "humidity": 32,
      "wind_speed": 4.42
    },
    {
      "current_at": "2018-08-07 22:00:00",
      "temp": 18.93,
      "pressure": 1012.29,
      "humidity": 78,
      "wind_speed": 1.77
    },
    {
      "current_at": "2018-08-08 01:00:00",
      "temp": 17.56,
      "pressure": 1012.91,
      "humidity": 78,
      "wind_speed": 2.34
    },
    {
      "current_at": "2018-08-08 04:00:00",
      "temp": 16.19,
      "pressure": 1013.67,
      "humidity": 69,
      "wind_speed": 3.46
    },
    {
      "current_at": "2018-08-08 07:00:00",
      "temp": 15.3,
      "pressure": 1015.28,
      "humidity": 62,
      "wind_speed": 3.68
    },
    {
      "current_at": "2018-08-08 10:00:00",
      "temp": 19.32,
      "pressure": 1016.58,
      "humidity": 59,
      "wind_speed": 3.47
    },
    {
      "current_at": "2018-08-08 13:00:00",
      "temp": 22.95,
      "pressure": 1017.76,
      "humidity": 59,
      "wind_speed": 4.68
    },
    {
      "current_at": "2018-08-08 16:00:00",
      "temp": 23.03,
      "pressure": 1017.67,
      "humidity": 48,
      "wind_speed": 4.87
    },
    {
      "current_at": "2018-08-08 19:00:00",
      "temp": 21.77,
      "pressure": 1017.66,
      "humidity": 45,
      "wind_speed": 4.11
    },
    {
      "current_at": "2018-08-08 22:00:00",
      "temp": 19.05,
      "pressure": 1019.02,
      "humidity": 55,
      "wind_speed": 2.56
    },
    {
      "current_at": "2018-08-09 01:00:00",
      "temp": 17.22,
      "pressure": 1019.74,
      "humidity": 68,
      "wind_speed": 2.21
    },
    {
      "current_at": "2018-08-09 04:00:00",
      "temp": 15.68,
      "pressure": 1018.88,
      "humidity": 80,
      "wind_speed": 1.51
    },
    {
      "current_at": "2018-08-09 07:00:00",
      "temp": 14.69,
      "pressure": 1018.63,
      "humidity": 95,
      "wind_speed": 1.67
    },
    {
      "current_at": "2018-08-09 10:00:00",
      "temp": 14.58,
      "pressure": 1019.06,
      "humidity": 100,
      "wind_speed": 2.11
    },
    {
      "current_at": "2018-08-09 13:00:00",
      "temp": 13.81,
      "pressure": 1018.56,
      "humidity": 100,
      "wind_speed": 4.07
    },
    {
      "current_at": "2018-08-09 16:00:00",
      "temp": 14.45,
      "pressure": 1019.51,
      "humidity": 97,
      "wind_speed": 2.52
    },
    {
      "current_at": "2018-08-09 19:00:00",
      "temp": 15.41,
      "pressure": 1020.56,
      "humidity": 93,
      "wind_speed": 3.37
    },
    {
      "current_at": "2018-08-09 22:00:00",
      "temp": 13.09,
      "pressure": 1022.28,
      "humidity": 92,
      "wind_speed": 2.75
    },
    {
      "current_at": "2018-08-10 01:00:00",
      "temp": 10.82,
      "pressure": 1023.97,
      "humidity": 93,
      "wind_speed": 3.82
    },
    {
      "current_at": "2018-08-10 04:00:00",
      "temp": 10.39,
      "pressure": 1024.73,
      "humidity": 94,
      "wind_speed": 3.46
    },
    {
      "current_at": "2018-08-10 07:00:00",
      "temp": 11.02,
      "pressure": 1025.44,
      "humidity": 95,
      "wind_speed": 3.66
    },
    {
      "current_at": "2018-08-10 10:00:00",
      "temp": 13.12,
      "pressure": 1025.73,
      "humidity": 99,
      "wind_speed": 4.46
    },
    {
      "current_at": "2018-08-10 13:00:00",
      "temp": 15.56,
      "pressure": 1025.41,
      "humidity": 90,
      "wind_speed": 5.35
    },
    {
      "current_at": "2018-08-10 16:00:00",
      "temp": 16.54,
      "pressure": 1025.94,
      "humidity": 90,
      "wind_speed": 5.01
    },
    {
      "current_at": "2018-08-10 19:00:00",
      "temp": 16.92,
      "pressure": 1026.52,
      "humidity": 80,
      "wind_speed": 4.1
    },
    {
      "current_at": "2018-08-10 22:00:00",
      "temp": 15.08,
      "pressure": 1027.52,
      "humidity": 81,
      "wind_speed": 3.62
    },
    {
      "current_at": "2018-08-11 01:00:00",
      "temp": 14.33,
      "pressure": 1027.61,
      "humidity": 89,
      "wind_speed": 3.02
    },
    {
      "current_at": "2018-08-11 04:00:00",
      "temp": 14.49,
      "pressure": 1026.95,
      "humidity": 95,
      "wind_speed": 3.43
    },
    {
      "current_at": "2018-08-11 07:00:00",
      "temp": 15.38,
      "pressure": 1026.32,
      "humidity": 88,
      "wind_speed": 4.32
    },
    {
      "current_at": "2018-08-11 10:00:00",
      "temp": 16.93,
      "pressure": 1025.79,
      "humidity": 80,
      "wind_speed": 5.21
    },
    {
      "current_at": "2018-08-11 13:00:00",
      "temp": 16.56,
      "pressure": 1024.79,
      "humidity": 84,
      "wind_speed": 6.22
    },
    {
      "current_at": "2018-08-11 16:00:00",
      "temp": 18.3,
      "pressure": 1023.34,
      "humidity": 77,
      "wind_speed": 6.9
    },
    {
      "current_at": "2018-08-11 19:00:00",
      "temp": 18.48,
      "pressure": 1022.34,
      "humidity": 76,
      "wind_speed": 6.57
    },
    {
      "current_at": "2018-08-11 22:00:00",
      "temp": 18.01,
      "pressure": 1021.73,
      "humidity": 79,
      "wind_speed": 5.72
    },
    {
      "current_at": "2018-08-12 01:00:00",
      "temp": 17.93,
      "pressure": 1020.83,
      "humidity": 82,
      "wind_speed": 5.17
    },
    {
      "current_at": "2018-08-12 04:00:00",
      "temp": 17.15,
      "pressure": 1019.85,
      "humidity": 85,
      "wind_speed": 4.59
    },
    {
      "current_at": "2018-08-12 07:00:00",
      "temp": 17.28,
      "pressure": 1019.33,
      "humidity": 84,
      "wind_speed": 4.16
    },
    {
      "current_at": "2018-08-12 10:00:00",
      "temp": 21.07,
      "pressure": 1019.33,
      "humidity": 72,
      "wind_speed": 4.41
    },
    {
      "current_at": "2018-08-12 13:00:00",
      "temp": 23.93,
      "pressure": 1018.46,
      "humidity": 63,
      "wind_speed": 4.66
    },
    {
      "current_at": "2018-08-12 16:00:00",
      "temp": 25.41,
      "pressure": 1017.56,
      "humidity": 55,
      "wind_speed": 4.66
    },
    {
      "current_at": "2018-08-12 19:00:00",
      "temp": 24.04,
      "pressure": 1016.99,
      "humidity": 54,
      "wind_speed": 4.31
    },
    {
      "current_at": "2018-08-12 22:00:00",
      "temp": 20.02,
      "pressure": 1017.12,
      "humidity": 71,
      "wind_speed": 2.77
    },
    {
      "current_at": "2018-08-13 01:00:00",
      "temp": 16.31,
      "pressure": 1016.97,
      "humidity": 91,
      "wind_speed": 1.62
    },
    {
      "current_at": "2018-08-13 04:00:00",
      "temp": 14.11,
      "pressure": 1016.17,
      "humidity": 92,
      "wind_speed": 1.03
    },
    {
      "current_at": "2018-08-13 07:00:00",
      "temp": 15.85,
      "pressure": 1015.84,
      "humidity": 93,
      "wind_speed": 1.12
    },
    {
      "current_at": "2018-08-13 10:00:00",
      "temp": 22.21,
      "pressure": 1015.92,
      "humidity": 69,
      "wind_speed": 1.56
    },
    {
      "current_at": "2018-08-13 12:00:00",
      "temp": 20.4,
      "pressure": 1012.9,
      "humidity": 65,
      "wind_speed": 3.62
    },
    {
      "current_at": "2018-08-13 13:00:00",
      "temp": 25.98,
      "pressure": 1015.15,
      "humidity": 59,
      "wind_speed": 1.61
    },
    {
      "current_at": "2018-08-13 15:00:00",
      "temp": 23.16,
      "pressure": 1013.41,
      "humidity": 58,
      "wind_speed": 4.1
    },
    {
      "current_at": "2018-08-13 16:00:00",
      "temp": 24.7,
      "pressure": 1014.77,
      "humidity": 76,
      "wind_speed": 1.66
    },
    {
      "current_at": "2018-08-13 18:00:00",
      "temp": 21.28,
      "pressure": 1014.62,
      "humidity": 65,
      "wind_speed": 3.46
    },
    {
      "current_at": "2018-08-13 21:00:00",
      "temp": 19.12,
      "pressure": 1016.48,
      "humidity": 72,
      "wind_speed": 3.33
    },
    {
      "current_at": "2018-08-14 00:00:00",
      "temp": 16.46,
      "pressure": 1018.4,
      "humidity": 82,
      "wind_speed": 3.31
    },
    {
      "current_at": "2018-08-14 03:00:00",
      "temp": 14.47,
      "pressure": 1019.5,
      "humidity": 83,
      "wind_speed": 3.26
    },
    {
      "current_at": "2018-08-14 06:00:00",
      "temp": 13.86,
      "pressure": 1020.83,
      "humidity": 85,
      "wind_speed": 3.42
    },
    {
      "current_at": "2018-08-14 09:00:00",
      "temp": 19.97,
      "pressure": 1021.78,
      "humidity": 65,
      "wind_speed": 2.76
    },
    {
      "current_at": "2018-08-14 12:00:00",
      "temp": 22.9,
      "pressure": 1022.31,
      "humidity": 56,
      "wind_speed": 3.82
    },
    {
      "current_at": "2018-08-14 15:00:00",
      "temp": 26.19,
      "pressure": 1021.55,
      "humidity": 48,
      "wind_speed": 4.16
    },
    {
      "current_at": "2018-08-14 18:00:00",
      "temp": 23.79,
      "pressure": 1021.62,
      "humidity": 44,
      "wind_speed": 4.57
    },
    {
      "current_at": "2018-08-14 21:00:00",
      "temp": 17.49,
      "pressure": 1023.06,
      "humidity": 57,
      "wind_speed": 4.01
    },
    {
      "current_at": "2018-08-15 00:00:00",
      "temp": 15.35,
      "pressure": 1023.77,
      "humidity": 65,
      "wind_speed": 3.41
    },
    {
      "current_at": "2018-08-15 03:00:00",
      "temp": 13.59,
      "pressure": 1023.71,
      "humidity": 85,
      "wind_speed": 3.15
    },
    {
      "current_at": "2018-08-15 06:00:00",
      "temp": 16.19,
      "pressure": 1023.94,
      "humidity": 92,
      "wind_speed": 3.41
    },
    {
      "current_at": "2018-08-15 09:00:00",
      "temp": 23.58,
      "pressure": 1024.06,
      "humidity": 66,
      "wind_speed": 3.96
    },
    {
      "current_at": "2018-08-15 12:00:00",
      "temp": 24.74,
      "pressure": 1022.96,
      "humidity": 57,
      "wind_speed": 4.76
    },
    {
      "current_at": "2018-08-15 15:00:00",
      "temp": 24.7,
      "pressure": 1021.53,
      "humidity": 50,
      "wind_speed": 5.72
    },
    {
      "current_at": "2018-08-15 18:00:00",
      "temp": 21.62,
      "pressure": 1020.89,
      "humidity": 49,
      "wind_speed": 6.02
    },
    {
      "current_at": "2018-08-15 21:00:00",
      "temp": 16.31,
      "pressure": 1021.27,
      "humidity": 61,
      "wind_speed": 4.96
    },
    {
      "current_at": "2018-08-16 00:00:00",
      "temp": 15.79,
      "pressure": 1020.57,
      "humidity": 78,
      "wind_speed": 4.56
    },
    {
      "current_at": "2018-08-16 03:00:00",
      "temp": 16.59,
      "pressure": 1019.48,
      "humidity": 92,
      "wind_speed": 4.67
    },
    {
      "current_at": "2018-08-16 06:00:00",
      "temp": 18.62,
      "pressure": 1018.82,
      "humidity": 86,
      "wind_speed": 5.01
    },
    {
      "current_at": "2018-08-16 09:00:00",
      "temp": 16.61,
      "pressure": 1019.96,
      "humidity": 93,
      "wind_speed": 4
    },
    {
      "current_at": "2018-08-16 12:00:00",
      "temp": 15.47,
      "pressure": 1020.19,
      "humidity": 89,
      "wind_speed": 4.31
    },
    {
      "current_at": "2018-08-16 15:00:00",
      "temp": 17.58,
      "pressure": 1020.29,
      "humidity": 79,
      "wind_speed": 4.26
    },
    {
      "current_at": "2018-08-16 18:00:00",
      "temp": 19.15,
      "pressure": 1020.66,
      "humidity": 69,
      "wind_speed": 3.82
    },
    {
      "current_at": "2018-08-16 21:00:00",
      "temp": 15.6,
      "pressure": 1022.61,
      "humidity": 74,
      "wind_speed": 2.97
    },
    {
      "current_at": "2018-08-17 00:00:00",
      "temp": 11.14,
      "pressure": 1024.11,
      "humidity": 91,
      "wind_speed": 2.21
    },
    {
      "current_at": "2018-08-17 03:00:00",
      "temp": 10.11,
      "pressure": 1024.61,
      "humidity": 99,
      "wind_speed": 1.15
    },
    {
      "current_at": "2018-08-17 06:00:00",
      "temp": 11.23,
      "pressure": 1025.48,
      "humidity": 95,
      "wind_speed": 2.12
    },
    {
      "current_at": "2018-08-17 09:00:00",
      "temp": 18.1,
      "pressure": 1026.53,
      "humidity": 77,
      "wind_speed": 2.52
    },
    {
      "current_at": "2018-08-17 12:00:00",
      "temp": 19.92,
      "pressure": 1026.22,
      "humidity": 67,
      "wind_speed": 3.47
    },
    {
      "current_at": "2018-08-17 15:00:00",
      "temp": 20.41,
      "pressure": 1025.91,
      "humidity": 59,
      "wind_speed": 4.37
    },
    {
      "current_at": "2018-08-17 18:00:00",
      "temp": 19.74,
      "pressure": 1026.08,
      "humidity": 55,
      "wind_speed": 3.97
    },
    {
      "current_at": "2018-08-17 21:00:00",
      "temp": 17.49,
      "pressure": 1027.31,
      "humidity": 64,
      "wind_speed": 3.32
    },
    {
      "current_at": "2018-08-18 00:00:00",
      "temp": 15.13,
      "pressure": 1027.56,
      "humidity": 77,
      "wind_speed": 3.21
    },
    {
      "current_at": "2018-08-18 03:00:00",
      "temp": 14.06,
      "pressure": 1027.28,
      "humidity": 88,
      "wind_speed": 3.31
    },
    {
      "current_at": "2018-08-18 06:00:00",
      "temp": 14.22,
      "pressure": 1027.31,
      "humidity": 89,
      "wind_speed": 4.01
    },
    {
      "current_at": "2018-08-18 09:00:00",
      "temp": 19.56,
      "pressure": 1027.56,
      "humidity": 69,
      "wind_speed": 4.42
    },
    {
      "current_at": "2018-08-18 12:00:00",
      "temp": 22.41,
      "pressure": 1026.72,
      "humidity": 63,
      "wind_speed": 4.81
    },
    {
      "current_at": "2018-08-18 15:00:00",
      "temp": 23.63,
      "pressure": 1026.04,
      "humidity": 57,
      "wind_speed": 4.76
    },
    {
      "current_at": "2018-08-18 18:00:00",
      "temp": 23.17,
      "pressure": 1025.95,
      "humidity": 55,
      "wind_speed": 4.26
    },
    {
      "current_at": "2018-08-18 21:00:00",
      "temp": 17.5,
      "pressure": 1027.07,
      "humidity": 70,
      "wind_speed": 3.36
    },
    {
      "current_at": "2018-08-19 00:00:00",
      "temp": 16.3,
      "pressure": 1027.33,
      "humidity": 83,
      "wind_speed": 2.52
    },
    {
      "current_at": "2018-08-19 03:00:00",
      "temp": 16.56,
      "pressure": 1026.54,
      "humidity": 88,
      "wind_speed": 3.02
    },
    {
      "current_at": "2018-08-19 06:00:00",
      "temp": 16.12,
      "pressure": 1025.75,
      "humidity": 88,
      "wind_speed": 4.45
    },
    {
      "current_at": "2018-08-19 09:00:00",
      "temp": 20.22,
      "pressure": 1025.15,
      "humidity": 66,
      "wind_speed": 5.75
    },
    {
      "current_at": "2018-08-19 12:00:00",
      "temp": 23.88,
      "pressure": 1023.88,
      "humidity": 60,
      "wind_speed": 6.61
    },
    {
      "current_at": "2018-08-19 15:00:00",
      "temp": 25.06,
      "pressure": 1023.09,
      "humidity": 57,
      "wind_speed": 6.36
    },
    {
      "current_at": "2018-08-19 18:00:00",
      "temp": 25,
      "pressure": 1022.8,
      "humidity": 54,
      "wind_speed": 5.66
    },
    {
      "current_at": "2018-08-19 21:00:00",
      "temp": 22.12,
      "pressure": 1024.19,
      "humidity": 61,
      "wind_speed": 3.62
    },
    {
      "current_at": "2018-08-20 00:00:00",
      "temp": 20.43,
      "pressure": 1024.77,
      "humidity": 72,
      "wind_speed": 2.42
    },
    {
      "current_at": "2018-08-20 03:00:00",
      "temp": 19.55,
      "pressure": 1025.28,
      "humidity": 76,
      "wind_speed": 2.5
    },
    {
      "current_at": "2018-08-20 06:00:00",
      "temp": 18.28,
      "pressure": 1025.92,
      "humidity": 80,
      "wind_speed": 2.07
    },
    {
      "current_at": "2018-08-20 09:00:00",
      "temp": 19.7,
      "pressure": 1026.35,
      "humidity": 79,
      "wind_speed": 1.77
    },
    {
      "current_at": "2018-08-20 12:00:00",
      "temp": 23.1,
      "pressure": 1025.78,
      "humidity": 70,
      "wind_speed": 1.76
    },
    {
      "current_at": "2018-08-20 15:00:00",
      "temp": 23.85,
      "pressure": 1024.86,
      "humidity": 66,
      "wind_speed": 2.66
    },
    {
      "current_at": "2018-08-20 18:00:00",
      "temp": 24.04,
      "pressure": 1023.92,
      "humidity": 63,
      "wind_speed": 2.91
    },
    {
      "current_at": "2018-08-20 21:00:00",
      "temp": 22.08,
      "pressure": 1024.44,
      "humidity": 71,
      "wind_speed": 2.86
    },
    {
      "current_at": "2018-08-21 00:00:00",
      "temp": 19.54,
      "pressure": 1024.65,
      "humidity": 74,
      "wind_speed": 2.76
    },
    {
      "current_at": "2018-08-21 03:00:00",
      "temp": 16.44,
      "pressure": 1024.48,
      "humidity": 88,
      "wind_speed": 2.24
    },
    {
      "current_at": "2018-08-21 06:00:00",
      "temp": 16.17,
      "pressure": 1024.54,
      "humidity": 93,
      "wind_speed": 2.6
    },
    {
      "current_at": "2018-08-21 09:00:00",
      "temp": 21.3,
      "pressure": 1024.45,
      "humidity": 74,
      "wind_speed": 2.37
    },
    {
      "current_at": "2018-08-21 12:00:00",
      "temp": 22.61,
      "pressure": 1023.66,
      "humidity": 68,
      "wind_speed": 3.16
    },
    {
      "current_at": "2018-08-21 15:00:00",
      "temp": 24.25,
      "pressure": 1022.43,
      "humidity": 61,
      "wind_speed": 3.56
    },
    {
      "current_at": "2018-08-21 18:00:00",
      "temp": 24.11,
      "pressure": 1021.37,
      "humidity": 57,
      "wind_speed": 3.21
    },
    {
      "current_at": "2018-08-21 21:00:00",
      "temp": 20.36,
      "pressure": 1021.73,
      "humidity": 68,
      "wind_speed": 2.66
    },
    {
      "current_at": "2018-08-22 00:00:00",
      "temp": 15.67,
      "pressure": 1023.92,
      "humidity": 87,
      "wind_speed": 2.26
    },
    {
      "current_at": "2018-08-22 03:00:00",
      "temp": 14.67,
      "pressure": 1023.47,
      "humidity": 92,
      "wind_speed": 2.41
    },
    {
      "current_at": "2018-08-22 06:00:00",
      "temp": 14.96,
      "pressure": 1023.68,
      "humidity": 95,
      "wind_speed": 2.96
    },
    {
      "current_at": "2018-08-22 09:00:00",
      "temp": 21.3,
      "pressure": 1023.76,
      "humidity": 73,
      "wind_speed": 2.31
    },
    {
      "current_at": "2018-08-22 12:00:00",
      "temp": 24.39,
      "pressure": 1022.84,
      "humidity": 63,
      "wind_speed": 2.56
    },
    {
      "current_at": "2018-08-22 15:00:00",
      "temp": 26.07,
      "pressure": 1021.58,
      "humidity": 55,
      "wind_speed": 3.11
    },
    {
      "current_at": "2018-08-22 18:00:00",
      "temp": 25.37,
      "pressure": 1020.92,
      "humidity": 54,
      "wind_speed": 3.26
    },
    {
      "current_at": "2018-08-22 21:00:00",
      "temp": 23.07,
      "pressure": 1021.74,
      "humidity": 60,
      "wind_speed": 2.77
    },
    {
      "current_at": "2018-08-23 00:00:00",
      "temp": 16.67,
      "pressure": 1021.29,
      "humidity": 72,
      "wind_speed": 2.11
    },
    {
      "current_at": "2018-08-23 03:00:00",
      "temp": 15.48,
      "pressure": 1019.97,
      "humidity": 83,
      "wind_speed": 2.12
    },
    {
      "current_at": "2018-08-23 06:00:00",
      "temp": 16.37,
      "pressure": 1019.07,
      "humidity": 89,
      "wind_speed": 2.56
    },
    {
      "current_at": "2018-08-23 09:00:00",
      "temp": 18.5,
      "pressure": 1018.47,
      "humidity": 88,
      "wind_speed": 4.16
    },
    {
      "current_at": "2018-08-23 12:00:00",
      "temp": 19.74,
      "pressure": 1017.65,
      "humidity": 80,
      "wind_speed": 4.82
    },
    {
      "current_at": "2018-08-23 15:00:00",
      "temp": 21.86,
      "pressure": 1016.83,
      "humidity": 68,
      "wind_speed": 4.01
    },
    {
      "current_at": "2018-08-23 18:00:00",
      "temp": 20.15,
      "pressure": 1016.87,
      "humidity": 61,
      "wind_speed": 4.81
    },
    {
      "current_at": "2018-08-23 21:00:00",
      "temp": 17,
      "pressure": 1018.46,
      "humidity": 68,
      "wind_speed": 4.47
    },
    {
      "current_at": "2018-08-24 00:00:00",
      "temp": 15.18,
      "pressure": 1019.21,
      "humidity": 76,
      "wind_speed": 4.17
    },
    {
      "current_at": "2018-08-24 03:00:00",
      "temp": 13.34,
      "pressure": 1019.79,
      "humidity": 75,
      "wind_speed": 4.21
    },
    {
      "current_at": "2018-08-24 06:00:00",
      "temp": 11.81,
      "pressure": 1021,
      "humidity": 79,
      "wind_speed": 4.47
    },
    {
      "current_at": "2018-08-24 09:00:00",
      "temp": 15.05,
      "pressure": 1021.94,
      "humidity": 69,
      "wind_speed": 4.91
    },
    {
      "current_at": "2018-08-24 12:00:00",
      "temp": 17.87,
      "pressure": 1020.02,
      "humidity": 68,
      "wind_speed": 5.19
    },
    {
      "current_at": "2018-08-24 13:00:00",
      "temp": 18.36,
      "pressure": 1020.02,
      "humidity": 68,
      "wind_speed": 5.19
    },
    {
      "current_at": "2018-08-24 15:00:00",
      "temp": 16.72,
      "pressure": 1019.02,
      "humidity": 65,
      "wind_speed": 5.67
    },
    {
      "current_at": "2018-08-24 16:00:00",
      "temp": 16.85,
      "pressure": 1019.02,
      "humidity": 65,
      "wind_speed": 5.67
    },
    {
      "current_at": "2018-08-24 18:00:00",
      "temp": 13.91,
      "pressure": 1018.33,
      "humidity": 66,
      "wind_speed": 4.83
    },
    {
      "current_at": "2018-08-24 19:00:00",
      "temp": 15.08,
      "pressure": 1018.33,
      "humidity": 66,
      "wind_speed": 4.83
    },
    {
      "current_at": "2018-08-24 21:00:00",
      "temp": 10.06,
      "pressure": 1018.19,
      "humidity": 88,
      "wind_speed": 4.11
    },
    {
      "current_at": "2018-08-24 22:00:00",
      "temp": 11.54,
      "pressure": 1018.19,
      "humidity": 88,
      "wind_speed": 4.11
    },
    {
      "current_at": "2018-08-25 00:00:00",
      "temp": 8.84,
      "pressure": 1018.73,
      "humidity": 87,
      "wind_speed": 3.91
    },
    {
      "current_at": "2018-08-25 01:00:00",
      "temp": 10.17,
      "pressure": 1018.73,
      "humidity": 87,
      "wind_speed": 3.91
    },
    {
      "current_at": "2018-08-25 03:00:00",
      "temp": 7.91,
      "pressure": 1019.12,
      "humidity": 87,
      "wind_speed": 4.31
    },
    {
      "current_at": "2018-08-25 04:00:00",
      "temp": 9.04,
      "pressure": 1019.12,
      "humidity": 87,
      "wind_speed": 4.31
    },
    {
      "current_at": "2018-08-25 06:00:00",
      "temp": 8.1,
      "pressure": 1019.62,
      "humidity": 88,
      "wind_speed": 3.87
    },
    {
      "current_at": "2018-08-25 07:00:00",
      "temp": 9.25,
      "pressure": 1019.62,
      "humidity": 88,
      "wind_speed": 3.87
    },
    {
      "current_at": "2018-08-25 09:00:00",
      "temp": 14.52,
      "pressure": 1020.83,
      "humidity": 76,
      "wind_speed": 4.22
    },
    {
      "current_at": "2018-08-25 10:00:00",
      "temp": 13.43,
      "pressure": 1020.43,
      "humidity": 82,
      "wind_speed": 4.02
    },
    {
      "current_at": "2018-08-25 12:00:00",
      "temp": 17.97,
      "pressure": 1020.92,
      "humidity": 71,
      "wind_speed": 3.91
    },
    {
      "current_at": "2018-08-25 13:00:00",
      "temp": 15.14,
      "pressure": 1020.56,
      "humidity": 76,
      "wind_speed": 4.21
    },
    {
      "current_at": "2018-08-25 15:00:00",
      "temp": 16.94,
      "pressure": 1020.93,
      "humidity": 62,
      "wind_speed": 4.06
    },
    {
      "current_at": "2018-08-25 16:00:00",
      "temp": 16.52,
      "pressure": 1020.18,
      "humidity": 70,
      "wind_speed": 3.62
    },
    {
      "current_at": "2018-08-25 18:00:00",
      "temp": 16.25,
      "pressure": 1021.48,
      "humidity": 62,
      "wind_speed": 2.76
    },
    {
      "current_at": "2018-08-25 19:00:00",
      "temp": 14.62,
      "pressure": 1021.11,
      "humidity": 70,
      "wind_speed": 2.92
    },
    {
      "current_at": "2018-08-25 21:00:00",
      "temp": 11.54,
      "pressure": 1022.65,
      "humidity": 77,
      "wind_speed": 2.01
    },
    {
      "current_at": "2018-08-25 22:00:00",
      "temp": 11.68,
      "pressure": 1022.24,
      "humidity": 77,
      "wind_speed": 2.12
    },
    {
      "current_at": "2018-08-26 00:00:00",
      "temp": 8.72,
      "pressure": 1022.43,
      "humidity": 90,
      "wind_speed": 1.17
    },
    {
      "current_at": "2018-08-26 01:00:00",
      "temp": 8.74,
      "pressure": 1022.16,
      "humidity": 91,
      "wind_speed": 1.17
    },
    {
      "current_at": "2018-08-26 03:00:00",
      "temp": 9.19,
      "pressure": 1021.23,
      "humidity": 94,
      "wind_speed": 1.17
    },
    {
      "current_at": "2018-08-26 04:00:00",
      "temp": 6.85,
      "pressure": 1021.84,
      "humidity": 97,
      "wind_speed": 1.15
    },
    {
      "current_at": "2018-08-26 06:00:00",
      "temp": 10.62,
      "pressure": 1020.3,
      "humidity": 90,
      "wind_speed": 2.31
    },
    {
      "current_at": "2018-08-26 07:00:00",
      "temp": 7,
      "pressure": 1021.55,
      "humidity": 93,
      "wind_speed": 1.18
    },
    {
      "current_at": "2018-08-26 09:00:00",
      "temp": 15.42,
      "pressure": 1019.1,
      "humidity": 69,
      "wind_speed": 3.56
    },
    {
      "current_at": "2018-08-26 10:00:00",
      "temp": 14.81,
      "pressure": 1020.8,
      "humidity": 78,
      "wind_speed": 2.71
    },
    {
      "current_at": "2018-08-26 12:00:00",
      "temp": 12.46,
      "pressure": 1015.78,
      "humidity": 83,
      "wind_speed": 7.17
    },
    {
      "current_at": "2018-08-26 13:00:00",
      "temp": 14.37,
      "pressure": 1019.39,
      "humidity": 73,
      "wind_speed": 5.11
    },
    {
      "current_at": "2018-08-26 15:00:00",
      "temp": 12.7,
      "pressure": 1011.4,
      "humidity": 97,
      "wind_speed": 8.57
    },
    {
      "current_at": "2018-08-26 16:00:00",
      "temp": 12.98,
      "pressure": 1015.94,
      "humidity": 90,
      "wind_speed": 6.45
    },
    {
      "current_at": "2018-08-26 18:00:00",
      "temp": 19.7,
      "pressure": 1008.04,
      "humidity": 95,
      "wind_speed": 7.06
    },
    {
      "current_at": "2018-08-26 19:00:00",
      "temp": 14.69,
      "pressure": 1012.23,
      "humidity": 97,
      "wind_speed": 6.21
    },
    {
      "current_at": "2018-08-26 21:00:00",
      "temp": 17.87,
      "pressure": 1009.48,
      "humidity": 98,
      "wind_speed": 5.66
    },
    {
      "current_at": "2018-08-26 22:00:00",
      "temp": 16.6,
      "pressure": 1012.26,
      "humidity": 97,
      "wind_speed": 4.85
    },
    {
      "current_at": "2018-08-27 00:00:00",
      "temp": 15.53,
      "pressure": 1011.02,
      "humidity": 97,
      "wind_speed": 5.16
    },
    {
      "current_at": "2018-08-27 01:00:00",
      "temp": 15.58,
      "pressure": 1013.61,
      "humidity": 99,
      "wind_speed": 4.78
    },
    {
      "current_at": "2018-08-27 03:00:00",
      "temp": 14.83,
      "pressure": 1012.14,
      "humidity": 100,
      "wind_speed": 4.87
    },
    {
      "current_at": "2018-08-27 04:00:00",
      "temp": 14.54,
      "pressure": 1015.01,
      "humidity": 98,
      "wind_speed": 4.46
    },
    {
      "current_at": "2018-08-27 06:00:00",
      "temp": 11.54,
      "pressure": 1014.36,
      "humidity": 97,
      "wind_speed": 4.6
    },
    {
      "current_at": "2018-08-27 07:00:00",
      "temp": 11.78,
      "pressure": 1017.19,
      "humidity": 98,
      "wind_speed": 4.06
    },
    {
      "current_at": "2018-08-27 09:00:00",
      "temp": 15.93,
      "pressure": 1017.06,
      "humidity": 94,
      "wind_speed": 4.81
    },
    {
      "current_at": "2018-08-27 10:00:00",
      "temp": 14.69,
      "pressure": 1019.24,
      "humidity": 95,
      "wind_speed": 4.33
    },
    {
      "current_at": "2018-08-27 12:00:00",
      "temp": 19.06,
      "pressure": 1018.03,
      "humidity": 85,
      "wind_speed": 5.02
    },
    {
      "current_at": "2018-08-27 13:00:00",
      "temp": 17.81,
      "pressure": 1020.45,
      "humidity": 82,
      "wind_speed": 4.51
    },
    {
      "current_at": "2018-08-27 15:00:00",
      "temp": 19.37,
      "pressure": 1019.19,
      "humidity": 75,
      "wind_speed": 4.92
    },
    {
      "current_at": "2018-08-27 16:00:00",
      "temp": 19.19,
      "pressure": 1021.12,
      "humidity": 73,
      "wind_speed": 4.21
    },
    {
      "current_at": "2018-08-27 18:00:00",
      "temp": 17.57,
      "pressure": 1020.57,
      "humidity": 73,
      "wind_speed": 3.56
    },
    {
      "current_at": "2018-08-27 19:00:00",
      "temp": 18.43,
      "pressure": 1022.14,
      "humidity": 69,
      "wind_speed": 2.56
    },
    {
      "current_at": "2018-08-27 21:00:00",
      "temp": 14.91,
      "pressure": 1022.71,
      "humidity": 75,
      "wind_speed": 2.41
    },
    {
      "current_at": "2018-08-27 22:00:00",
      "temp": 12.8,
      "pressure": 1023.63,
      "humidity": 89,
      "wind_speed": 1.46
    },
    {
      "current_at": "2018-08-28 00:00:00",
      "temp": 12.76,
      "pressure": 1023.84,
      "humidity": 90,
      "wind_speed": 1.25
    },
    {
      "current_at": "2018-08-28 01:00:00",
      "temp": 10.05,
      "pressure": 1024.17,
      "humidity": 94,
      "wind_speed": 0.41
    },
    {
      "current_at": "2018-08-28 03:00:00",
      "temp": 11.97,
      "pressure": 1024.47,
      "humidity": 96,
      "wind_speed": 1.51
    },
    {
      "current_at": "2018-08-28 04:00:00",
      "temp": 8.79,
      "pressure": 1024,
      "humidity": 94,
      "wind_speed": 1.17
    },
    {
      "current_at": "2018-08-28 06:00:00",
      "temp": 13.33,
      "pressure": 1024.63,
      "humidity": 94,
      "wind_speed": 1.2
    },
    {
      "current_at": "2018-08-28 07:00:00",
      "temp": 9.11,
      "pressure": 1024.07,
      "humidity": 92,
      "wind_speed": 1.17
    },
    {
      "current_at": "2018-08-28 09:00:00",
      "temp": 22.3,
      "pressure": 1024.71,
      "humidity": 77,
      "wind_speed": 1.81
    },
    {
      "current_at": "2018-08-28 10:00:00",
      "temp": 18.24,
      "pressure": 1024.06,
      "humidity": 82,
      "wind_speed": 1.97
    },
    {
      "current_at": "2018-08-28 12:00:00",
      "temp": 19.82,
      "pressure": 1023.4,
      "humidity": 72,
      "wind_speed": 2.31
    },
    {
      "current_at": "2018-08-28 13:00:00",
      "temp": 20.45,
      "pressure": 1023.22,
      "humidity": 75,
      "wind_speed": 3.01
    },
    {
      "current_at": "2018-08-28 15:00:00",
      "temp": 20.18,
      "pressure": 1021.79,
      "humidity": 66,
      "wind_speed": 2.52
    },
    {
      "current_at": "2018-08-28 16:00:00",
      "temp": 21.17,
      "pressure": 1021.86,
      "humidity": 67,
      "wind_speed": 2.76
    },
    {
      "current_at": "2018-08-28 18:00:00",
      "temp": 17.61,
      "pressure": 1020.86,
      "humidity": 61,
      "wind_speed": 2.01
    },
    {
      "current_at": "2018-08-28 19:00:00",
      "temp": 19.11,
      "pressure": 1021.34,
      "humidity": 64,
      "wind_speed": 2.12
    },
    {
      "current_at": "2018-08-28 21:00:00",
      "temp": 13.63,
      "pressure": 1020.92,
      "humidity": 70,
      "wind_speed": 2.38
    },
    {
      "current_at": "2018-08-28 22:00:00",
      "temp": 16.41,
      "pressure": 1022.1,
      "humidity": 76,
      "wind_speed": 2.63
    },
    {
      "current_at": "2018-08-29 00:00:00",
      "temp": 12.57,
      "pressure": 1020.27,
      "humidity": 80,
      "wind_speed": 1.81
    },
    {
      "current_at": "2018-08-29 01:00:00",
      "temp": 15.41,
      "pressure": 1021.66,
      "humidity": 96,
      "wind_speed": 1.52
    },
    {
      "current_at": "2018-08-29 03:00:00",
      "temp": 12.22,
      "pressure": 1020.18,
      "humidity": 94,
      "wind_speed": 2.42
    },
    {
      "current_at": "2018-08-29 04:00:00",
      "temp": 15.04,
      "pressure": 1021.45,
      "humidity": 99,
      "wind_speed": 1.3
    },
    {
      "current_at": "2018-08-29 06:00:00",
      "temp": 12.57,
      "pressure": 1020.43,
      "humidity": 94,
      "wind_speed": 1.96
    },
    {
      "current_at": "2018-08-29 07:00:00",
      "temp": 15.21,
      "pressure": 1021.58,
      "humidity": 99,
      "wind_speed": 1.51
    },
    {
      "current_at": "2018-08-29 09:00:00",
      "temp": 15.05,
      "pressure": 1020.69,
      "humidity": 92,
      "wind_speed": 1.87
    },
    {
      "current_at": "2018-08-29 10:00:00",
      "temp": 16.8,
      "pressure": 1022.39,
      "humidity": 90,
      "wind_speed": 2.06
    },
    {
      "current_at": "2018-08-29 12:00:00",
      "temp": 17.07,
      "pressure": 1021.54,
      "humidity": 79,
      "wind_speed": 2.96
    },
    {
      "current_at": "2018-08-29 15:00:00",
      "temp": 18.94,
      "pressure": 1022.57,
      "humidity": 75,
      "wind_speed": 3.66
    },
    {
      "current_at": "2018-08-29 18:00:00",
      "temp": 17.52,
      "pressure": 1024.47,
      "humidity": 73,
      "wind_speed": 4.11
    },
    {
      "current_at": "2018-08-29 21:00:00",
      "temp": 13.86,
      "pressure": 1026.97,
      "humidity": 76,
      "wind_speed": 3.96
    },
    {
      "current_at": "2018-08-30 00:00:00",
      "temp": 12.41,
      "pressure": 1028.44,
      "humidity": 78,
      "wind_speed": 3.27
    },
    {
      "current_at": "2018-08-30 03:00:00",
      "temp": 11.29,
      "pressure": 1029,
      "humidity": 80,
      "wind_speed": 2.51
    },
    {
      "current_at": "2018-08-30 06:00:00",
      "temp": 9.9,
      "pressure": 1029.7,
      "humidity": 86,
      "wind_speed": 1.4
    },
    {
      "current_at": "2018-08-30 09:00:00",
      "temp": 16.33,
      "pressure": 1029.86,
      "humidity": 83,
      "wind_speed": 2.07
    },
    {
      "current_at": "2018-08-30 12:00:00",
      "temp": 16.52,
      "pressure": 1029.74,
      "humidity": 83,
      "wind_speed": 2.06
    },
    {
      "current_at": "2018-08-30 15:00:00",
      "temp": 19.07,
      "pressure": 1029.53,
      "humidity": 72,
      "wind_speed": 1.82
    },
    {
      "current_at": "2018-08-30 18:00:00",
      "temp": 17.42,
      "pressure": 1029.18,
      "humidity": 70,
      "wind_speed": 1.3
    },
    {
      "current_at": "2018-08-30 21:00:00",
      "temp": 13.25,
      "pressure": 1029.82,
      "humidity": 76,
      "wind_speed": 1.4
    },
    {
      "current_at": "2018-08-31 00:00:00",
      "temp": 11.88,
      "pressure": 1029.92,
      "humidity": 87,
      "wind_speed": 1.32
    },
    {
      "current_at": "2018-08-31 03:00:00",
      "temp": 9.41,
      "pressure": 1029.5,
      "humidity": 90,
      "wind_speed": 1.17
    },
    {
      "current_at": "2018-08-31 06:00:00",
      "temp": 9.84,
      "pressure": 1029.86,
      "humidity": 86,
      "wind_speed": 1.61
    },
    {
      "current_at": "2018-08-31 09:00:00",
      "temp": 21.08,
      "pressure": 1029.64,
      "humidity": 69,
      "wind_speed": 2.47
    },
    {
      "current_at": "2018-08-31 12:00:00",
      "temp": 19.71,
      "pressure": 1029.13,
      "humidity": 62,
      "wind_speed": 2.36
    },
    {
      "current_at": "2018-08-31 15:00:00",
      "temp": 19.69,
      "pressure": 1029.01,
      "humidity": 56,
      "wind_speed": 1.91
    },
    {
      "current_at": "2018-08-31 18:00:00",
      "temp": 18.5,
      "pressure": 1029.24,
      "humidity": 55,
      "wind_speed": 2.07
    },
    {
      "current_at": "2018-08-31 21:00:00",
      "temp": 12.81,
      "pressure": 1030.4,
      "humidity": 63,
      "wind_speed": 2.92
    },
    {
      "current_at": "2018-09-01 00:00:00",
      "temp": 10.37,
      "pressure": 1030.73,
      "humidity": 81,
      "wind_speed": 2.06
    },
    {
      "current_at": "2018-09-01 03:00:00",
      "temp": 9.23,
      "pressure": 1030.81,
      "humidity": 97,
      "wind_speed": 1.97
    },
    {
      "current_at": "2018-09-01 06:00:00",
      "temp": 9.53,
      "pressure": 1031.41,
      "humidity": 89,
      "wind_speed": 2.25
    },
    {
      "current_at": "2018-09-01 09:00:00",
      "temp": 24.29,
      "pressure": 1032.36,
      "humidity": 73,
      "wind_speed": 2.22
    },
    {
      "current_at": "2018-09-01 12:00:00",
      "temp": 22.62,
      "pressure": 1031.72,
      "humidity": 61,
      "wind_speed": 2.93
    },
    {
      "current_at": "2018-09-01 15:00:00",
      "temp": 23.35,
      "pressure": 1031.17,
      "humidity": 51,
      "wind_speed": 2.95
    },
    {
      "current_at": "2018-09-01 18:00:00",
      "temp": 20.49,
      "pressure": 1031.36,
      "humidity": 49,
      "wind_speed": 2.21
    },
    {
      "current_at": "2018-09-01 21:00:00",
      "temp": 12.18,
      "pressure": 1032.67,
      "humidity": 56,
      "wind_speed": 2.86
    },
    {
      "current_at": "2018-09-02 00:00:00",
      "temp": 11.81,
      "pressure": 1032.59,
      "humidity": 79,
      "wind_speed": 2.86
    },
    {
      "current_at": "2018-09-02 03:00:00",
      "temp": 10.79,
      "pressure": 1031.91,
      "humidity": 97,
      "wind_speed": 2.86
    },
    {
      "current_at": "2018-09-02 06:00:00",
      "temp": 9.78,
      "pressure": 1031.73,
      "humidity": 98,
      "wind_speed": 1.41
    },
    {
      "current_at": "2018-09-02 09:00:00",
      "temp": 25.16,
      "pressure": 1031.86,
      "humidity": 61,
      "wind_speed": 1.81
    },
    {
      "current_at": "2018-09-02 12:00:00",
      "temp": 22.4,
      "pressure": 1030.66,
      "humidity": 50,
      "wind_speed": 2.26
    },
    {
      "current_at": "2018-09-02 15:00:00",
      "temp": 23.28,
      "pressure": 1029.08,
      "humidity": 43,
      "wind_speed": 2.23
    },
    {
      "current_at": "2018-09-02 18:00:00",
      "temp": 20.14,
      "pressure": 1028.57,
      "humidity": 41,
      "wind_speed": 2.06
    },
    {
      "current_at": "2018-09-02 21:00:00",
      "temp": 11.29,
      "pressure": 1029.25,
      "humidity": 66,
      "wind_speed": 2.77
    },
    {
      "current_at": "2018-09-03 00:00:00",
      "temp": 10.41,
      "pressure": 1028.72,
      "humidity": 96,
      "wind_speed": 1.12
    },
    {
      "current_at": "2018-09-03 03:00:00",
      "temp": 9.07,
      "pressure": 1027.89,
      "humidity": 92,
      "wind_speed": 1.21
    },
    {
      "current_at": "2018-09-03 06:00:00",
      "temp": 9.3,
      "pressure": 1027.61,
      "humidity": 91,
      "wind_speed": 1.21
    },
    {
      "current_at": "2018-09-03 09:00:00",
      "temp": 25.65,
      "pressure": 1027.83,
      "humidity": 63,
      "wind_speed": 1.16
    },
    {
      "current_at": "2018-09-03 12:00:00",
      "temp": 22.66,
      "pressure": 1026.69,
      "humidity": 51,
      "wind_speed": 1.76
    },
    {
      "current_at": "2018-09-03 15:00:00",
      "temp": 23.03,
      "pressure": 1025.81,
      "humidity": 44,
      "wind_speed": 1.76
    },
    {
      "current_at": "2018-09-03 18:00:00",
      "temp": 21.39,
      "pressure": 1025.59,
      "humidity": 44,
      "wind_speed": 1.41
    },
    {
      "current_at": "2018-09-03 21:00:00",
      "temp": 13.46,
      "pressure": 1026.34,
      "humidity": 76,
      "wind_speed": 1.71
    },
    {
      "current_at": "2018-09-04 00:00:00",
      "temp": 10.55,
      "pressure": 1026.54,
      "humidity": 96,
      "wind_speed": 1.06
    },
    {
      "current_at": "2018-09-04 03:00:00",
      "temp": 10.75,
      "pressure": 1026.49,
      "humidity": 92,
      "wind_speed": 1.87
    },
    {
      "current_at": "2018-09-04 06:00:00",
      "temp": 13.55,
      "pressure": 1026.99,
      "humidity": 99,
      "wind_speed": 2.65
    },
    {
      "current_at": "2018-09-04 09:00:00",
      "temp": 18.53,
      "pressure": 1027.08,
      "humidity": 82,
      "wind_speed": 2.96
    },
    {
      "current_at": "2018-09-04 12:00:00",
      "temp": 21.81,
      "pressure": 1025.92,
      "humidity": 57,
      "wind_speed": 3.66
    },
    {
      "current_at": "2018-09-04 15:00:00",
      "temp": 19.72,
      "pressure": 1025.47,
      "humidity": 48,
      "wind_speed": 4.28
    },
    {
      "current_at": "2018-09-04 18:00:00",
      "temp": 18.45,
      "pressure": 1025.74,
      "humidity": 47,
      "wind_speed": 3.57
    },
    {
      "current_at": "2018-09-04 21:00:00",
      "temp": 15.49,
      "pressure": 1026.88,
      "humidity": 54,
      "wind_speed": 3.66
    },
    {
      "current_at": "2018-09-05 00:00:00",
      "temp": 13.85,
      "pressure": 1027.14,
      "humidity": 68,
      "wind_speed": 3.88
    },
    {
      "current_at": "2018-09-05 03:00:00",
      "temp": 13.85,
      "pressure": 1026.99,
      "humidity": 87,
      "wind_speed": 4.35
    },
    {
      "current_at": "2018-09-05 06:00:00",
      "temp": 13.45,
      "pressure": 1027,
      "humidity": 90,
      "wind_speed": 4.33
    },
    {
      "current_at": "2018-09-05 09:00:00",
      "temp": 15.86,
      "pressure": 1027.82,
      "humidity": 82,
      "wind_speed": 4.15
    },
    {
      "current_at": "2018-09-05 12:00:00",
      "temp": 19.06,
      "pressure": 1026.93,
      "humidity": 76,
      "wind_speed": 4.1
    },
    {
      "current_at": "2018-09-05 15:00:00",
      "temp": 19.44,
      "pressure": 1026.18,
      "humidity": 76,
      "wind_speed": 3.96
    },
    {
      "current_at": "2018-09-05 18:00:00",
      "temp": 18.35,
      "pressure": 1025.67,
      "humidity": 77,
      "wind_speed": 3.76
    },
    {
      "current_at": "2018-09-05 21:00:00",
      "temp": 16,
      "pressure": 1025.8,
      "humidity": 82,
      "wind_speed": 3.06
    },
    {
      "current_at": "2018-09-06 00:00:00",
      "temp": 13.01,
      "pressure": 1025.5,
      "humidity": 94,
      "wind_speed": 2.62
    },
    {
      "current_at": "2018-09-06 03:00:00",
      "temp": 12.08,
      "pressure": 1024.68,
      "humidity": 100,
      "wind_speed": 3.01
    },
    {
      "current_at": "2018-09-06 06:00:00",
      "temp": 10.17,
      "pressure": 1024.72,
      "humidity": 98,
      "wind_speed": 2.96
    },
    {
      "current_at": "2018-09-06 09:00:00",
      "temp": 13,
      "pressure": 1024.03,
      "humidity": 85,
      "wind_speed": 2.11
    },
    {
      "current_at": "2018-09-06 12:00:00",
      "temp": 21.15,
      "pressure": 1022.51,
      "humidity": 77,
      "wind_speed": 2.07
    },
    {
      "current_at": "2018-09-06 15:00:00",
      "temp": 20.72,
      "pressure": 1020.86,
      "humidity": 65,
      "wind_speed": 3.27
    },
    {
      "current_at": "2018-09-06 18:00:00",
      "temp": 13.92,
      "pressure": 1019.91,
      "humidity": 90,
      "wind_speed": 3.46
    },
    {
      "current_at": "2018-09-06 21:00:00",
      "temp": 14.03,
      "pressure": 1019.88,
      "humidity": 88,
      "wind_speed": 3.58
    },
    {
      "current_at": "2018-09-07 00:00:00",
      "temp": 10.36,
      "pressure": 1020.4,
      "humidity": 88,
      "wind_speed": 3.66
    },
    {
      "current_at": "2018-09-07 03:00:00",
      "temp": 8.25,
      "pressure": 1020.92,
      "humidity": 88,
      "wind_speed": 3.76
    },
    {
      "current_at": "2018-09-07 06:00:00",
      "temp": 7.38,
      "pressure": 1021.32,
      "humidity": 92,
      "wind_speed": 3.95
    },
    {
      "current_at": "2018-09-07 09:00:00",
      "temp": 14.28,
      "pressure": 1022.31,
      "humidity": 71,
      "wind_speed": 3.66
    },
    {
      "current_at": "2018-09-07 12:00:00",
      "temp": 18.51,
      "pressure": 1022.11,
      "humidity": 62,
      "wind_speed": 4.66
    },
    {
      "current_at": "2018-09-07 15:00:00",
      "temp": 18.86,
      "pressure": 1022.1,
      "humidity": 52,
      "wind_speed": 5.26
    },
    {
      "current_at": "2018-09-07 18:00:00",
      "temp": 15.66,
      "pressure": 1022.69,
      "humidity": 48,
      "wind_speed": 4.02
    },
    {
      "current_at": "2018-09-07 21:00:00",
      "temp": 9.63,
      "pressure": 1024.15,
      "humidity": 61,
      "wind_speed": 2.8
    },
    {
      "current_at": "2018-09-08 00:00:00",
      "temp": 6.53,
      "pressure": 1024.94,
      "humidity": 82,
      "wind_speed": 1.77
    },
    {
      "current_at": "2018-09-08 03:00:00",
      "temp": 6.88,
      "pressure": 1025.44,
      "humidity": 88,
      "wind_speed": 2.11
    },
    {
      "current_at": "2018-09-08 06:00:00",
      "temp": 10.89,
      "pressure": 1025.18,
      "humidity": 82,
      "wind_speed": 3.31
    },
    {
      "current_at": "2018-09-08 09:00:00",
      "temp": 16.74,
      "pressure": 1024.68,
      "humidity": 74,
      "wind_speed": 3.09
    },
    {
      "current_at": "2018-09-08 12:00:00",
      "temp": 20.43,
      "pressure": 1024.39,
      "humidity": 62,
      "wind_speed": 4.11
    },
    {
      "current_at": "2018-09-08 15:00:00",
      "temp": 19.29,
      "pressure": 1023.78,
      "humidity": 58,
      "wind_speed": 4.55
    },
    {
      "current_at": "2018-09-08 18:00:00",
      "temp": 16.79,
      "pressure": 1023.98,
      "humidity": 62,
      "wind_speed": 3.96
    },
    {
      "current_at": "2018-09-08 21:00:00",
      "temp": 13.71,
      "pressure": 1024.44,
      "humidity": 72,
      "wind_speed": 3.03
    },
    {
      "current_at": "2018-09-09 00:00:00",
      "temp": 12.57,
      "pressure": 1024.48,
      "humidity": 87,
      "wind_speed": 2.85
    },
    {
      "current_at": "2018-09-09 03:00:00",
      "temp": 14.3,
      "pressure": 1023.96,
      "humidity": 91,
      "wind_speed": 2.66
    },
    {
      "current_at": "2018-09-09 06:00:00",
      "temp": 13.94,
      "pressure": 1023.9,
      "humidity": 92,
      "wind_speed": 2.75
    },
    {
      "current_at": "2018-09-09 09:00:00",
      "temp": 19.48,
      "pressure": 1023.93,
      "humidity": 77,
      "wind_speed": 4.2
    },
    {
      "current_at": "2018-09-09 12:00:00",
      "temp": 23.09,
      "pressure": 1023.61,
      "humidity": 68,
      "wind_speed": 5.12
    },
    {
      "current_at": "2018-09-09 15:00:00",
      "temp": 22.26,
      "pressure": 1023.23,
      "humidity": 61,
      "wind_speed": 5.71
    },
    {
      "current_at": "2018-09-09 18:00:00",
      "temp": 19.82,
      "pressure": 1023.93,
      "humidity": 64,
      "wind_speed": 4.82
    },
    {
      "current_at": "2018-09-09 21:00:00",
      "temp": 16.1,
      "pressure": 1025.39,
      "humidity": 74,
      "wind_speed": 3.56
    },
    {
      "current_at": "2018-09-10 00:00:00",
      "temp": 14.07,
      "pressure": 1026.23,
      "humidity": 81,
      "wind_speed": 3.07
    },
    {
      "current_at": "2018-09-10 03:00:00",
      "temp": 13.13,
      "pressure": 1026.72,
      "humidity": 89,
      "wind_speed": 3.1
    },
    {
      "current_at": "2018-09-10 06:00:00",
      "temp": 12.41,
      "pressure": 1027.35,
      "humidity": 89,
      "wind_speed": 3.01
    },
    {
      "current_at": "2018-09-10 09:00:00",
      "temp": 18.85,
      "pressure": 1028.08,
      "humidity": 75,
      "wind_speed": 2.81
    },
    {
      "current_at": "2018-09-10 12:00:00",
      "temp": 18.88,
      "pressure": 1027.79,
      "humidity": 67,
      "wind_speed": 4.17
    },
    {
      "current_at": "2018-09-10 15:00:00",
      "temp": 21.35,
      "pressure": 1026.84,
      "humidity": 56,
      "wind_speed": 5.25
    },
    {
      "current_at": "2018-09-10 18:00:00",
      "temp": 20.49,
      "pressure": 1026.37,
      "humidity": 58,
      "wind_speed": 5.37
    },
    {
      "current_at": "2018-09-10 21:00:00",
      "temp": 15.13,
      "pressure": 1026.56,
      "humidity": 73,
      "wind_speed": 5.26
    },
    {
      "current_at": "2018-09-11 00:00:00",
      "temp": 15.74,
      "pressure": 1025.77,
      "humidity": 82,
      "wind_speed": 6.06
    },
    {
      "current_at": "2018-09-11 03:00:00",
      "temp": 16.81,
      "pressure": 1025.24,
      "humidity": 85,
      "wind_speed": 6.32
    },
    {
      "current_at": "2018-09-11 06:00:00",
      "temp": 17.41,
      "pressure": 1024.78,
      "humidity": 84,
      "wind_speed": 5.73
    },
    {
      "current_at": "2018-09-11 09:00:00",
      "temp": 21.19,
      "pressure": 1025.25,
      "humidity": 74,
      "wind_speed": 6.72
    },
    {
      "current_at": "2018-09-11 12:00:00",
      "temp": 22.38,
      "pressure": 1025.14,
      "humidity": 67,
      "wind_speed": 6.36
    },
    {
      "current_at": "2018-09-11 15:00:00",
      "temp": 22.5,
      "pressure": 1024.88,
      "humidity": 64,
      "wind_speed": 5.36
    },
    {
      "current_at": "2018-09-11 18:00:00",
      "temp": 18.95,
      "pressure": 1024.76,
      "humidity": 79,
      "wind_speed": 3.66
    },
    {
      "current_at": "2018-09-11 21:00:00",
      "temp": 16.18,
      "pressure": 1024.93,
      "humidity": 94,
      "wind_speed": 2.27
    },
    {
      "current_at": "2018-09-12 00:00:00",
      "temp": 16.42,
      "pressure": 1024.18,
      "humidity": 99,
      "wind_speed": 1.5
    },
    {
      "current_at": "2018-09-12 03:00:00",
      "temp": 12.08,
      "pressure": 1024.94,
      "humidity": 100,
      "wind_speed": 4.11
    },
    {
      "current_at": "2018-09-12 06:00:00",
      "temp": 10.37,
      "pressure": 1026.48,
      "humidity": 97,
      "wind_speed": 2.37
    },
    {
      "current_at": "2018-09-12 09:00:00",
      "temp": 12.95,
      "pressure": 1029.4,
      "humidity": 88,
      "wind_speed": 2.87
    },
    {
      "current_at": "2018-09-12 12:00:00",
      "temp": 14.86,
      "pressure": 1030.31,
      "humidity": 79,
      "wind_speed": 2.97
    },
    {
      "current_at": "2018-09-12 15:00:00",
      "temp": 15.5,
      "pressure": 1030.09,
      "humidity": 72,
      "wind_speed": 1.82
    },
    {
      "current_at": "2018-09-12 18:00:00",
      "temp": 13.89,
      "pressure": 1030,
      "humidity": 71,
      "wind_speed": 1.2
    },
    {
      "current_at": "2018-09-12 21:00:00",
      "temp": 9.98,
      "pressure": 1030.57,
      "humidity": 74,
      "wind_speed": 0.93
    },
    {
      "current_at": "2018-09-13 00:00:00",
      "temp": 9.14,
      "pressure": 1030.15,
      "humidity": 77,
      "wind_speed": 1.21
    },
    {
      "current_at": "2018-09-13 03:00:00",
      "temp": 9.16,
      "pressure": 1029.31,
      "humidity": 77,
      "wind_speed": 1.26
    },
    {
      "current_at": "2018-09-13 06:00:00",
      "temp": 6.46,
      "pressure": 1029.3,
      "humidity": 85,
      "wind_speed": 1.21
    },
    {
      "current_at": "2018-09-13 09:00:00",
      "temp": 19.33,
      "pressure": 1029.85,
      "humidity": 79,
      "wind_speed": 1.81
    },
    {
      "current_at": "2018-09-13 12:00:00",
      "temp": 18.73,
      "pressure": 1029.29,
      "humidity": 71,
      "wind_speed": 2.21
    },
    {
      "current_at": "2018-09-13 15:00:00",
      "temp": 19.61,
      "pressure": 1028.19,
      "humidity": 59,
      "wind_speed": 2.86
    },
    {
      "current_at": "2018-09-13 18:00:00",
      "temp": 16.43,
      "pressure": 1027.28,
      "humidity": 59,
      "wind_speed": 2.21
    },
    {
      "current_at": "2018-09-13 21:00:00",
      "temp": 9.22,
      "pressure": 1028.1,
      "humidity": 68,
      "wind_speed": 3.11
    },
    {
      "current_at": "2018-09-14 00:00:00",
      "temp": 10.13,
      "pressure": 1028.25,
      "humidity": 82,
      "wind_speed": 3.13
    },
    {
      "current_at": "2018-09-14 03:00:00",
      "temp": 8.2,
      "pressure": 1027.42,
      "humidity": 98,
      "wind_speed": 2.66
    },
    {
      "current_at": "2018-09-14 06:00:00",
      "temp": 9.79,
      "pressure": 1027,
      "humidity": 98,
      "wind_speed": 2.95
    },
    {
      "current_at": "2018-09-14 09:00:00",
      "temp": 19.91,
      "pressure": 1027.2,
      "humidity": 68,
      "wind_speed": 2.85
    },
    {
      "current_at": "2018-09-14 12:00:00",
      "temp": 18.82,
      "pressure": 1026.33,
      "humidity": 61,
      "wind_speed": 4.63
    },
    {
      "current_at": "2018-09-14 15:00:00",
      "temp": 16.47,
      "pressure": 1025.89,
      "humidity": 61,
      "wind_speed": 5.05
    },
    {
      "current_at": "2018-09-14 18:00:00",
      "temp": 16.62,
      "pressure": 1025.89,
      "humidity": 61,
      "wind_speed": 4.11
    },
    {
      "current_at": "2018-09-14 21:00:00",
      "temp": 12.69,
      "pressure": 1027.17,
      "humidity": 69,
      "wind_speed": 3.57
    },
    {
      "current_at": "2018-09-15 00:00:00",
      "temp": 11.36,
      "pressure": 1028.18,
      "humidity": 83,
      "wind_speed": 3.61
    },
    {
      "current_at": "2018-09-15 03:00:00",
      "temp": 9.91,
      "pressure": 1028.56,
      "humidity": 94,
      "wind_speed": 3.48
    },
    {
      "current_at": "2018-09-15 06:00:00",
      "temp": 9.7,
      "pressure": 1028.87,
      "humidity": 100,
      "wind_speed": 3.12
    },
    {
      "current_at": "2018-09-15 09:00:00",
      "temp": 16.01,
      "pressure": 1029.9,
      "humidity": 73,
      "wind_speed": 2.92
    },
    {
      "current_at": "2018-09-15 12:00:00",
      "temp": 20.42,
      "pressure": 1029.66,
      "humidity": 64,
      "wind_speed": 3.17
    },
    {
      "current_at": "2018-09-15 15:00:00",
      "temp": 19.87,
      "pressure": 1028.83,
      "humidity": 57,
      "wind_speed": 3.46
    },
    {
      "current_at": "2018-09-15 18:00:00",
      "temp": 17.94,
      "pressure": 1028.67,
      "humidity": 57,
      "wind_speed": 2.87
    },
    {
      "current_at": "2018-09-15 21:00:00",
      "temp": 14.26,
      "pressure": 1028.74,
      "humidity": 69,
      "wind_speed": 2.81
    },
    {
      "current_at": "2018-09-16 00:00:00",
      "temp": 12.64,
      "pressure": 1027.98,
      "humidity": 83,
      "wind_speed": 2.82
    },
    {
      "current_at": "2018-09-16 03:00:00",
      "temp": 13.48,
      "pressure": 1026.09,
      "humidity": 87,
      "wind_speed": 3.46
    },
    {
      "current_at": "2018-09-16 06:00:00",
      "temp": 14.17,
      "pressure": 1024.29,
      "humidity": 84,
      "wind_speed": 4.53
    },
    {
      "current_at": "2018-09-16 09:00:00",
      "temp": 18.5,
      "pressure": 1024.1,
      "humidity": 63,
      "wind_speed": 4.91
    },
    {
      "current_at": "2018-09-16 12:00:00",
      "temp": 20.75,
      "pressure": 1023.67,
      "humidity": 58,
      "wind_speed": 5.62
    },
    {
      "current_at": "2018-09-16 15:00:00",
      "temp": 22.47,
      "pressure": 1022.87,
      "humidity": 53,
      "wind_speed": 5.37
    },
    {
      "current_at": "2018-09-16 18:00:00",
      "temp": 20.2,
      "pressure": 1023.01,
      "humidity": 64,
      "wind_speed": 4.31
    },
    {
      "current_at": "2018-09-16 21:00:00",
      "temp": 15.83,
      "pressure": 1024.06,
      "humidity": 83,
      "wind_speed": 3.56
    },
    {
      "current_at": "2018-09-17 00:00:00",
      "temp": 15.67,
      "pressure": 1024.15,
      "humidity": 94,
      "wind_speed": 3.31
    },
    {
      "current_at": "2018-09-17 03:00:00",
      "temp": 16.31,
      "pressure": 1024.01,
      "humidity": 100,
      "wind_speed": 3.11
    },
    {
      "current_at": "2018-09-17 06:00:00",
      "temp": 17.5,
      "pressure": 1023.83,
      "humidity": 98,
      "wind_speed": 2.86
    },
    {
      "current_at": "2018-09-17 09:00:00",
      "temp": 20.01,
      "pressure": 1023.5,
      "humidity": 82,
      "wind_speed": 2.96
    },
    {
      "current_at": "2018-09-17 12:00:00",
      "temp": 24.77,
      "pressure": 1020.71,
      "humidity": 59,
      "wind_speed": 5.11
    },
    {
      "current_at": "2018-09-17 15:00:00",
      "temp": 24.24,
      "pressure": 1018.69,
      "humidity": 46,
      "wind_speed": 5.37
    },
    {
      "current_at": "2018-09-17 18:00:00",
      "temp": 19.63,
      "pressure": 1016.96,
      "humidity": 45,
      "wind_speed": 4.17
    },
    {
      "current_at": "2018-09-17 21:00:00",
      "temp": 17.07,
      "pressure": 1015.38,
      "humidity": 48,
      "wind_speed": 4.32
    },
    {
      "current_at": "2018-09-18 00:00:00",
      "temp": 18.91,
      "pressure": 1013.2,
      "humidity": 50,
      "wind_speed": 4.96
    },
    {
      "current_at": "2018-09-18 03:00:00",
      "temp": 17,
      "pressure": 1011.89,
      "humidity": 72,
      "wind_speed": 5.12
    },
    {
      "current_at": "2018-09-18 06:00:00",
      "temp": 17.85,
      "pressure": 1011.07,
      "humidity": 88,
      "wind_speed": 7.32
    },
    {
      "current_at": "2018-09-18 09:00:00",
      "temp": 19.68,
      "pressure": 1012.97,
      "humidity": 69,
      "wind_speed": 7.91
    },
    {
      "current_at": "2018-09-18 12:00:00",
      "temp": 22.64,
      "pressure": 1014.53,
      "humidity": 55,
      "wind_speed": 7.21
    },
    {
      "current_at": "2018-09-18 15:00:00",
      "temp": 22.1,
      "pressure": 1015.57,
      "humidity": 51,
      "wind_speed": 6.66
    },
    {
      "current_at": "2018-09-18 18:00:00",
      "temp": 17.49,
      "pressure": 1016.58,
      "humidity": 62,
      "wind_speed": 6.87
    },
    {
      "current_at": "2018-09-18 21:00:00",
      "temp": 16.31,
      "pressure": 1017.81,
      "humidity": 73,
      "wind_speed": 6.66
    },
    {
      "current_at": "2018-09-19 00:00:00",
      "temp": 17.19,
      "pressure": 1017.96,
      "humidity": 76,
      "wind_speed": 6.63
    },
    {
      "current_at": "2018-09-19 03:00:00",
      "temp": 17.78,
      "pressure": 1017.53,
      "humidity": 78,
      "wind_speed": 6.07
    },
    {
      "current_at": "2018-09-19 06:00:00",
      "temp": 17.06,
      "pressure": 1017.61,
      "humidity": 83,
      "wind_speed": 5.06
    },
    {
      "current_at": "2018-09-19 09:00:00",
      "temp": 19.25,
      "pressure": 1017.77,
      "humidity": 77,
      "wind_speed": 7.91
    },
    {
      "current_at": "2018-09-19 12:00:00",
      "temp": 21.13,
      "pressure": 1017.72,
      "humidity": 64,
      "wind_speed": 9.66
    },
    {
      "current_at": "2018-09-19 15:00:00",
      "temp": 22.5,
      "pressure": 1017.99,
      "humidity": 59,
      "wind_speed": 8.81
    },
    {
      "current_at": "2018-09-19 18:00:00",
      "temp": 18.13,
      "pressure": 1019.2,
      "humidity": 65,
      "wind_speed": 7.51
    },
    {
      "current_at": "2018-09-19 21:00:00",
      "temp": 17.25,
      "pressure": 1019.51,
      "humidity": 72,
      "wind_speed": 6.42
    },
    {
      "current_at": "2018-09-20 00:00:00",
      "temp": 16.18,
      "pressure": 1019.52,
      "humidity": 74,
      "wind_speed": 7.22
    },
    {
      "current_at": "2018-09-20 03:00:00",
      "temp": 16.34,
      "pressure": 1018.67,
      "humidity": 81,
      "wind_speed": 6.42
    },
    {
      "current_at": "2018-09-20 06:00:00",
      "temp": 17.09,
      "pressure": 1018.13,
      "humidity": 80,
      "wind_speed": 6.45
    },
    {
      "current_at": "2018-09-20 09:00:00",
      "temp": 18.78,
      "pressure": 1017.6,
      "humidity": 73,
      "wind_speed": 7.31
    },
    {
      "current_at": "2018-09-20 12:00:00",
      "temp": 19.97,
      "pressure": 1016.52,
      "humidity": 66,
      "wind_speed": 8.46
    },
    {
      "current_at": "2018-09-20 15:00:00",
      "temp": 19.33,
      "pressure": 1014.81,
      "humidity": 70,
      "wind_speed": 8.27
    },
    {
      "current_at": "2018-09-20 18:00:00",
      "temp": 19.1,
      "pressure": 1012.02,
      "humidity": 70,
      "wind_speed": 8.96
    },
    {
      "current_at": "2018-09-20 21:00:00",
      "temp": 18.67,
      "pressure": 1009.12,
      "humidity": 75,
      "wind_speed": 9.6
    },
    {
      "current_at": "2018-09-21 00:00:00",
      "temp": 16.64,
      "pressure": 1004.32,
      "humidity": 87,
      "wind_speed": 11.3
    },
    {
      "current_at": "2018-09-21 03:00:00",
      "temp": 14.25,
      "pressure": 1002.96,
      "humidity": 82,
      "wind_speed": 10.81
    },
    {
      "current_at": "2018-09-21 06:00:00",
      "temp": 8.24,
      "pressure": 1009.91,
      "humidity": 77,
      "wind_speed": 8.2
    },
    {
      "current_at": "2018-09-21 09:00:00",
      "temp": 11.58,
      "pressure": 1013.83,
      "humidity": 74,
      "wind_speed": 7.66
    },
    {
      "current_at": "2018-09-21 12:00:00",
      "temp": 14.24,
      "pressure": 1015.33,
      "humidity": 66,
      "wind_speed": 8.71
    },
    {
      "current_at": "2018-09-21 15:00:00",
      "temp": 16.12,
      "pressure": 1016.66,
      "humidity": 60,
      "wind_speed": 10.01
    },
    {
      "current_at": "2018-09-21 18:00:00",
      "temp": 15.2,
      "pressure": 1019.5,
      "humidity": 58,
      "wind_speed": 7.67
    },
    {
      "current_at": "2018-09-21 21:00:00",
      "temp": 13.24,
      "pressure": 1022.97,
      "humidity": 63,
      "wind_speed": 5.76
    },
    {
      "current_at": "2018-09-22 00:00:00",
      "temp": 11.24,
      "pressure": 1024.37,
      "humidity": 70,
      "wind_speed": 4.37
    },
    {
      "current_at": "2018-09-22 03:00:00",
      "temp": 10.2,
      "pressure": 1025.21,
      "humidity": 77,
      "wind_speed": 3.81
    },
    {
      "current_at": "2018-09-22 06:00:00",
      "temp": 10.25,
      "pressure": 1025.81,
      "humidity": 81,
      "wind_speed": 3.46
    },
    {
      "current_at": "2018-09-22 09:00:00",
      "temp": 13.04,
      "pressure": 1027.04,
      "humidity": 70,
      "wind_speed": 3.57
    },
    {
      "current_at": "2018-09-22 12:00:00",
      "temp": 15.41,
      "pressure": 1027.05,
      "humidity": 63,
      "wind_speed": 4.02
    },
    {
      "current_at": "2018-09-22 15:00:00",
      "temp": 14.55,
      "pressure": 1026.07,
      "humidity": 62,
      "wind_speed": 3.61
    },
    {
      "current_at": "2018-09-22 18:00:00",
      "temp": 11.81,
      "pressure": 1025.4,
      "humidity": 89,
      "wind_speed": 1.81
    },
    {
      "current_at": "2018-09-22 21:00:00",
      "temp": 10.64,
      "pressure": 1023.63,
      "humidity": 98,
      "wind_speed": 2.01
    },
    {
      "current_at": "2018-09-23 00:00:00",
      "temp": 10.91,
      "pressure": 1018.93,
      "humidity": 100,
      "wind_speed": 4.31
    },
    {
      "current_at": "2018-09-23 03:00:00",
      "temp": 12.52,
      "pressure": 1012.93,
      "humidity": 100,
      "wind_speed": 3.92
    },
    {
      "current_at": "2018-09-23 06:00:00",
      "temp": 16.6,
      "pressure": 1009.09,
      "humidity": 100,
      "wind_speed": 5.51
    },
    {
      "current_at": "2018-09-23 09:00:00",
      "temp": 17.82,
      "pressure": 1006.22,
      "humidity": 97,
      "wind_speed": 8.71
    },
    {
      "current_at": "2018-09-23 12:00:00",
      "temp": 18.26,
      "pressure": 1001.47,
      "humidity": 97,
      "wind_speed": 10.16
    },
    {
      "current_at": "2018-09-23 15:00:00",
      "temp": 11.15,
      "pressure": 1002.91,
      "humidity": 100,
      "wind_speed": 15.66
    },
    {
      "current_at": "2018-09-23 18:00:00",
      "temp": 9.61,
      "pressure": 1019.25,
      "humidity": 98,
      "wind_speed": 10.41
    },
    {
      "current_at": "2018-09-23 21:00:00",
      "temp": 8.65,
      "pressure": 1028.12,
      "humidity": 95,
      "wind_speed": 7.21
    },
    {
      "current_at": "2018-09-24 00:00:00",
      "temp": 7.34,
      "pressure": 1033.43,
      "humidity": 95,
      "wind_speed": 5.56
    },
    {
      "current_at": "2018-09-24 03:00:00",
      "temp": 6,
      "pressure": 1036.52,
      "humidity": 95,
      "wind_speed": 4.42
    },
    {
      "current_at": "2018-09-24 06:00:00",
      "temp": 4.3,
      "pressure": 1038.84,
      "humidity": 98,
      "wind_speed": 3.11
    },
    {
      "current_at": "2018-09-24 09:00:00",
      "temp": 8.22,
      "pressure": 1041.91,
      "humidity": 96,
      "wind_speed": 2.81
    },
    {
      "current_at": "2018-09-24 12:00:00",
      "temp": 12.06,
      "pressure": 1042.88,
      "humidity": 80,
      "wind_speed": 2.91
    },
    {
      "current_at": "2018-09-24 15:00:00",
      "temp": 13.14,
      "pressure": 1042.68,
      "humidity": 68,
      "wind_speed": 3.48
    },
    {
      "current_at": "2018-09-24 18:00:00",
      "temp": 9.87,
      "pressure": 1042.95,
      "humidity": 71,
      "wind_speed": 2.17
    },
    {
      "current_at": "2018-09-24 21:00:00",
      "temp": 6.06,
      "pressure": 1044.44,
      "humidity": 97,
      "wind_speed": 2.01
    },
    {
      "current_at": "2018-09-25 00:00:00",
      "temp": 3.06,
      "pressure": 1044.93,
      "humidity": 94,
      "wind_speed": 1.15
    },
    {
      "current_at": "2018-09-25 03:00:00",
      "temp": 1.52,
      "pressure": 1045.02,
      "humidity": 93,
      "wind_speed": 1.19
    },
    {
      "current_at": "2018-09-25 06:00:00",
      "temp": 0.6,
      "pressure": 1044.97,
      "humidity": 89,
      "wind_speed": 1.15
    },
    {
      "current_at": "2018-09-25 09:00:00",
      "temp": 10.15,
      "pressure": 1045.45,
      "humidity": 79,
      "wind_speed": 1.81
    },
    {
      "current_at": "2018-09-25 12:00:00",
      "temp": 14.03,
      "pressure": 1044.8,
      "humidity": 70,
      "wind_speed": 1.76
    },
    {
      "current_at": "2018-09-25 15:00:00",
      "temp": 14.8,
      "pressure": 1042.94,
      "humidity": 60,
      "wind_speed": 1.76
    },
    {
      "current_at": "2018-09-25 18:00:00",
      "temp": 10.61,
      "pressure": 1041.53,
      "humidity": 68,
      "wind_speed": 1.17
    },
    {
      "current_at": "2018-09-25 21:00:00",
      "temp": 5.16,
      "pressure": 1041.65,
      "humidity": 90,
      "wind_speed": 1.46
    },
    {
      "current_at": "2018-09-26 00:00:00",
      "temp": 3.57,
      "pressure": 1040.64,
      "humidity": 88,
      "wind_speed": 1.63
    },
    {
      "current_at": "2018-09-26 03:00:00",
      "temp": 1.91,
      "pressure": 1039.51,
      "humidity": 88,
      "wind_speed": 0.96
    },
    {
      "current_at": "2018-09-26 06:00:00",
      "temp": 1.41,
      "pressure": 1038.4,
      "humidity": 86,
      "wind_speed": 1.21
    },
    {
      "current_at": "2018-09-26 09:00:00",
      "temp": 12.79,
      "pressure": 1038.64,
      "humidity": 69,
      "wind_speed": 1.81
    },
    {
      "current_at": "2018-09-26 12:00:00",
      "temp": 17,
      "pressure": 1037.53,
      "humidity": 61,
      "wind_speed": 2.12
    }
  ]
};

class MultiLineChart extends Component {
  render() {
    return <VegaLite spec={spec} data={data} />
  }
}

export default MultiLineChart;