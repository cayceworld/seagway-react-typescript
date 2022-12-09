"use strict";
exports.__esModule = true;
exports.API_URL = void 0;
exports.API_URL =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3131/api";
