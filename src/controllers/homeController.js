import db from '../models/index';
import CRUDSevice from '../services/CRUDSevice';
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();


        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }

}
let getCRUD = (req, res) => {

    return res.render('crud.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CRUDSevice.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from server')
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}