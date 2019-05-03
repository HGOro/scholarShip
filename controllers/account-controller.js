const db = require("../models");

module.exports = {
    find: (req, res) => {
        if(req.isAuthenticated()){
            db.account
            .findOne({where: {userUUID:req.session.passport.user}})
            .then(dbaccount => {
                res.json(dbaccount);
            })
            .catch(err => res.status(422).json(err));
        }
        res.status(401).json(err);
    },
    create: (req, res) => {
        if(req.isAuthenticated()){
          db.Account
          .create(req.body, {userUUID:req.session.passport.user})
          .then(dbaccount => {
            res.json(dbaccount);
          })
          .catch(err => res.status(422).json(err));
        }
        res.status(401).json(err);  
      },
      update: (req, res) => {
        if(req.isAuthenticated()){
          db.Account
          .update(req.body,{ where: {userUUID: req.session.passport.user}})
          .then(dbaccount => {
            res.json(dbaccount);
          })
          .catch(err => res.status(422).json(err));
        }
        res.status(401).json(err);  
      }
};