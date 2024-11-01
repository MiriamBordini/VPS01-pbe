const con = require('../connect/banco').con;

const create = (req, res) => {
    let marca_veiculo = req.body.marca_veiculo;
    let modelo_veiculo = req.body.modelo_veiculo;
    let ano_veiculo = req.body.ano_veiculo;
    let fabricacao_veiuclo = req.body.fabricacao_veiuclo;
    let cliente_id = req.body.cliente_id;

    let query = 'INSERT INTO carros (marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiuclo, cliente_id) VALUES';
    query += `('${marca_veiculo}', '${modelo_veiculo}', '${ano_veiculo}', '${fabricacao_veiuclo}', '${cliente_id}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
};

const read = (req, res) => {
    con.query('SELECT * FROM carros', (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
        }
    });
};

const update = (req, res) => {
    const id = req.params.id;
    let marca_veiculo = req.body.marca_veiculo;
    let modelo_veiculo = req.body.modelo_veiculo;
    let ano_veiculo = req.body.ano_veiculo;
    let fabricacao_veiuclo = req.body.fabricacao_veiuclo;
    let cliente_id = req.body.cliente_id;

    let query = `UPDATE carros SET marca_veiculo = '${marca_veiculo}', modelo_veiculo = '${modelo_veiculo}', ano_veiculo = '${ano_veiculo}', fabricacao_veiuclo = '${fabricacao_veiuclo}', cliente_id = '${cliente_id}' WHERE carros_id = ?`;
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Carro não encontrado.' });
            } else {
                res.status(200).json(result);
            }
        }
    });
};

const deletar = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM carros WHERE carros_id = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Carro não encontrado.' });
            } else {
                res.status(200).json({ message: 'Carro deletado com sucesso.' });
            }
        }
    });
};

module.exports = {
    create,
    read,
    update,
    deletar
};
