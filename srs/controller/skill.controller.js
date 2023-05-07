const express = require('express');
const { getAllSkills, getAllSkillById, createSkill } = require('../service/skill.service.js');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const data = getAllSkills();
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const data = getAllSkillById(id);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

router.post('/', (req, res) => {
  try {
    const { title } = req.body;
    const data = createSkill(title);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  };
});

module.exports = router;
