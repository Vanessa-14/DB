const express = require('express');
const Customer = require('../../models/customers');
const app = express();

app.get('/customer', (req, res) => {
    Customer.find({ strStatus: true })
        .exec((err, customers) => {
            if (err) {
                return res.status(400).json({

                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                count: customers.length,
                customers
            });
        });
});
//Buscar por id 
app.get('/customer/:id', (req, res) => {
    Customer.findById(req.params.id)
        .exec((err, customers) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                
                customers
            });
        });
});


app.post('/customer', (req, res) => {
    let body = req.body;
    let customer = new Customer({
        strAddress: body.strAddress,
        strCity: body.strCity,
        strCountry: body.strCountry,
        strDistrict: body.strDistrict,
        strFirst_Name: body.strFirst_Name,
        strLast_Name: body.strLast_Name,
        strStatus: body.strStatus,
    });

    customer.save((err, cusDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            cusDB
        });
    });
});

app.put('/customer/:id', (req, res) => {

    const customer = new Customer({
        _id: req.params.id,
        strAddress: req.body.strAddress,
        strCity: req.body.strCity,
        strCountry: req.body.strCountry,
        strDistrict: req.body.strDistrict,
        strFirst_Name: req.body.strFirst_Name,
        strLast_Name: req.body.strLast_Name
    });
    console.log(req.params.id);

    Customer.findByIdAndUpdate(req.params.id, customer).then((resp) => {
        return res.status(200).json({
            msg: 'El customer se ha actualizado exitosamente.',
            cont: resp
        });
    }).catch((err) => {
        return res.status(400).json({
            msg: 'Oups! Ocurrió un error al actualizar el customer',
            cont: err
        });

    });
});

app.delete('/customer/:id', (req, res) => {
    let id = req.params.id;
    Customer.findByIdAndUpdate(id, { strStatus: false }, { new: true, runValidators: true, context: 'query' }, (err, resp) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            resp
        });
    });
});

module.exports = app;