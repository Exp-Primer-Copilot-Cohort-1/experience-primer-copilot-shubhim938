function skillsMember() {
  var skills = document.getElementById("skills");
  var member = document.getElementById("member");
  var memberSkills = document.getElementById("memberSkills");
  var memberSkillsTitle = document.getElementById("memberSkillsTitle");
  var memberSkillsList = document.getElementById("memberSkillsList");
  var memberSkillsListItems = memberSkillsList.children;

  for (var i = 0; i < memberSkillsListItems.length; i++) {
    var memberSkillsListItem = memberSkillsListItems[i];
    memberSkillsListItem.onclick = function() {
      var memberSkillsListItemText = this.innerHTML;
      var memberSkillsTitleText = memberSkillsTitle.innerHTML;
      var memberSkillsListHTML = memberSkillsList.innerHTML;

      memberSkillsTitle.innerHTML = memberSkillsListItemText;
      memberSkillsList.innerHTML = memberSkillsListHTML.replace(memberSkillsListItemText, memberSkillsTitleText);

      memberSkillsList.style.display = "none";
      memberSkills.style.display = "block";
    };
  }

  memberSkills.onclick = function() {
    memberSkills.style.display = "none";
    memberSkillsList.style.display = "block";
  };

  member.onclick = function() {
    skills.style.display = "block";
    member.style.display = "none";
  };
}