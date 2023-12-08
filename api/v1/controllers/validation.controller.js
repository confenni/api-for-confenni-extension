/**
 * English: imports the modules used
 * Indonesian: mengimpor modul yang digunakan
 */
import joi from "joi";

/**
 * English: functions that will be used for validation
 * Indonesian: fungsi-fungsi yang akan digunakan untuk validasi
 */
const validateDoi = (requestData) => {
  const doiSchema = joi
    .object({
      doi: joi.string().required(),
    })
    .options({ abortEarly: false });
  return doiSchema.validate(requestData);
};

const validateUrls = (requestData) => {
  const urlsSchema = joi
    .object({
      article_urls: joi.string().required(),
    })
    .options({ abortEarly: false });
  return urlsSchema.validate(requestData);
};

/**
 * English: export validation configuration
 * Indonesian: export konfigurasi validasi
 */
export { validateDoi, validateUrls };
