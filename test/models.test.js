const assert = require('assert');
const Models = require('../models');

describe('modules should be able to', function() {

    var models = Models('mongodb://localhost/reg_numbers-tests');

    beforeEach(function(done) {
        models.Plate.remove({}, function(err){
            if(err){
                done(err)
            }
            models.Plate.create({
                reg_number: 'CA 987 0000'
            }, function(err){
                done(err);
            });
        });
    });

    it('store Plates to MongoDB', function(done) {
        models.Plate.create({
            reg_number: 'CA 987 2899'
        }, function(err) {
                models.Plate.findOne({
                    reg_number: 'CA 987 2899',
                }, function(err, plate) {
                    assert.equal("CA 987 2899", plate.reg_number)
                    done(err);
                });
            });
    });

    it('create a new Plate', function(done) {

        models.Plate.findOne({
            reg_number: 'CA 987 2899'
        }, function(err, thePlate){

            if (err){
                //test fail if there is an error
                return done(err)
            }

            // thePlate is not in the Datase
            assert.ok(thePlate === null);

            if (!thePlate){
                models.Plate.create({
                    reg_number: 'CF 987 2811'
                }, function(err, result){
                    if (err){
                        return done(err);
                    }
                    // check if the user was created
                    models.Plate.find({reg_number: 'CF 987 2811'}, function(err, results){
                        if (err){
                            return done(err);
                        }

                        assert.equal(1, results.length);
                        assert.equal("CF 987 2811", results[0].reg_number);
                        done();

                    });
                });
            }
        })
    });

    it('rejects duplicate', function(done) {

        models.Plate.findOne({
            reg_number: 'CA 987 0000',
        }, function(err, thePlate){
            if (err){
                //test fail if there is an error
                return done(err)
            }

            // thePlate is not in the Database
            assert.ok(thePlate !== null);
            if (thePlate){
                assert.equal('CA 987 0000', thePlate.reg_number);
                done();
            }

        });
    });
});
