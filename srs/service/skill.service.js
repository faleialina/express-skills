const array = [
  { id: 1, title: 'javascript' },
  { id: 2, title: 'typescript' },
  { id: 3, title: 'mongodb' },
  { id: 4, title: 'mongoose' },
  { id: 5, title: 'pg' },
];

function getAllSkills() {
  return array;
};

function getAllSkillById(id) {
  const filtered = array.filter((elem) => elem.id == id);
  return filtered;
};

function createSkill(title) {
  array.push({
    id: array.length + 1,
    title: title
  });
  return array;
};

function updateSkill(id, title) {
  const filtered = array.filter((elem) => elem.id != id);
  if (filtered.length !== array.length) {
    filtered.push({
      id,
      title
    });
    return filtered;
  } else {
    throw new Error('id нет');
  };
};

function deleteSkill(id) {
  const filtered = array.filter((elem) => elem.id != id);
  return filtered;
};

module.exports = { getAllSkills, getAllSkillById, createSkill, updateSkill, deleteSkill };
