'use strict';

/**
 * Class Declaration
 * Write Static Method
 * Module Export Class
 */

class Controller {

    static Homepage(req, res) {
        res.send('Hello dari Controller');
    }

}

module.exports = {
  Controller,
};
