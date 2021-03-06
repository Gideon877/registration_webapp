module.exports = function(models) {

    const index = function(req, res, done) {
        var display = "";

        var regData = {
            reg_number: req.body.reg_number
        }

        if (!regData || !regData.reg_number) {
            // req.flash('error', 'Plate input should not be blank');
            res.render('reg_numbers');
        } else {

            models.Plate.findOne({
                reg_number: req.body.reg_number
            }, function(err, thePlate) {

                if (err) {
                    return done(err)
                }

                if (!thePlate) {
                    models.Plate.create({
                        reg_number: req.body.reg_number.toUpperCase()
                    }, function(err, result) {
                        if (err) {
                            return done(err)
                        }

                        models.Plate.find({}, function(err, result) {
                            if (err) {
                                return done(err)
                            }

                            var data = {
                                reg_num: result
                            }

                            res.render('reg_numbers', data);
                        });

                    })
                }

                if (thePlate) {
                    req.flash('error', 'Plate already exist!');
                    res.render('reg_numbers');
                }
            });
        }
    };

    const filterData = function(req, res, done) {

        var placeData = {
            location: req.body.location
        }


        if (!placeData || !placeData.location) {
            req.flash('error', 'Please select a location');
            res.render('reg_numbers');
        } else {

            models.Plate.find({

            }, function(err, thePlate) {

                var loc = '';
                if (err) {
                    return done(err)
                }

                if (placeData.location == 'capetown') {
                    loc = 'CA';
                }
                else if (placeData.location == 'bellville') {
                    loc = 'CY';
                }
                else if (placeData.location == 'paarl') {
                    loc = 'CJ';
                }

                function king(input) {
                    return input.reg_number.startsWith(loc);
                }

                var v = thePlate.filter(king);

                var data = {
                    reg_num: v
                }

                res.render('reg_numbers', data);
            });
        }
    }


    return {
        index,
        filterData
    };
};
