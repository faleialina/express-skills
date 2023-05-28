const express = require('express');
const { isValidId } = require('../helpers/validator');
const { getAllSkills, getAllSkillById, createSkill, updateSkill, deleteSkill } = require('../service/skill.service.js');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const data = getAllSkills();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get('/:id', isValidId, (req, res) => {
  try {
    const { id } = req.params;
    const data = getAllSkillById(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post('/', (req, res) => {
  try {
    const { title } = req.body;
    const data = createSkill(title);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put('/:id', isValidId, (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const data = updateSkill(id, title);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.delete('/:id', isValidId, (req, res) => {
  try {
    const { id } = req.params;
    const data = deleteSkill(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
