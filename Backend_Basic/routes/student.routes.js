const express = require('express');
const router = express.Router();
const {getStudents, getStudentId,createStudent, updateStudent, deleteStudent} = require('../controllers/studentController')

router.get('/api/students',(request,response)=>{
    response.send('Hello Students')
})

router.get('/api/get-students-list',getStudents)
router.get('/api/get-student/:id',getStudentId)
router.post('/api/create-student',createStudent)
router.patch('/api/update-student',updateStudent)
router.delete('/api/delete-student/:id',deleteStudent)
module.exports = router