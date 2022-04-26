var config = require('./dbconfig');

//const express = require('express');
const sql = require('mssql');
//const app = express();

async function getTour(){
    try{
        let pool = await sql.connect(config);
        let tour = await pool.request().query("SELECT * FROM Tour");
        return tour.recordsets;
    } catch(error) {
        console.log(error);
    }
}
// id tour
async function getTourId(MaTour){
    try{
        let pool = await sql.connect(config);
        let tourid = await pool.request()
        .input('input_parameter' , sql.Char , MaTour)
        .query("SELECT * FROM Tour Where MaTour = @input_parameter");
        return tourid.recordsets;

    } catch(error) {
        console.log(error);
    }
}
// add tour
async function addTour(tour){
    try{
        let pool = await sql.connect(config);
        let insertTour = await pool.request()
        .input('MaTour',sql.Char,tour.MaTour)
        .input('TenTour',sql.NVarChar,tour.TenTour)
        .input('SoLuongVe',sql.Int, tour.SoLuongVe)
        .input('DiaDiemTour',sql.NVarChar,tour.DiaDiemTour)
        .input('Gia',sql.Money,tour.Gia)
        .execute('InsertTours');
        return insertTour.recordsets;
    } catch(error) {
        console.log(error);  
    }
}



module.exports = {
    getTour : getTour ,
    getTourId : getTourId,
    addTour : addTour
}