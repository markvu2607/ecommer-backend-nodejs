"use strict"

const express = require("express")
const { apiKey, permission, asyncHandler } = require("../auth/checkAuth")

const router = express.Router()

router.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello world!!!"
  })
})

router.use(asyncHandler(apiKey))

router.use(asyncHandler(permission("API_KEY_FREE")))

router.use("/v1/api", require("./access"))

module.exports = router
