const db = require('../config/mysql-db');

const getStudents = async (req, res) => {
    try {

        const [data] = await db.query('SELECT * FROM student');
        if (!data) {
            return res.status(404).send({
                message: "No records found",
                success: false
            })
        }

        // console.log(data)

        return res.status(200).send({
            data: data
        })


    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Internal Server Error",
            success: false
        })
    }
}

const getStudentId = async (req, res) => {
    try {

        const { id } = req.params;
        const data = await db.query(`SELECT * FROM student where Roll_No = ${id}`);
        if (!data) {
            return res.status(404).send({
                message: "No records found",
                success: false
            })
        }


        return res.status(200).send({
            data: data[0]
        })


    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Internal Server Error",
            success: false
        })
    }
}

const createStudent = async (req, res) => {
    const { Roll_No, Student_Name, Course, DOB, Mobile_No } = req.body;

    const [result] = await db.query('INSERT INTO student (Roll_No,Student_Name,Course,Mobile_No) values (?,?,?,?)', [Roll_No, Student_Name, Course, DOB, Mobile_No])
    return res.status(200).send({
        data: result.insertId
    })
}

const students = [
    ["2706", "Ansul", "CS", "9999999999"],
    ["2707", "Ankit", "Mathematics", "9999999999"]
]

const createMultipleStudents = async (req, res) => {
    try {
        const [result] = await db.query('INSERT INTO student (Roll_No,Student_Name,Course,Mobile_No) values ?', [students]);
        res.status(200).send({ data: result.insertId });
    } catch (error) {
        console.log(error)
    }
}

const updateStudent = async (req, res) => {
    const { Roll_No, Mobile_No } = req.body;

    const [result] = await db.query('UPDATE student SET Mobile_No = ? where Roll_No = ?', [Mobile_No, Roll_No])
    return res.status(200).send({
        data: result.affectedRows,
        success: true
    })
}


const deleteStudent = async (req, res) => {
    const { id } = req.params;

    const [result] = await db.query('DELETE from student where Roll_No = ?', [id])
    return res.status(200).send({
        data: result.affectedRows
    })
}
module.exports = { getStudents, getStudentId, createStudent, updateStudent, deleteStudent, createMultipleStudents }