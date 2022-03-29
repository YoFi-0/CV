const express = require("express");
const route  = require("express").Router()

route.get('/aboutMe', (req, res)=>{
    res.render('AboutMeAr')
})
route.get('/Skills', (req, res)=>{
    res.render('SkillsAr')
})
route.get('/portfolio', (req, res)=>{
    res.render('PortfolioAr')
})
route.get('/contact', (req, res)=>{
    res.render('ContactAr')
})
route.get('/work', (req, res)=>{
    res.render('WorkAr')
})

module.exports = route