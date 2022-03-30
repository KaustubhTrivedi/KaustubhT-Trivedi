// const express = require("express")()
import express from 'express'
import axios from 'axios'
import 'dotenv'
const app = express()
const url = `https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc?api_key=${process.env.API_KEY}`
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000

const data = await axios.get(url)
const cats = data.data
const catString = JSON.stringify(cats)
console.log(catString)

app.use(express.json())

app.get('/', (req, res) => {
    res.send(cats)
})

// app.get('/:id', (req, res) => {
//     const cat = cats.id
//     res.send(cat)
// })
app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}...`)
})