module.exports = function(models) {

        const index = function(req, res, done) {
            var display = "";

            var regData = {
                reg_number: req.body.reg_number
            }

            if (!regData || !regData.reg_number) {
                req.flash('error', 'Plate input should not be blank');
                res.render('reg_numbers');
            } else {

                models.Plate.find({
                    reg_number: req.body.reg_number
                }, function(err, thePlate) {

                    if (err) {
                        return done(err)
                    }
                    models.Plate.create({
                        reg_number: req.body.reg_number
                    }, function(err, result) {
                        if (err) {
                            return done(err)
                        }

                        models.Plate.find({}, function(err, result) {
                            if (err) {
                                return done(err)
                            }
                            console.log(result.reg_number);

                            display = result;
                            var data = {
                                reg_num: display
                            }

                            res.render('reg_numbers', data);
                        });

                    })
                });
            }
        };

        // const filter = function(req, res, done) {
        //     var placeData = {
        //         location: req.body.location
        //     }
        //
        //     if (!placeData) {
        //         req.flash('error', 'Please select a location');
        //         res.render('reg_numbers');
        //     } else {
        //         models.Plate.find({
        //                 reg_number: req.body.reg_number
        //             }, function(err, thePlate) {
        //
        //                 if (err) {
        //                     return done(err)
        //                 }
        //
        //                 // if (thePlate) {
        //                 //
        //                 // }
        //             });
        //         }
        //     }


            return {
                index
            };
        };
