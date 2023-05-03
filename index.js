function excuseGen() {

    var Character = ['doctor', 'queen', 'alien', 'sister', 'dog', 'ghost'];
    var Action = ['erased', 'killed', 'found', 'destroyed', 'ate', 'threw away'];
    var Object = ['homework', 'laptop', 'dad', 'dog', 'Lia(?)', 'money'];

    var C1 = Character[Math.round(Math.random()*(Character.length-1))];
    var C2 = Action[Math.round(Math.random()*(Action.length-1))];
    var C3 = Object[Math.round(Math.random()*(Object.length-1))];

	document.getElementById('TheExcuses').innerHTML = '<div>My ' + C1 + ' ' + C2 + '<br> my ' + C3 + '.</div>'
}