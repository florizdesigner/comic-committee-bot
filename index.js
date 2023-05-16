const express = require('express')
const axios = require('axios')
const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {polling: true})

bot.onText(/\/pay/, (msg, match) => {
    console.log('msg')
    console.log('match')
})
