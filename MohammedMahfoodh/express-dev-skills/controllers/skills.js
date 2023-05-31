const skills = [
    { firstSkill: 'Devlober' }, // 0
    { secoundSkill: 'Coding Express' }, // 1
    { thirdSkill: 'Programer' } // 2
  ]
    // HTTP get - Disply all elements from an Array
    exports.skills = function(req, res){
        res.json({skills})//skills: skills
      }
    
      // HTTP GET by ID/Index - Disply data by ID/Index
      //Show Functionality / Deteails Functionality
    exports.skillsId = function(req, res){
        res.json({data: skills[req.params.id]})
      }

const fake = [
    { firstSkill: 'Haker' }, // 0
    { secoundSkill: 'JavaScript' }, // 1
    { thirdSkill: 'HTML' } // 2
  ]
    // HTTP get - Disply all elements from an Array
    exports.fake = function(req, res){
        res.json({fake})//fake: fake
      }
    
      // HTTP GET by ID/Index - Disply data by ID/Index
      //Show Functionality / Deteails Functionality
    exports.fakeId = function(req, res){
        res.json({data: fake[req.params.id]})
      }
    