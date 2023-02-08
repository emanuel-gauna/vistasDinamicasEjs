module.exports = {
    index: function(req, res, next) {
        res.render('index', {
            title:"comision 19"
        });/* usaremos el metodo render para renderizar la vista */
        /* no hace falta indicar la carpeta views ni tampoco  */
    }
}
