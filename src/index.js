// https://appwrite.io/docs/products/functions/develop#logging
export default async ({ req, res, log, error }) => {
    log("hello world!");
    error("Error: ", "hello world!");
    return res.text("hello world!");
};