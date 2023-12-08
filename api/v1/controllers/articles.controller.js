/**
 * English: imports the modules used
 * Indonesian: mengimpor modul yang digunakan
 */
import { PrismaClient } from "@prisma/client";
import {
  responseServer200,
  responseServer400,
  responseServer404,
  responseServer500,
} from "../configs/response.config.js";
import { validateDoi, validateUrls } from "./validation.controller.js";

/**
 * English: functions that will be used in the endpoint
 * Indonesian: fungsi-fungsi yang akan digunakan di endpoint
 */
const prisma = new PrismaClient();
let response_error = {};

const getAllUsers = async (req, res) => {
  try {
    const result = await prisma.article_details.findMany();

    result.length > 0
      ? responseServer200(res, "Successfully get data articles!", result)
      : responseServer404(res, "No data on database");
  } catch (error) {
    responseServer500(
      res,
      "Failed get data articles from database, check error",
      error.message
    );
  }
};

const checkDoi = async (req, res) => {
  response_error = {};
  const { error } = validateDoi(req.body);
  if (error)
    error.details.forEach((err_msg) => {
      response_error[err_msg.path[0]] = err_msg.message;
    });
  if (Object.keys(response_error).length === 0) {
    const { doi } = req.body;
    try {
      const result = await prisma.article_details.findMany({
        where: { article_doi: doi },
      });
      result.length > 0
        ? responseServer200(res, "Successfully get data articles!", result)
        : responseServer404(res, "No data on database");
    } catch (error) {
      responseServer500(
        res,
        "Error find data with doi field!, check error",
        error
      );
    }
  } else {
    responseServer500(
      res,
      "Failed to process endpoint, check",
      JSON.parse(JSON.stringify(response_error).replace(/\\"/g, ""))
    );
  }
};

const checkUrls = async (req, res) => {
  response_error = {};
  const { error } = validateUrls(req.body);
  if (error)
    error.details.forEach((err_msg) => {
      response_error[err_msg.path[0]] = err_msg.message;
    });
  if (Object.keys(response_error).length === 0) {
    const { article_urls } = req.body;
    try {
      const result = await prisma.article_details.findMany({
        where: { article_urls: article_urls },
      });
      result.length > 0
        ? responseServer200(res, "Successfully get data articles!", result)
        : responseServer404(res, "No data on database");
    } catch (error) {
      responseServer500(
        res,
        "Error find data with article urls field!, check error",
        error
      );
    }
  } else {
    responseServer500(
      res,
      "Failed to process endpoint, check",
      JSON.parse(JSON.stringify(response_error).replace(/\\"/g, ""))
    );
  }
};

export default { getAllUsers, checkDoi, checkUrls };
