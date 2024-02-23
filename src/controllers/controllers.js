import {pool} from '../db.js';

export const home = (req, res) => res.render('home', {title: 'Home'})

export const login = (req, res) => res.render('login', {title: 'Login'})

export const registro = (req, res) => res.render('registro', {title: 'Registro'})

export const insertUsers = async (req, res) => {
    const {nameUser, password} = req.body
    const [rows] = await pool.query('INSERT INTO users (nameUser, password) VALUES (?, ?)', 
    [nameUser, password])
    res.send('ok')
}

export const showUsers = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users');
    res.json(rows)
}

export const deleteUser = async (req, res) => {
    const [rows] = await pool.query('DELETE FROM users WHERE id=?',[req.params.id]);
    let id = req.params.id;
    res.send('usuario borrado')
}