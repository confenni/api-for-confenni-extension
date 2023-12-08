/**
 * English: imports the modules used
 * Indonesian: mengimpor modul yang digunakan
 */
import { express, baseURL, notFound } from "../configs/server.config.js";
import articles from "../controllers/articles.controller.js";

/**
 * English: call the router function in express
 * Indonesian: panggil fungsi router yang ada di express
 */
const route = express.Router();

/**
 * English: defines the url endpoint that will be used
 * Indonesian: mendefinisikan endpoint url yang akan digunakan
 */
const basicURI = `/${baseURL}`;

/**
 * English: endpoint url
 * Indonesian: endpoint url
 */
route.get(`${basicURI}/articles/`, articles.getAllUsers);
route.post(`${basicURI}/articles/check_doi`, articles.checkDoi);
route.post(`${basicURI}/articles/check_urls`, articles.checkUrls);

/**
 * English: endpoint url for those not found
 * Indonesian: endpoint url untuk yang tidak ditemukan
 */
route.use("/", notFound);

/**
 * English: export route
 * Indonesian: export route
 */
export default route;
